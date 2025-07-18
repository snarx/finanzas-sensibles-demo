import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import Button from '../../../components/ui/Button/Button';
import Input from '../../../components/ui/Input/Input';
import { ROUTES } from '../../../constants/routes';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
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

        // Simulación de registro
        setTimeout(() => {
            setLoading(false);
            navigate(ROUTES.DASHBOARD);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6">
                <button
                    onClick={() => navigate(ROUTES.LANDING)}
                    className="flex items-center text-gray-600 hover:text-gray-700 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-1" />
                </button>
                <h1 className="text-xl font-semibold text-gray-900">Crear Cuenta</h1>
                <div className="w-6"></div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col px-6 pb-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre completo
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Ingresa tu nombre completo"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                        />
                    </div>

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
                                placeholder="Mínimo 8 caracteres"
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

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirmar contraseña
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                placeholder="Confirma tu contraseña"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-4 pr-12 text-base border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start space-x-3">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={acceptTerms}
                            onChange={(e) => setAcceptTerms(e.target.checked)}
                            className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            Acepto los{' '}
                            <a href="#" className="text-teal-600 hover:text-teal-700">
                                términos y condiciones
                            </a>
                            {' '}y la{' '}
                            <a href="#" className="text-teal-600 hover:text-teal-700">
                                política de privacidad
                            </a>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="primary"
                        size="full"
                        loading={loading}
                        disabled={!acceptTerms}
                    >
                        Crear Cuenta
                    </Button>

                    {/* Login Link */}
                    <div className="text-center">
                        <span className="text-gray-600">¿Ya tienes cuenta? </span>
                        <button
                            type="button"
                            onClick={() => navigate(ROUTES.LOGIN)}
                            className="text-teal-600 hover:text-teal-700 font-medium"
                        >
                            Inicia sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;