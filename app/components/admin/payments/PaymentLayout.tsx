import PaymentStatCards from './PaymentStatCards'
import PaymentTable from './PaymentTable'

const PaymentLayout = () => (
  <div className="flex flex-col gap-6">
    <PaymentStatCards />
    <PaymentTable />
  </div>
)

export default PaymentLayout