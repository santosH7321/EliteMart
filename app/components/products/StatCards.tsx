import { motion } from 'motion/react'
import { t, mockProducts } from './productData'

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

const lowStock = mockProducts.filter(p => p.stock <= 5).length

const StatCards = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <StatCard 
        label="Total Products" 
        value={String(mockProducts.length)} 
        sub="Listed items"      
        delay={0}    
    />
    <StatCard 
        label="Low Stock"      
        value={String(lowStock)}           
        sub="Need restocking"  
        delay={0.07} 
    />
    <StatCard 
        label="Categories"     
        value="8"                           
        sub="Active categories" 
        delay={0.14} 
    />
    <StatCard 
        label="Total Value"    
        value="₹1.2L"                       
        sub="Inventory worth"   
        delay={0.21} 
    />
  </div>
)

export default StatCards