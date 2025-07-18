import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';

// Importar componentes modulares
import Landing from './screens/onboarding/Landing/Landing';
import Features from './screens/onboarding/Features/Features';
import Login from './screens/auth/Login/Login';
import Register from './screens/auth/Register/Register';
import Dashboard from './screens/dashboard/Dashboard/Dashboard';

// Placeholder screens for other routes
const Reports = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">📊 Reportes</h1>
      <p className="text-gray-600">Pantalla en desarrollo...</p>
      <a href="/" className="mt-4 inline-block bg-teal-500 text-white px-4 py-2 rounded-2xl">
        ← Volver al inicio
      </a>
    </div>
  </div>
);

const Family = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">👥 Familia</h1>
      <p className="text-gray-600">Pantalla en desarrollo...</p>
      <a href="/" className="mt-4 inline-block bg-teal-500 text-white px-4 py-2 rounded-2xl">
        ← Volver al inicio
      </a>
    </div>
  </div>
);

const Settings = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">⚙️ Configuración</h1>
      <p className="text-gray-600">Pantalla en desarrollo...</p>
      <a href="/" className="mt-4 inline-block bg-teal-500 text-white px-4 py-2 rounded-2xl">
        ← Volver al inicio
      </a>
    </div>
  </div>
);

const Notifications = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">🔔 Notificaciones</h1>
      <p className="text-gray-600">Pantalla en desarrollo...</p>
      <a href="/" className="mt-4 inline-block bg-teal-500 text-white px-4 py-2 rounded-2xl">
        ← Volver al inicio
      </a>
    </div>
  </div>
);

const Transactions = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">💰 Transacciones</h1>
      <p className="text-gray-600">Pantalla en desarrollo...</p>
      <a href="/" className="mt-4 inline-block bg-teal-500 text-white px-4 py-2 rounded-2xl">
        ← Volver al inicio
      </a>
    </div>
  </div>
);

function App() {
  console.log('🚀 App rendering with modular components');

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <div className="App">
        <Routes>
          {/* Onboarding Routes */}
          <Route path={ROUTES.LANDING} element={<Landing />} />
          <Route path={ROUTES.FEATURES} element={<Features />} />

          {/* Auth Routes */}
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />

          {/* Dashboard Routes */}
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />

          {/* Other Routes */}
          <Route path={ROUTES.REPORTS} element={<Reports />} />
          <Route path={ROUTES.FAMILY} element={<Family />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
          <Route path={ROUTES.NOTIFICATIONS} element={<Notifications />} />
          <Route path={ROUTES.TRANSACTIONS} element={<Transactions />} />

          {/* Redirect any other route to landing */}
          <Route path="*" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;