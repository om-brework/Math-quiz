import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';

/**
 * Item aktif bila path saat ini sama dengan url-nya, atau berada di bawahnya
 * (mis. /admin/pelanggan?page=2). Url "akar" (/admin, /orang-tua) hanya aktif bila persis,
 * kecuali tidak ada item lain yang lebih spesifik cocok.
 */
export function isActiveUrl(current: string, url: string, all: string[] = []): boolean {
    const path = current.split('?')[0].replace(/\/+$/, '') || '/';
    const target = url.replace(/\/+$/, '') || '/';
    if (path === target) return true;
    if (target === '/settings/profile' && path.startsWith('/settings/')) return true;
    if (!path.startsWith(target + '/')) return false;
    // ada item lain yang lebih spesifik dan cocok? maka bukan item ini
    return !all.some((u) => u !== url && u.length > url.length && (path === u || path.startsWith(u + '/')));
}

export function NavMain({ items = [], label }: { items: NavItem[]; label?: string }) {
    const page = usePage();
    const urls = items.map((i) => i.url);
    return (
        <SidebarGroup className="px-2 py-0">
            {label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
            <SidebarMenu>
                {items.map((item) => {
                    const active = isActiveUrl(page.url, item.url, urls);
                    return (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild isActive={active} tooltip={item.title}>
                                <Link href={item.url} prefetch aria-current={active ? 'page' : undefined}>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
