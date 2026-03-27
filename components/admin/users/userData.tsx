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

export type User = {
  id: number
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
  joinedAt: string
  orders: number
}

export const users: User[] = Array(16).fill(0).map((_, i) => ({
  id: i,
  name:  ['Rohan Kumar','Priya Sharma','Amit Singh','Neha Gupta',
          'Raj Patel','Sunita Rao','Vikram Das','Anjali Mehta',
          'Suresh Nair','Deepa Joshi','Arjun Verma','Kavya Iyer',
          'Ravi Tiwari','Meera Pillai','Karan Malhotra','Pooja Reddy'][i],
  email: [
    'rohan@gmail.com','priya@gmail.com','amit@gmail.com','neha@gmail.com',
    'raj@gmail.com','sunita@gmail.com','vikram@gmail.com','anjali@gmail.com',
    'suresh@gmail.com','deepa@gmail.com','arjun@gmail.com','kavya@gmail.com',
    'ravi@gmail.com','meera@gmail.com','karan@gmail.com','pooja@gmail.com'
  ][i],
  role: i % 5 === 0 ? 'Admin' : 'Customer',
  status: i % 4 === 0 ? 'inactive' : 'active',
  joinedAt: ['Jan 3, 2024','Feb 14, 2024','Mar 22, 2024','Apr 10, 2024',
             'May 1, 2024','Jun 18, 2024','Jul 7, 2024','Aug 25, 2024',
             'Sep 3, 2024','Oct 11, 2024','Nov 19, 2024','Dec 5, 2024',
             'Jan 15, 2025','Feb 2, 2025','Mar 9, 2025','Apr 21, 2025'][i],
  orders: [12,5,8,3,20,1,7,15,2,9,4,11,6,18,0,3][i],
}))