'use client'
import { RightOutlined } from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { t, accountMenuItems } from './tokens';

export default function Header() {
  const pathname = usePathname();

  const breadcrumbs = pathname.split('/').filter(Boolean).map((seg, i, arr) => ({
    label: seg.charAt(0).toUpperCase() + seg.slice(1),
    href: '/' + arr.slice(0, i + 1).join('/'),
    isLast: i === arr.length - 1,
  }));

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.35 }}
      className="flex items-center justify-between px-8 shrink-0"
      style={{ height: 60, background: t.headerBg, backdropFilter: 'blur(16px)', borderBottom: `1px solid ${t.headerBorder}` }}
    >
      <nav className="flex items-center gap-1.5">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center gap-1.5">
            {i > 0 && <RightOutlined style={{ fontSize: 9, color: t.textMuted }} />}
            <Link href={crumb.href} style={{ fontSize: 13, fontWeight: crumb.isLast ? 600 : 400, color: crumb.isLast ? t.textPrimary : t.textMuted, textDecoration: 'none' }}>
              {crumb.label}
            </Link>
          </span>
        ))}
      </nav>

      <Dropdown
        trigger={['click']} placement="bottomRight"
        menu={{
          items: accountMenuItems.map((item) => ({
            key: item.key,
            icon: <span style={{ color: item.key === 'logout' ? t.danger : t.accent }}>{item.icon}</span>,
            label: <span style={{ fontSize: 13, fontWeight: 500, color: item.key === 'logout' ? t.danger : t.textPrimary }}>{item.label}</span>,
          })),
          style: { background: t.cardBg, border: `1px solid ${t.headerBorder}`, borderRadius: 12, padding: 6, boxShadow: '0 8px 32px rgba(15,23,42,0.12)' },
        }}
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2.5 cursor-pointer rounded-xl px-3 py-1.5"
          style={{ background: '#f1f5f9', border: `1px solid rgba(15,23,42,0.08)` }}
        >
          <Avatar size={28} src="/images/avatar.svg" style={{ border: `2px solid ${t.accent}` }} />
          <div className="hidden sm:flex flex-col leading-tight">
            <span style={{ fontSize: 12, fontWeight: 600, color: t.textPrimary }}>Santosh Kr.</span>
            <span style={{ fontSize: 10, color: t.textMuted }}>Admin</span>
          </div>
        </motion.div>
      </Dropdown>
    </motion.header>
  );
}