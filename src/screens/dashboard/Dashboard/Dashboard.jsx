import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Bell,
    Eye,
    EyeOff,
    TrendingUp,
    TrendingDown,
    Brain,
    Plus,
    Target,
    PieChart,
    ArrowUpRight,
    ArrowDownLeft
} from 'lucide-react';
import Card from '../../../components/ui/Card/Card';
import Avatar from '../../../components/ui/Avatar/Avatar';
import TabBar from '../../../components/layout/TabBar/TabBar';
import { formatCurrency, formatPercentage } from '../../../utils/formatters/formatters';
import { mockUser, mockBalance, mockTransactions, mockInsights } from '../../../data/mock/dashboard';
import { ROUTES } from '../../../constants/routes';

const Dashboard = () => {
    const navigate = useNavigate();
    const [balanceVisible, setBalanceVisible] = useState(mockBalance.isVisible);

    const handleTransactionClick = (transaction) => {
        navigate(`/transaction/${transaction.id}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-white px-6 py-4 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            ¡Hola, {mockUser.name}!
                        </h1>
                        <p className="text-gray-600">
                            {mockUser.family.name} • {mockUser.family.members} miembros
                        </p>
                    </div>
                    <div className="relative">
                        <button
                            onClick={() => navigate(ROUTES.NOTIFICATIONS)}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                            <Bell className="w-6 h-6 text-gray-600" />
                        </button>
                        {/* Notification Badge */}
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">3</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="px-6 py-6 space-y-6">
                {/* Balance Card */}
                <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">Balance Familiar</h2>
                        <button
                            onClick={() => setBalanceVisible(!balanceVisible)}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            {balanceVisible ? (
                                <Eye className="w-5 h-5 text-gray-600" />
                            ) : (
                                <EyeOff className="w-5 h-5 text-gray-600" />
                            )}
                        </button>
                    </div>

                    <div className="mb-4">
                        <div className="text-4xl font-bold text-gray-900 mb-2">
                            {balanceVisible ? formatCurrency(mockBalance.total) : '••••••'}
                        </div>
                        <div className="flex items-center text-green-600">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            <span className="text-sm font-medium">
                                {formatPercentage(mockBalance.growth)} este mes
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-500 rounded-2xl p-4 text-white">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm opacity-90">Ingresos</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                            <div className="text-xl font-bold">
                                {balanceVisible ? formatCurrency(mockBalance.income) : '•••••'}
                            </div>
                        </div>

                        <div className="bg-blue-500 rounded-2xl p-4 text-white">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm opacity-90">Gastos</span>
                                <ArrowDownLeft className="w-4 h-4" />
                            </div>
                            <div className="text-xl font-bold">
                                {balanceVisible ? formatCurrency(mockBalance.expenses) : '•••••'}
                            </div>
                        </div>
                    </div>
                </Card>

                {/* AI Insights */}
                <Card className="p-6">
                    <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <Brain className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Insights de IA</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                "{mockInsights.message}"
                            </p>
                        </div>
                    </div>
                </Card>

                {/* Recent Transactions */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Movimientos Recientes
                        </h2>
                        <button
                            onClick={() => navigate(ROUTES.TRANSACTIONS)}
                            className="text-teal-600 hover:text-teal-700 font-medium"
                        >
                            Ver todos
                        </button>
                    </div>

                    <div className="space-y-3">
                        {mockTransactions.map((transaction) => (
                            <Card
                                key={transaction.id}
                                className="p-4 cursor-pointer hover:shadow-lg transition-all"
                                onClick={() => handleTransactionClick(transaction)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.type === 'income' ? 'bg-green-100' : 'bg-gray-100'
                                            }`}>
                                            <span className={`text-lg ${transaction.type === 'income' ? 'text-green-600' : 'text-gray-600'
                                                }`}>
                                                {transaction.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">
                                                {transaction.description}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {transaction.user} • {transaction.time}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-lg font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-gray-900'
                                            }`}>
                                            {transaction.type === 'income' ? '+' : ''}{formatCurrency(transaction.amount)}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {transaction.category}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-3 gap-4">
                    <Card className="p-4 text-center">
                        <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                            <Plus className="w-6 h-6 text-teal-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                            Agregar Gasto
                        </span>
                    </Card>

                    <Card className="p-4 text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                            <Target className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                            Crear Meta
                        </span>
                    </Card>

                    <Card className="p-4 text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                            <PieChart className="w-6 h-6 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                            Reportes
                        </span>
                    </Card>
                </div>
            </div>

            {/* Tab Bar */}
            <TabBar />
        </div>
    );
};

export default Dashboard;