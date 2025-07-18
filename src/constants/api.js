export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  REFRESH: '/auth/refresh',
  LOGOUT: '/auth/logout',
  
  // Transactions
  TRANSACTIONS: '/transactions',
  TRANSACTION_DETAIL: '/transactions/:id',
  OCR_PROCESS: '/transactions/ocr',
  
  // Reports
  EXPENSE_REPORT: '/reports/expenses',
  CATEGORY_REPORT: '/reports/categories',
  
  // Family
  FAMILY: '/family',
  FAMILY_MEMBERS: '/family/members',
  INVITE_MEMBER: '/family/invite',
  
  // AI
  AI_INSIGHTS: '/ai/insights',
  AI_PREDICTIONS: '/ai/predictions',
  
  // Notifications
  NOTIFICATIONS: '/notifications',
};

export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
};
