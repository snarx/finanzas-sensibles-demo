#!/bin/bash

# Script para generar estructura de carpetas - Finanzas Sensibles
# Basado en Clean Architecture y Mobile-First approach

echo "🚀 Generando estructura de carpetas para Finanzas Sensibles..."

# Crear estructura principal
mkdir -p src/{components,screens,hooks,services,utils,data,contexts,types,constants}

# === COMPONENTS (Componentes reutilizables) ===
mkdir -p src/components/{ui,layout,forms,charts,modals}

# UI Components básicos
mkdir -p src/components/ui/{Button,Input,Card,Avatar,Badge,Modal,Toast,Spinner,Switch}

# Layout Components
mkdir -p src/components/layout/{Header,Footer,Sidebar,Navigation,TabBar}

# Form Components
mkdir -p src/components/forms/{InputField,SelectField,CheckboxField,FormWrapper}

# Chart Components
mkdir -p src/components/charts/{BarChart,LineChart,PieChart,ReportCard}

# Modal Components
mkdir -p src/components/modals/{TransactionModal,GoalModal,ConfirmModal}

# === SCREENS (Pantallas principales) ===
mkdir -p src/screens/{auth,dashboard,transactions,reports,family,settings,onboarding}

# Auth Screens
mkdir -p src/screens/auth/{Login,Register,ForgotPassword}

# Dashboard Screens
mkdir -p src/screens/dashboard/{Home,Balance,Insights}

# Transaction Screens
mkdir -p src/screens/transactions/{TransactionList,TransactionDetail,AddTransaction,OCRCamera}

# Report Screens
mkdir -p src/screens/reports/{ExpenseReport,IncomeReport,CategoryReport}

# Family Screens
mkdir -p src/screens/family/{FamilyList,MemberDetail,InviteMember}

# Settings Screens
mkdir -p src/screens/settings/{Profile,Security,Privacy,Notifications}

# Onboarding Screens
mkdir -p src/screens/onboarding/{Welcome,Features,CreateAccount}

# === HOOKS (Custom Hooks) ===
mkdir -p src/hooks/{api,ui,auth,transactions,family}

# === SERVICES (Servicios y APIs) ===
mkdir -p src/services/{api,auth,storage,ai,ocr,notifications}

# === UTILS (Utilidades) ===
mkdir -p src/utils/{formatters,validators,helpers,constants}

# === DATA (Datos mock y constantes) ===
mkdir -p src/data/{mock,schemas,migrations}

# === CONTEXTS (React Context) ===
mkdir -p src/contexts/{auth,theme,family,notifications}

# === TYPES (TypeScript types) ===
mkdir -p src/types/{api,components,screens,common}

# === CONSTANTS (Constantes de la app) ===
mkdir -p src/constants/{colors,fonts,sizes,routes,api}

# === ASSETS (Recursos estáticos) ===
mkdir -p src/assets/{images,icons,fonts,animations}

# === TESTS (Pruebas) ===
mkdir -p src/__tests__/{components,screens,hooks,services,utils}

echo "📁 Creando archivos base..."

# Crear archivos index.js para components
cat > src/components/index.js << 'EOF'
// UI Components
export { default as Button } from './ui/Button/Button';
export { default as Input } from './ui/Input/Input';
export { default as Card } from './ui/Card/Card';
export { default as Avatar } from './ui/Avatar/Avatar';
export { default as Badge } from './ui/Badge/Badge';
export { default as Modal } from './ui/Modal/Modal';
export { default as Toast } from './ui/Toast/Toast';
export { default as Spinner } from './ui/Spinner/Spinner';

// Layout Components
export { default as Header } from './layout/Header/Header';
export { default as TabBar } from './layout/TabBar/TabBar';
export { default as Navigation } from './layout/Navigation/Navigation';

// Form Components
export { default as InputField } from './forms/InputField/InputField';
export { default as SelectField } from './forms/SelectField/SelectField';
export { default as FormWrapper } from './forms/FormWrapper/FormWrapper';

// Chart Components
export { default as BarChart } from './charts/BarChart/BarChart';
export { default as ReportCard } from './charts/ReportCard/ReportCard';
EOF

# Crear archivos index.js para screens
cat > src/screens/index.js << 'EOF'
// Auth Screens
export { default as Login } from './auth/Login/Login';
export { default as Register } from './auth/Register/Register';

// Dashboard Screens
export { default as Home } from './dashboard/Home/Home';
export { default as Balance } from './dashboard/Balance/Balance';

// Transaction Screens
export { default as TransactionList } from './transactions/TransactionList/TransactionList';
export { default as TransactionDetail } from './transactions/TransactionDetail/TransactionDetail';
export { default as AddTransaction } from './transactions/AddTransaction/AddTransaction';
export { default as OCRCamera } from './transactions/OCRCamera/OCRCamera';

// Report Screens
export { default as ExpenseReport } from './reports/ExpenseReport/ExpenseReport';
export { default as CategoryReport } from './reports/CategoryReport/CategoryReport';

// Family Screens
export { default as FamilyList } from './family/FamilyList/FamilyList';
export { default as MemberDetail } from './family/MemberDetail/MemberDetail';

// Settings Screens
export { default as Profile } from './settings/Profile/Profile';
export { default as Security } from './settings/Security/Security';
export { default as Notifications } from './settings/Notifications/Notifications';

