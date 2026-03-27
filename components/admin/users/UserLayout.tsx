'use client'
import { UserOutlined } from '@ant-design/icons'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { users, t } from './userData'
import UserStatCards from './UserStatCards'
import UserToolbar from './UserToolbar'
import UserCard from './UserCard'

const UserLayout = () => {
  const [search, setSearch] = useState('')

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex flex-col gap-6">
      <UserStatCards />
      <UserToolbar search={search} count={filtered.length} onSearch={setSearch} />

      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((user, i) => (
              <UserCard key={user.id} user={user} index={i} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-24 rounded-2xl"
            style={{ background: t.cardBg, border: `1px solid ${t.border}` }}
          >
            <UserOutlined style={{ fontSize: 40, color: t.textMuted }} />
            <p className="mt-3 text-sm font-medium" style={{ color: t.textMuted }}>No users found</p>
            <p className="text-xs mt-1" style={{ color: t.textMuted }}>Try a different search term</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default UserLayout