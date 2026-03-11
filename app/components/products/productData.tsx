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
  id: number
  name: string
  price: number
  original: number
  stock: number
  category: string
}

export const mockProducts: Product[] = Array(12).fill(0).map((_, i) => ({
  id: i,
  name: ["Men's Blue Jeans","Wireless Earbuds","Leather Wallet","Running Shoes",
         "Smart Watch","Backpack","Sunglasses","Hoodie",
         "Desk Lamp","Water Bottle","Notebook","Keychain"][i],
  price:    [2000,1500,899,3200,4500,1200,750,1800,650,299,199,99][i],
  original: [4000,2000,1200,4000,6000,1800,1200,2500,999,499,299,199][i],
  stock:    [20,5,12,8,3,15,30,7,25,50,100,200][i],
  category: ['Clothing','Electronics','Accessories','Footwear',
             'Electronics','Bags','Accessories','Clothing',
             'Home','Lifestyle','Stationery','Accessories'][i],
}))