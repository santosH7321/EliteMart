"use client"

import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { motion } from 'motion/react'
import Image from 'next/image'
import { Product, t } from './productData'

type Props = {
  product: Product
  index: number
  onEdit: (p: Product) => void
  onDelete: (id: number) => void
}

const ProductCard = ({ product, index, onEdit, onDelete }: Props) => {
  const discount = Math.round((1 - product.price / product.original) * 100)
  const isLowStock = product.stock <= 5

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(15,23,42,0.1)' }}
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{ background: t.cardBg, border: `1px solid ${t.border}`, boxShadow: '0 1px 3px rgba(15,23,42,0.06)' }}
    >
      <div className="relative w-full h-45 overflow-hidden" style={{ background: '#f1f5f9' }}>
        <Image src={product.image} fill alt={product.title} style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} className="hover:scale-105" />
        <div className="absolute top-3 left-3 rounded-lg px-2 py-1 text-xs font-bold" style={{ background: t.accent, color: '#fff' }}>
          -{product.discount}%
        </div>
        <div className="absolute top-3 right-3 rounded-lg px-2 py-1 text-xs font-semibold"
          style={{ background: isLowStock ? 'rgba(239,68,68,0.12)' : 'rgba(22,163,74,0.10)', color: isLowStock ? '#ef4444' : '#16a34a' }}>
          {isLowStock ? '⚠ Low' : `${product.stock} pcs`}
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
            style={{ background: t.accentLight, color: t.accent }}>
            {product.category}
          </span>
          <p className="mt-2 text-sm font-semibold leading-tight" style={{ color: t.textPrimary }}>{product.title}</p>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-base font-bold" style={{ color: t.textPrimary }}>
            ₹{product.price?.toLocaleString()}
          </span>
          <span className="text-xs line-through" style={{ color: t.textMuted }}>₹{product.original?.toLocaleString()}</span>
        </div>

        <div className="flex gap-2 mt-auto pt-2" style={{ borderTop: `1px solid ${t.border}` }}>
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => onEdit(product)}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold"
            style={{ background: 'rgba(22,163,74,0.08)', color: '#16a34a', border: 'none', cursor: 'pointer' }}>
            <EditOutlined /> Edit
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => onDelete(product._id)}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold"
            style={{ background: t.accentLight, color: t.accent, border: 'none', cursor: 'pointer' }}>
            <DeleteOutlined /> Delete
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard