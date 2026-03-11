"use client"

import { motion } from 'motion/react'
import { t, orders } from './orderData'

const StatCard = ({ label, value, sub, delay }: { label: string; value: string; sub: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay }}
    className="rounded-xl p-5 flex flex-col gap-1"
    style={{ background: t.cardBg, border: `1px solid ${t.border}`, boxShadow: '0 1px 3px rgba(15,23,42,0.06)' }}
  >
    <p className="text-xs font-medium" style={{ color: t.textMuted }}>{label}</p>
    <p className="text-2xl font-bold" style={{ color: t.textPrimary }}>{value}</p>
    <p className="text-xs" style={{ color: t.textMuted }}>{sub}</p>
  </motion.div>
)

const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0).toFixed(2)
const successful   = orders.filter(o => o.status === 'success').length
const pending      = orders.filter(o => o.status === 'pending').length

const StatCards = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <StatCard label="Total Orders" value={String(orders.length)} sub="All time"         delay={0}    />
    <StatCard label="Successful"   value={String(successful)}    sub="Completed orders" delay={0.07} />
    <StatCard label="Pending"      value={String(pending)}       sub="Awaiting action"  delay={0.14} />
    <StatCard label="Revenue"      value={`₹${totalRevenue}`}    sub="From all orders"  delay={0.21} />
  </div>
)

export default StatCards