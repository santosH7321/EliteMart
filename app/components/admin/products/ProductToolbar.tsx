'use client'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { motion } from 'motion/react'
import { t } from './productData'

type Props = {
  search: string
  count: number
  onSearch: (v: string) => void
  onAdd: () => void
}

const ProductToolbar = ({ search, count, onSearch, onAdd }: Props) => (
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
        placeholder="Search products or categories..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="outline-none bg-transparent text-sm flex-1"
        style={{ color: t.textPrimary }}
      />
      {search && (
        <button onClick={() => onSearch('')} style={{ color: t.textMuted, background: 'none', border: 'none', cursor: 'pointer', fontSize: 12 }}>✕</button>
      )}
    </div>

    <div className="flex items-center gap-3">
      <span className="text-sm" style={{ color: t.textMuted }}>{count} product{count !== 1 ? 's' : ''}</span>
      <motion.button
        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={onAdd}
        className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold"
        style={{ background: t.accent, color: '#fff', border: 'none', cursor: 'pointer', boxShadow: '0 4px 14px rgba(239,68,68,0.3)' }}
      >
        <PlusOutlined /> Add Product
      </motion.button>
    </div>
  </motion.div>
)

export default ProductToolbar