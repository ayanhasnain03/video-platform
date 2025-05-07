import {
 Home,
 Search,
 Video,
 TrendingUp,
 Bell,
 MessageCircle,
 User,
 Upload,
 Settings,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface NavLink {
 label: string;
 url: string;
 icon: React.ElementType;
}

export const NAV_LINKS: NavLink[] = [
 {
   label: 'Home',
   url: '/',
   icon: Home,
 },
 {
   label: 'Explore',
   url: '/explore',
   icon: Search,
 },
 {
   label: 'Videos',
   url: '/videos',
   icon: Video,
 },
 {
   label: 'Trending',
   url: '/trending',
   icon: TrendingUp,
 },
];

export const NAV_LINKS_SUB: NavLink[] = [
 {
   label: 'Notifications',
   url: '/notifications',
   icon: Bell,
 },
 {
   label: 'Messages',
   url: '/messages',
   icon: MessageCircle,
 },
 {
   label: 'Profile',
   url: '/profile',
   icon: User,
 },
 {
   label: 'Upload',
   url: '/upload',
   icon: Upload,
 },
 {
   label: 'Settings',
   url: '/settings',
   icon: Settings,
 },
];
