'use client'
import { AppstoreOutlined } from '@ant-design/icons'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { message } from 'antd'
import { mockProducts, Product, t } from './productData'
import StatCards from './StatCards'
import ProductToolbar from './ProductToolbar'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

const ProductLayout = () => {
  const [search, setSearch] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [editProduct, setEditProduct] = useState<Product | null>(null)

  const filtered = mockProducts.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  const handleEdit = (p: Product) => { setEditProduct(p); setModalOpen(true) }
  const handleDelete = (_id: number) => message.success('Product removed')
  const handleClose = () => { setModalOpen(false); setEditProduct(null) }

  return (
    <div className="flex flex-col gap-6">
      <StatCards />
      <ProductToolbar search={search} count={filtered.length} onSearch={setSearch} onAdd={() => setModalOpen(true)} />

      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-24 rounded-2xl"
            style={{ background: t.cardBg, border: `1px solid ${t.border}` }}>
            <AppstoreOutlined style={{ fontSize: 40, color: t.textMuted }} />
            <p className="mt-3 text-sm font-medium" style={{ color: t.textMuted }}>No products found</p>
            <p className="text-xs mt-1" style={{ color: t.textMuted }}>Try a different search term</p>
          </motion.div>
        )}
      </AnimatePresence>

      <ProductModal open={modalOpen} onClose={handleClose} editProduct={editProduct} />
    </div>
  )
}

export default ProductLayout