'use client'
import { SearchOutlined } from '@ant-design/icons'
import { motion } from 'motion/react'
import { t } from './userData'

type Props = {
  search: string
  count: number
  onSearch: (v: string) => void
}

const UserToolbar = ({ search, count, onSearch }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.1 }}
    className="flex items-center justify-between gap-4 rounded-2xl px-5 py-4"
    style={{ background: t.cardBg, border: `1px solid ${t.border}`, boxShadow: '0 1px 3px rgba(15,23,42,0.05)' }}
  >
    <div className="flex items-center gap-2 rounded-xl px-4 py-2.5 flex-1 max-w-sm"
      style={{ background: t.mainBg, border: `1px solid ${t.border}` }}>
      <SearchOutlined style={{ color: t.textMuted, fontSize: 14 }} />
      <input
        placeholder="Search users by name or email..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="outline-none bg-transparent text-sm flex-1"
        style={{ color: t.textPrimary }}
      />
      {search && (
        <button onClick={() => onSearch('')}
          style={{ color: t.textMuted, background: 'none', border: 'none', cursor: 'pointer', fontSize: 12 }}>
          ✕
        </button>
      )}
    </div>
    <span className="text-sm" style={{ color: t.textMuted }}>
      {count} user{count !== 1 ? 's' : ''}
    </span>
  </motion.div>
)

export default UserToolbar