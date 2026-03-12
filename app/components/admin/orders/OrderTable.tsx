'use client'
import { useState } from 'react'
import { Avatar, Select, Table } from 'antd'
import { SearchOutlined, ShoppingOutlined } from '@ant-design/icons'
import { motion } from 'motion/react'
import moment from 'moment'
import StatusBadge from './StatusBadge'
import { t, orders, Order } from './orderData'

const colTitle = (text: string) => (
  <span style={{ fontSize: 12, color: t.textMuted, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
    {text}
  </span>
)

const columns = [
  {
    title: colTitle('Customer'),
    key: 'customer',
    render: () => (
      <div className="flex items-center gap-3">
        <Avatar size={36} style={{ background: 'linear-gradient(135deg, #ef4444, #f97316)', fontWeight: 700 }}>S</Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-semibold" style={{ color: t.textPrimary }}>Santosh Kr.</span>
          <span className="text-xs" style={{ color: t.textMuted }}>email@gmail.com</span>
        </div>
      </div>
    ),
  },
  {
    title: colTitle('Order'),
    key: 'product',
    render: (item: Order) => (
      <div className="flex flex-col">
        <span className="text-sm font-medium" style={{ color: t.textPrimary }}>{item.product.productName}</span>
        <span className="text-xs" style={{ color: t.textMuted }}>Qty: {item.product.quantity} · {item.orderId}</span>
      </div>
    ),
  },
  {
    title: colTitle('Amount'),
    key: 'price',
    render: (item: Order) => (
      <div className="flex flex-col">
        <span className="text-sm font-bold" style={{ color: t.textPrimary }}>₹{item.totalAmount.toFixed(2)}</span>
        <span className="text-xs" style={{ color: t.textMuted }}>₹{item.product.price} / unit</span>
      </div>
    ),
  },
  {
    title: colTitle('Address'),
    key: 'address',
    render: () => (
      <span className="text-xs" style={{ color: t.textSecondary, maxWidth: 180, display: 'block' }}>
        1234 Elm Street, Apt 56B,<br />Springfield, IL 62704
      </span>
    ),
  },
  {
    title: colTitle('Status'),
    key: 'status',
    render: (item: Order) => (
      <div className="flex flex-col gap-2">
        <StatusBadge status={item.status} />
        <Select defaultValue="processing" size="small" style={{ width: 120 }}>
          <Select.Option value="processing">Processing</Select.Option>
          <Select.Option value="dispatched">Dispatched</Select.Option>
          <Select.Option value="returned">Returned</Select.Option>
        </Select>
      </div>
    ),
  },
  {
    title: colTitle('Date'),
    key: 'date',
    render: (item: Order) => (
      <div className="flex flex-col">
        <span className="text-sm" style={{ color: t.textPrimary }}>{moment(item.createdAt).format('MMM DD, YYYY')}</span>
        <span className="text-xs" style={{ color: t.textMuted }}>{moment(item.createdAt).format('hh:mm A')}</span>
      </div>
    ),
  },
]

const OrderTable = () => {
  const [search, setSearch] = useState('')
  const filtered = orders.filter(o =>
    o.product.productName.toLowerCase().includes(search.toLowerCase()) ||
    o.orderId.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="rounded-2xl overflow-hidden"
      style={{ background: t.cardBg, border: `1px solid ${t.border}`, boxShadow: '0 1px 3px rgba(15,23,42,0.06)' }}
    >
      <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: `1px solid ${t.border}` }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: t.accentLight }}>
            <ShoppingOutlined style={{ color: t.accent, fontSize: 13 }} />
          </div>
          <span className="font-semibold text-sm" style={{ color: t.textPrimary }}>All Orders</span>
          <span className="text-xs rounded-full px-2 py-0.5 font-medium" style={{ background: t.accentLight, color: t.accent }}>
            {filtered.length}
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ background: '#f8fafc', border: `1px solid ${t.border}` }}>
          <SearchOutlined style={{ color: t.textMuted, fontSize: 13 }} />
          <input
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none bg-transparent text-sm"
            style={{ color: t.textPrimary, width: 160 }}
          />
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={filtered}
        rowKey="orderId"
        pagination={{ pageSize: 5, size: 'small', style: { padding: '12px 24px' } }}
        style={{ fontFamily: "'Inter', sans-serif" }}
        onRow={() => ({
          style: { cursor: 'pointer', transition: 'background 0.15s' },
          onMouseEnter: (e) => { (e.currentTarget as HTMLElement).style.background = '#fafafa' },
          onMouseLeave: (e) => { (e.currentTarget as HTMLElement).style.background = 'transparent' },
        })}
      />
    </motion.div>
  )
}

export default OrderTable