'use client'
import { FC } from 'react';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import Header from './Header';
import { t } from './tokens';
import ChildrenInterface from '@/interface/children.interface';

const AdminLayout: FC<ChildrenInterface> = ({ children }) => {
  const pathname = usePathname();
  const pageTitle = pathname.split('/').filter(Boolean).pop() ?? 'Dashboard';
  const title = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: t.mainBg, fontFamily: "'Inter', sans-serif" }}>
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto" style={{ padding: '28px 32px', background: t.mainBg }}>
          <motion.div key={pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-5 rounded-full" style={{ background: t.accent }} />
              <h1 className="text-xl font-bold" style={{ color: t.textPrimary }}>{title}</h1>
            </div>
            <p className="text-xs ml-3" style={{ color: t.textMuted }}>EliteMart · Admin Panel</p>
          </motion.div>

          <motion.div key={pathname + '-card'} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.06 }}
            className="rounded-2xl" style={{ background: t.cardBg, border: `1px solid rgba(15,23,42,0.07)`, boxShadow: '0 1px 3px rgba(15,23,42,0.06)', padding: 24, minHeight: 420 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;