// Onboarding Screens
export { default as Welcome } from './onboarding/Welcome/Welcome';
export { default as Features } from './onboarding/Features/Features';
EOF

# Crear archivos de constantes
cat > src/constants/colors.js << 'EOF'
export const COLORS = {
  primary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    900: '#134e4a',
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    900: '#0f172a',
  },
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
  white: '#ffffff',
  black: '#000000',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  }
};
EOF

cat > src/constants/routes.js << 'EOF'
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
EOF

cat > src/constants/api.js << 'EOF'
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
EOF

# Crear tipos básicos
cat > src/types/common.js << 'EOF'
// Common types for the application

export const USER_ROLES = {
  ADMIN: 'admin',
  MEMBER: 'member',
  VIEWER: 'viewer',
};

export const TRANSACTION_TYPES = {
  INCOME: 'income',
  EXPENSE: 'expense',
};

export const TRANSACTION_CATEGORIES = {
  FOOD: 'food',
  TRANSPORT: 'transport',
  HEALTH: 'health',
  ENTERTAINMENT: 'entertainment',
  UTILITIES: 'utilities',
  SHOPPING: 'shopping',
  EDUCATION: 'education',
  OTHER: 'other',
};

export const NOTIFICATION_TYPES = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
};
EOF

# Crear datos mock
cat > src/data/mock/transactions.js << 'EOF'
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
EOF

cat > src/data/mock/family.js << 'EOF'
export const mockFamily = {
  id: '1',
  name: 'Familia González',
  members: [
    {
      id: '1',
      name: 'María González',
      email: 'maria@gmail.com',
      role: 'admin',
      avatar: 'MG',
      isActive: true,
    },
    {
      id: '2',
      name: 'Carlos González',
      email: 'carlos@gmail.com',
      role: 'member',
      avatar: 'CG',
      isActive: true,
    },
    {
      id: '3',
      name: 'Ana González',
      email: 'ana@gmail.com',
      role: 'member',
      avatar: 'AG',
      isActive: true,
    },
  ],
};
EOF

# Crear utilidades
cat > src/utils/formatters.js << 'EOF'
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('es-AR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
};

export const formatPercentage = (value) => {
  return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
};

export const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
};
EOF

cat > src/utils/validators.js << 'EOF'
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  // Mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const validateAmount = (amount) => {
  const numAmount = parseFloat(amount);
  return !isNaN(numAmount) && numAmount > 0;
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};
EOF

# Crear hooks básicos
cat > src/hooks/useAuth.js << 'EOF'
import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/auth/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};
EOF

cat > src/hooks/useLocalStorage.js << 'EOF'
import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};
EOF

# Crear contexto de autenticación
cat > src/contexts/auth/AuthContext.jsx << 'EOF'
import React, { createContext, useReducer, useEffect } from 'react';
import { authReducer, initialState } from './authReducer';
import { AuthService } from '../../services/auth/AuthService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Verificar si hay token guardado al iniciar
    const token = localStorage.getItem('authToken');
    if (token) {
      dispatch({ type: 'SET_TOKEN', payload: token });
    }
  }, []);

  const login = async (email, password) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await AuthService.login(email, password);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response });
      return response;
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: error.message });
      throw error;
    }
  };

  const logout = () => {
    AuthService.logout();
    dispatch({ type: 'LOGOUT' });
  };

  const value = {
    ...state,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
EOF

cat > src/contexts/auth/authReducer.js << 'EOF'
export const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    
    case 'LOGIN_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isAuthenticated: false,
      };
    
    case 'LOGOUT':
      return {
        ...initialState,
      };
    
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    
    default:
      return state;
  }
};
EOF

# Crear servicio de autenticación
cat > src/services/auth/AuthService.js << 'EOF'
import { API_CONFIG, API_ENDPOINTS } from '../../constants/api';

export class AuthService {
  static async login(email, password) {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_ENDPOINTS.LOGIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Error en el login');
      }

      const data = await response.json();
      
      // Guardar token en localStorage
      localStorage.setItem('authToken', data.token);
      
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async register(userData) {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_ENDPOINTS.REGISTER}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Error en el registro');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  static logout() {
    localStorage.removeItem('authToken');
  }

  static getToken() {
    return localStorage.getItem('authToken');
  }
}
EOF

echo "✅ Estructura de carpetas generada exitosamente!"
echo ""
echo "📋 Resumen de la estructura:"
echo "├── src/"
echo "│   ├── components/     # Componentes reutilizables UI"
echo "│   ├── screens/        # Pantallas principales"
echo "│   ├── hooks/          # Custom hooks"
echo "│   ├── services/       # APIs y servicios"
echo "│   ├── utils/          # Utilidades y helpers"
echo "│   ├── data/           # Datos mock y constantes"
echo "│   ├── contexts/       # React Context"
echo "│   ├── types/          # Tipos y interfaces"
echo "│   ├── constants/      # Constantes de la app"
echo "│   ├── assets/         # Recursos estáticos"
echo "│   └── __tests__/      # Pruebas unitarias"
echo ""
echo "🎯 Próximos pasos:"
echo "1. Mover tu App.jsx actual a src/screens/dashboard/Home/"
echo "2. Crear componentes básicos en src/components/ui/"
echo "3. Implementar las pantallas según las imágenes proporcionadas"
echo "4. Configurar los servicios de API"
echo "5. Agregar tests unitarios"
echo ""
echo "🚀 ¡Listo para desarrollar Finanzas Sensibles!"