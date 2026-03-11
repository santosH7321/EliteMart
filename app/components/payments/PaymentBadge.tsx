import { statusConfig } from './paymentData'

const PaymentBadge = ({ status }: { status: string }) => {
  const cfg = statusConfig[status] ?? { label: status, color: '#64748b', bg: 'rgba(100,116,139,0.08)' }
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold"
      style={{ color: cfg.color, background: cfg.bg }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: cfg.color }} />
      {cfg.label}
    </span>
  )
}

export default PaymentBadge