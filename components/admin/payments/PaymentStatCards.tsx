"use client"
import { motion } from 'motion/react'
import { t, payments } from './paymentData'

const StatCard = ({ label, value, sub, delay }: { label: string; value: string; sub: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay }}
    className="rounded-xl p-5 flex flex-col gap-1"
    style={{ background: t.cardBg, border: `1px solid ${t.border}`, boxShadow: '0 1px 3px rgba(15,23,42,0.05)' }}
  >
    <p className="text-xs font-medium" style={{ color: t.textMuted }}>{label}</p>
    <p className="text-2xl font-bold" style={{ color: t.textPrimary }}>{value}</p>
    <p className="text-xs" style={{ color: t.textMuted }}>{sub}</p>
  </motion.div>
)

const totalRevenue  = payments.reduce((s, p) => s + p.totalAmount, 0).toFixed(2)
const paid          = payments.filter(p => p.status === 'success').length
const failed        = payments.filter(p => p.status === 'error').length
const pending       = payments.filter(p => p.status === 'pending').length

const PaymentStatCards = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <StatCard 
        label="Total Revenue" 
        value={`₹${totalRevenue}`}    
        sub="All transactions"   
        delay={0}    
    />
    <StatCard 
        label="Paid"          
        value={String(paid)}           
        sub="Successful payments" 
        delay={0.07} 
    />
    <StatCard 
        label="Pending"       
        value={String(pending)}        
        sub="Awaiting payment"   
        delay={0.14} 
    />
    <StatCard 
        label="Failed"        
        value={String(failed)}         
        sub="Needs attention"    
        delay={0.21} 
    />
  </div>
)

export default PaymentStatCards