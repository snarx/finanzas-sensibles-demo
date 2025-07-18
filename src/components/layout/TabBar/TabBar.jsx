import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, TrendingUp, Users, Settings } from 'lucide-react';
import { ROUTES } from '../../../constants/routes';

const TabBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const tabs = [
        {
            id: 'home',
            label: 'Inicio',
            icon: Home,
            route: ROUTES.DASHBOARD,
        },
        {
            id: 'reports',
            label: 'Reportes',
            icon: TrendingUp,
            route: ROUTES.REPORTS,
        },
        {
            id: 'family',
            label: 'Familia',
            icon: Users,
            route: ROUTES.FAMILY,
        },
        {
            id: 'settings',
            label: 'Config',
            icon: Settings,
            route: ROUTES.SETTINGS,
        },
    ];

    const isActive = (route) => {
        return location.pathname === route;
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 safe-area-bottom">
            <div className="flex items-center justify-around">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const active = isActive(tab.route);

                    return (
                        <button
                            key={tab.id}
                            onClick={() => navigate(tab.route)}
                            className={`flex flex-col items-center justify-center p-2 rounded-2xl transition-all duration-200 ${active
                                    ? 'text-teal-600 bg-teal-50'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <Icon className={`w-6 h-6 mb-1 ${active ? 'text-teal-600' : 'text-gray-500'}`} />
                            <span className={`text-xs font-medium ${active ? 'text-teal-600' : 'text-gray-500'}`}>
                                {tab.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default TabBar;