import { motion } from 'motion/react'
import { t, users } from './userData'

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

const active   = users.filter(u => u.status === 'active').length
const admins   = users.filter(u => u.role === 'Admin').length
const inactive = users.filter(u => u.status === 'inactive').length

const UserStatCards = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <StatCard 
        label="Total Users"   
        value={String(users.length)} 
        sub="Registered accounts" 
        delay={0}    
    />
    <StatCard 
        label="Active"        
        value={String(active)}       
        sub="Currently active"    
        delay={0.07} 
    />
    <StatCard 
        label="Inactive"      
        value={String(inactive)}     
        sub="Not active"          
        delay={0.14} 
    />
    <StatCard 
        label="Admins"        
        value={String(admins)}       
        sub="Admin accounts"      
        delay={0.21} 
    />
  </div>
)

export default UserStatCards