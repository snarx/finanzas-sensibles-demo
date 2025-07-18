export const mockTransactions = [
  {
    id: '1',
    description: 'Supermercado Disco',
    amount: -1250,
    category: 'food',
    date: '2025-07-18',
    user: 'Carlos',
    type: 'expense',
  },
  {
    id: '2',
    description: 'Sueldo María',
    amount: 85000,
    category: 'income',
    date: '2025-07-16',
    user: 'María',
    type: 'income',
  },
  {
    id: '3',
    description: 'Farmacia Central',
    amount: -890,
    category: 'health',
    date: '2025-07-15',
    user: 'Ana',
    type: 'expense',
  },
];

export const mockBalance = {
  total: 24750595,
  income: 8500,
  expenses: 6234.2,
  growth: 12.5,
};
