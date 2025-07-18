import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Brain, Users, Shield } from 'lucide-react';
import Button from '../../../components/ui/Button/Button';
import { ROUTES } from '../../../constants/routes';

const Features = () => {
    const navigate = useNavigate();

    const features = [
        {
            icon: Brain,
            title: 'IA Predictiva',
            description: 'Algoritmos inteligentes que aprenden de tus hábitos',
            color: 'bg-purple-100 text-purple-600',
        },
        {
            icon: Users,
            title: 'Gestión Familiar',
            description: 'Crea grupos familiares con roles personalizados',
            color: 'bg-blue-100 text-blue-600',
        },
        {
            icon: Shield,
            title: 'Seguridad Bancaria',
            description: 'Encriptación de nivel bancario',
            color: 'bg-teal-100 text-teal-600',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6">
                <button
                    onClick={() => navigate(ROUTES.LANDING)}
                    className="flex items-center text-teal-600 hover:text-teal-700 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-1" />
                    Volver
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
                <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
                    Características
                </h1>

                <div className="space-y-8 w-full max-w-md">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-3xl p-6 shadow-xl">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${feature.color} mb-4`}>
                                <feature.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Action Button */}
                <div className="w-full max-w-md mt-12">
                    <Button
                        variant="primary"
                        size="full"
                        onClick={() => navigate(ROUTES.REGISTER)}
                    >
                        Probar Demo
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Features;