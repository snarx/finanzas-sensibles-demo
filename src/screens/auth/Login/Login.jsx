import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Brain, Eye, EyeOff } from 'lucide-react';
import Button from '../../../components/ui/Button/Button';
import { ROUTES } from '../../../constants/routes';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulación de login
        setTimeout(() => {
            setLoading(false);
            navigate(ROUTES.DASHBOARD);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6">
                <button
                    onClick={() => navigate(ROUTES.LANDING)}
                    className="flex items-center text-gray-600 hover:text-gray-700 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-1" />
                </button>
                <h1 className="text-xl font-semibold text-gray-900">Iniciar Sesión</h1>
                <div className="w-6"></div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
                {/* Logo */}
                <div className="w-20 h-20 bg-teal-500 rounded-3xl flex items-center justify-center shadow-xl mb-8">
                    <Brain className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    ¡Bienvenido de vuelta!
                </h2>

                <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="ejemplo@correo.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contraseña
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Ingresa tu contraseña"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-4 pr-12 text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                            />
                            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                                Recordarme
                            </label>
                        </div>
                        <button
                            type="button"
                            className="text-sm text-teal-600 hover:text-teal-700"
                        >
                            ¿Olvidaste tu contraseña?
                        </button>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="primary"
                        size="full"
                        loading={loading}
                    >
                        Iniciar Sesión
                    </Button>

                    {/* Register Link */}
                    <div className="text-center">
                        <span className="text-gray-600">¿No tienes cuenta? </span>
                        <button
                            type="button"
                            onClick={() => navigate(ROUTES.REGISTER)}
                            className="text-teal-600 hover:text-teal-700 font-medium"
                        >
                            Regístrate
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">o continúa con</span>
                        </div>
                    </div>

                    {/* Social Login */}
                    <div className="space-y-3">
                        <Button
                            type="button"
                            variant="social"
                            size="full"
                            onClick={() => console.log('Google login')}
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Google
                        </Button>

                        <Button
                            type="button"
                            variant="social"
                            size="full"
                            onClick={() => console.log('Facebook login')}
                        >
                            <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Facebook
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;