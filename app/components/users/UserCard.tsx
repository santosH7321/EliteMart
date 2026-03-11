import { UserOutlined } from '@ant-design/icons'
import { motion } from 'motion/react'
import Image from 'next/image'
import { t, User } from './userData'

type Props = { user: User; index: number }

const UserCard = ({ user, index }: Props) => {
  const isActive = user.status === 'active'
  const isAdmin  = user.role === 'Admin'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(15,23,42,0.1)' }}
      className="rounded-2xl p-6 flex flex-col items-center gap-4 relative overflow-hidden"
      style={{ background: t.cardBg, border: `1px solid ${t.border}`, boxShadow: '0 1px 3px rgba(15,23,42,0.06)' }}
    >
      {isAdmin && (
        <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full"
          style={{ background: t.accentLight, color: t.accent }}>
          Admin
        </span>
      )}

      {/* Avatar */}
      <div className="relative">
        <div className="w-18 h-18 rounded-full overflow-hidden"
          style={{ border: `3px solid ${isActive ? 'rgba(22,163,74,0.3)' : 'rgba(148,163,184,0.3)'}` }}>
          <Image
            src="/images/avatar.svg"
            width={72}
            height={72}
            alt={user.name}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>

        <span
          className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full"
          style={{
            background: isActive ? '#16a34a' : '#94a3b8',
            border: '2px solid #fff',
          }}
        />
      </div>

      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-sm font-bold" style={{ color: t.textPrimary }}>{user.name}</p>
        <p className="text-xs" style={{ color: t.textMuted }}>{user.email}</p>
      </div>

      <div className="w-full flex justify-between rounded-xl px-4 py-2.5"
        style={{ background: t.mainBg, border: `1px solid ${t.border}` }}>
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-sm font-bold" style={{ color: t.textPrimary }}>{user.orders}</span>
          <span className="text-[10px]" style={{ color: t.textMuted }}>Orders</span>
        </div>
        <div className="w-px" style={{ background: t.border }} />
        <div className="flex flex-col items-center gap-0.5">
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{
              background: isActive ? 'rgba(22,163,74,0.08)' : 'rgba(148,163,184,0.12)',
              color: isActive ? '#16a34a' : '#94a3b8',
            }}
          >
            {isActive ? 'Active' : 'Inactive'}
          </span>
          <span className="text-[10px]" style={{ color: t.textMuted }}>Status</span>
        </div>
        <div className="w-px" style={{ background: t.border }} />
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[10px] font-semibold text-center" style={{ color: t.textSecondary }}>{user.joinedAt}</span>
          <span className="text-[10px]" style={{ color: t.textMuted }}>Joined</span>
        </div>
      </div>
    </motion.div>
  )
}

export default UserCard