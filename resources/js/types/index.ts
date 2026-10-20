import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User | null;
    /** siswa yang sedang login di guard "student" (bisa bersamaan dengan orang tua di perangkat yang sama) */
    student: StudentUser | null;
}

export interface StudentUser {
    id: number;
    name: string;
    grade: string;
    avatar: string;
    username: string;
}

export interface Flash {
    success?: string | null;
    error?: string | null;
    pay?: { snapToken?: string; redirectUrl?: string; orderId?: string; paymentId?: number } | null;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    url: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    auth: Auth;
    flash: Flash;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'parent';
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
