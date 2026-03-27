export const t = {
  accent: '#ef4444',
  accentLight: 'rgba(239,68,68,0.08)',
  textPrimary: '#0f172a',
  textMuted: '#94a3b8',
  textSecondary: '#64748b',
  border: 'rgba(15,23,42,0.07)',
  cardBg: '#ffffff',
  mainBg: '#f8fafc',
}

export type Payment = {
  orderId: string
  userId: string
  product: { productId: string; productName: string; quantity: number; price: number }
  totalAmount: number
  status: string
  createdAt: string
}

export const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  pending: { label: 'Pending',    color: '#d97706', bg: 'rgba(217,119,6,0.08)'   },
  success: { label: 'Paid',       color: '#16a34a', bg: 'rgba(22,163,74,0.08)'   },
  error:   { label: 'Failed',     color: '#ef4444', bg: 'rgba(239,68,68,0.08)'   },
  warning: { label: 'On Hold',    color: '#7c3aed', bg: 'rgba(124,58,237,0.08)'  },
}

export const payments: Payment[] = [
  {
    orderId: 'ORD1001', userId: 'USR001',
    product: { productId: 'P001', productName: 'Wireless Mouse', quantity: 2, price: 29.99 },
    totalAmount: 59.98, status: 'pending', createdAt: '2025-06-05T10:00:00Z',
  },
  {
    orderId: 'ORD1002', userId: 'USR002',
    product: { productId: 'P003', productName: 'Bluetooth Headphones', quantity: 1, price: 59.99 },
    totalAmount: 59.99, status: 'success', createdAt: '2025-06-04T12:45:00Z',
  },
  {
    orderId: 'ORD1003', userId: 'USR003',
    product: { productId: 'P002', productName: 'USB-C Charger', quantity: 3, price: 29.99 },
    totalAmount: 89.97, status: 'error', createdAt: '2025-06-03T14:30:00Z',
  },
  {
    orderId: 'ORD1004', userId: 'USR004',
    product: { productId: 'P004', productName: 'Laptop Stand', quantity: 1, price: 49.99 },
    totalAmount: 49.99, status: 'warning', createdAt: '2025-06-02T16:00:00Z',
  },
]