import StatCards from './StatCards'
import OrderTable from './OrderTable'

const OrderLayout = () => (
  <div className="flex flex-col gap-6">
    <StatCards />
    <OrderTable />
  </div>
)

export default OrderLayout