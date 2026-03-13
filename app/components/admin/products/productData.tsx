export const t = {
  accent: '#ef4444',
  accentLight: 'rgba(239,68,68,0.08)',
  accentMid: 'rgba(239,68,68,0.15)',
  textPrimary: '#0f172a',
  textMuted: '#94a3b8',
  textSecondary: '#64748b',
  border: 'rgba(15,23,42,0.07)',
  cardBg: '#ffffff',
  mainBg: '#f8fafc',
}

export type Product = {
  _id: number
  title: string
  image: string
  price: number
  description: string
  original: number
  stock: number
  category: string
  quantity: number
  discount: number
}
