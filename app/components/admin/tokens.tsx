import {
  CreditCardOutlined, ReconciliationOutlined,
  ShoppingOutlined, UserOutlined,
  ProfileOutlined, SettingOutlined, LoginOutlined
} from '@ant-design/icons';

export const t = {
  sidebar: '#ffffff',
  sidebarBorder: 'rgba(0,0,0,0.06)',
  accent: '#ef4444',
  accentLight: 'rgba(239,68,68,0.08)',
  mainBg: '#f8fafc',
  cardBg: '#ffffff',
  headerBg: 'rgba(255,255,255,0.92)',
  headerBorder: 'rgba(15,23,42,0.08)',
  textPrimary: '#0f172a',
  textMuted: '#94a3b8',
  sidebarText: '#64748b',
  sidebarTextActive: '#ef4444',
  danger: '#ef4444',
};

export const menus = [
  { icon: <ShoppingOutlined />, label: 'Products', href: '/admin/products', key: 'products' },
  { icon: <ReconciliationOutlined />, label: 'Orders', href: '/admin/orders', key: 'orders' },
  { icon: <CreditCardOutlined />, label: 'Payments', href: '/admin/payments', key: 'payments' },
  { icon: <UserOutlined />, label: 'Users', href: '/admin/users', key: 'users' },
];

export const accountMenuItems = [
  { icon: <ProfileOutlined />, label: 'Santosh Kr.', key: 'fullname' },
  { icon: <SettingOutlined />, label: 'Settings', key: 'settings' },
  { icon: <LoginOutlined />, label: 'Logout', key: 'logout' },
];