export const mockUser = {
    id: '1',
    name: 'María',
    email: 'maria@gonzalez.com',
    avatar: 'MG',
    family: {
        name: 'Familia González',
        members: 4
    }
};

export const mockBalance = {
    total: 24750595,
    income: 8500,
    expenses: 6234.2,
    growth: 12.5,
    isVisible: true
};

export const mockTransactions = [
    {
        id: '1',
        description: 'Supermercado Disco',
        amount: -1250,
        category: 'Comida',
        date: '2025-07-18T10:30:00Z',
        user: 'Carlos',
        userAvatar: 'CG',
        time: 'Hace 2h',
        type: 'expense',
        icon: '$'
    },
    {
        id: '2',
        description: 'Sueldo María',
        amount: 85000,
        category: 'Ingreso',
        date: '2025-07-16T09:00:00Z',
        user: 'María',
        userAvatar: 'MG',
        time: 'Ayer',
        type: 'income',
        icon: '$'
    },
    {
        id: '3',
        description: 'Farmacia Central',
        amount: -890,
        category: 'Salud',
        date: '2025-07-15T14:45:00Z',
        user: 'Ana',
        userAvatar: 'AG',
        time: 'Ayer',
        type: 'expense',
        icon: '$'
    }
];

export const mockInsights = {
    message: "Detecté que gastaste 15% menos en comida esta semana. Te sugiero aumentar el ahorro para vacaciones en $200.",
    type: "positive",
    icon: "brain"
};

export const mockReports = [
    {
        category: 'Comida',
        amount: 2450,
        color: 'bg-green-500',
        percentage: 45
    },
    {
        category: 'Transporte',
        amount: 850,
        color: 'bg-blue-500',
        percentage: 20
    },
    {
        category: 'Salud',
        amount: 650,
        color: 'bg-purple-500',
        percentage: 15
    }
];

export const mockNotifications = [
    {
        id: '1',
        type: 'warning',
        title: 'Límite de gastos',
        message: 'Has gastado $5,800 de $6,000 en \'Comida\'',
        time: '2h',
        icon: 'alert-triangle',
        color: 'bg-orange-100 text-orange-600'
    },
    {
        id: '2',
        type: 'success',
        title: 'Meta alcanzada',
        message: '¡Felicitaciones! Alcanzaste tu meta de vacaciones',
        time: '1d',
        icon: 'gift',
        color: 'bg-green-100 text-green-600'
    },
    {
        id: '3',
        type: 'info',
        title: 'Resumen semanal',
        message: 'Tu reporte está listo. Ahorraste 8% más',
        time: '2d',
        icon: 'info',
        color: 'bg-blue-100 text-blue-600'
    }
];

export const mockFamily = {
    id: '1',
    name: 'Familia González',
    members: [
        {
            id: '1',
            name: 'María González',
            email: 'maria@gonzalez.com',
            role: 'Administradora',
            avatar: 'MG',
            isActive: true,
            color: 'bg-teal-500'
        },
        {
            id: '2',
            name: 'Carlos González',
            email: 'carlos@gonzalez.com',
            role: 'Miembro',
            avatar: 'CG',
            isActive: true,
            color: 'bg-blue-500'
        },
        {
            id: '3',
            name: 'Ana González',
            email: 'ana@gonzalez.com',
            role: 'Miembro',
            avatar: 'AG',
            isActive: true,
            color: 'bg-purple-500'
        }
    ]
};