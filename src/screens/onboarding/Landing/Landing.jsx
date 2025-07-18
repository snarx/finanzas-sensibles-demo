import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Shield, Users } from 'lucide-react';
import Button from '../../../components/ui/Button/Button';
import { ROUTES } from '../../../constants/routes';

const Landing = () => {
    const navigate = useNavigate();

    const features = [
        {
            icon: Shield,
            title: 'Seguro',
            description: 'Encriptación de nivel bancario',
            color: 'bg-teal-100 text-teal-600',
        },
        {
            icon: Brain,
            title: 'IA Integrada',
            description: 'Análisis predictivo inteligente',
            color: 'bg-purple-100 text-purple-600',
        },
        {
            icon: Users,
            title: 'Colaborativo',
            description: 'Gestión familiar compartida',
            color: 'bg-blue-100 text-blue-600',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex flex-col">
            {/* Header */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
                {/* Logo */}
                <div className="relative mb-8">
                    <div className="w-24 h-24 bg-teal-500 rounded-3xl flex items-center justify-center shadow-2xl">
                        <Brain className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✦</span>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
                    Finanzas <span className="text-teal-500">Sensibles</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg text-gray-600 text-center mb-2 max-w-sm">
                    Gestión financiera inteligente para familias y PYMEs.
                </p>

                <p className="text-base text-teal-600 text-center mb-12 font-medium">
                    Con IA que entiende tus hábitos
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 gap-6 w-full max-w-sm mb-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${feature.color}`}>
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="space-y-4 w-full max-w-sm">
                    <Button
                        variant="primary"
                        size="full"
                        onClick={() => navigate(ROUTES.REGISTER)}
                    >
                        Registrarse
                    </Button>

                    <Button
                        variant="outline"
                        size="full"
                        onClick={() => navigate(ROUTES.LOGIN)}
                    >
                        Acceder
                    </Button>

                    <Button
                        variant="ghost"
                        size="full"
                        onClick={() => navigate(ROUTES.FEATURES)}
                    >
                        Ver Características
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Landing;