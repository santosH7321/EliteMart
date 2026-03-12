'use client'
import { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { t, menus } from './tokens';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <motion.aside
      animate={{ width: collapsed ? 68 : 248 }}
      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
      className="relative flex flex-col h-full shrink-0 overflow-hidden"
      style={{ background: t.sidebar, borderRight: `1px solid ${t.sidebarBorder}` }}
    >
      <div className="flex items-center h-15 px-4 shrink-0" style={{ borderBottom: `1px solid ${t.sidebarBorder}` }}>
        <AnimatePresence mode="wait">
          {!collapsed ? (
            <motion.div key="full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Image src="/images/logo.svg" alt="EliteMart" width={200} height={35} priority style={{ objectFit: 'contain' }} />
            </motion.div>
          ) : (
            <motion.div key="icon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mx-auto">
              <Image src="/images/favicon.svg" alt="Logo" width={30} height={30} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <nav className="flex-1 px-2 py-4 flex flex-col gap-0.5 overflow-y-auto">
        {menus.map((item, i) => {
          const isActive = pathname.includes(item.key);
          return (
            <motion.div key={item.key} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
              <Link href={item.href} style={{ textDecoration: 'none' }}>
                <motion.div
                  whileHover={{ x: collapsed ? 0 : 3 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative flex items-center gap-3 rounded-lg cursor-pointer"
                  style={{
                    padding: collapsed ? '10px 0' : '9px 10px',
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    background: isActive ? t.accentLight : 'transparent',
                  }}
                >
                  {isActive && (
                    <motion.div layoutId="activeBar" className="absolute left-0 top-1.5 bottom-1.5 w-0.75 rounded-full"
                      style={{ background: t.accent }} transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span style={{ color: isActive ? t.accent : t.sidebarText, fontSize: 15, marginLeft: isActive ? 4 : 0 }}>
                    {item.icon}
                  </span>
                  {!collapsed && (
                    <span className="text-sm font-medium whitespace-nowrap" style={{ color: isActive ? t.sidebarTextActive : t.sidebarText }}>
                      {item.label}
                    </span>
                  )}
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      <div className="p-2" style={{ borderTop: `1px solid ${t.sidebarBorder}` }}>
        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-medium"
          style={{ background: 'rgba(0,0,0,0.04)', color: t.sidebarText, border: 'none', cursor: 'pointer' }}
        >
          <motion.span animate={{ rotate: collapsed ? 180 : 0 }} transition={{ duration: 0.28 }}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </motion.span>
          {!collapsed && 'Collapse'}
        </motion.button>
      </div>
    </motion.aside>
  );
}