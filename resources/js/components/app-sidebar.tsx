import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavGroup, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { CreditCard, Gauge, LayoutDashboard, Package, ReceiptText, Settings, UserRound, Users } from 'lucide-react';
import AppLogo from './app-logo';

const parentNav: NavGroup[] = [
    {
        title: 'Orang tua',
        items: [
            { title: 'Beranda', url: '/orang-tua', icon: LayoutDashboard },
            { title: 'Langganan', url: '/orang-tua/langganan', icon: CreditCard },
            { title: 'Pengaturan', url: '/settings/profile', icon: Settings },
        ],
    },
];

const adminNav: NavGroup[] = [
    {
        title: 'Admin',
        items: [
            { title: 'Ringkasan', url: '/admin', icon: Gauge },
            { title: 'Pelanggan', url: '/admin/pelanggan', icon: Users },
            { title: 'Pembayaran', url: '/admin/pembayaran', icon: ReceiptText },
            { title: 'Paket', url: '/admin/paket', icon: Package },
        ],
    },
    {
        title: 'Lainnya',
        items: [
            { title: 'Area orang tua', url: '/orang-tua', icon: UserRound },
            { title: 'Pengaturan', url: '/settings/profile', icon: Settings },
        ],
    },
];

/** Beranda sesuai peran pengguna. */
export function homeUrl(role: string | undefined): string {
    return role === 'admin' ? '/admin' : '/orang-tua';
}

export function navFor(role: string | undefined): NavGroup[] {
    return role === 'admin' ? adminNav : parentNav;
}

export function AppSidebar() {
    const { auth } = usePage<SharedData>().props;
    const role = auth.user?.role;

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={homeUrl(role)} prefetch aria-label="Langkah — beranda">
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                {navFor(role).map((group) => (
                    <NavMain key={group.title} label={group.title} items={group.items} />
                ))}
            </SidebarContent>

            <SidebarFooter>{auth.user && <NavUser />}</SidebarFooter>
        </Sidebar>
    );
}
