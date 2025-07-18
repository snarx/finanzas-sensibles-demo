export const ROUTES = {
  // Auth
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  
  // Main App
  HOME: '/',
  DASHBOARD: '/dashboard',
  
  // Transactions
  TRANSACTIONS: '/transactions',
  TRANSACTION_DETAIL: '/transactions/:id',
  ADD_TRANSACTION: '/transactions/add',
  OCR_CAMERA: '/transactions/ocr',
  
  // Reports
  REPORTS: '/reports',
  EXPENSE_REPORT: '/reports/expenses',
  CATEGORY_REPORT: '/reports/categories',
  
  // Family
  FAMILY: '/family',
  MEMBER_DETAIL: '/family/:id',
  INVITE_MEMBER: '/family/invite',
  
  // Settings
  SETTINGS: '/settings',
  PROFILE: '/settings/profile',
  SECURITY: '/settings/security',
  PRIVACY: '/settings/privacy',
  NOTIFICATIONS: '/settings/notifications',
  
  // Onboarding
  ONBOARDING: '/onboarding',
  WELCOME: '/onboarding/welcome',
  FEATURES: '/onboarding/features',
};
