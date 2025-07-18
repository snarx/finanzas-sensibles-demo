// export const formatCurrency = (amount) => {
//     if (typeof amount !== 'number') return '$0';

//     return new Intl.NumberFormat('es-AR', {
//         style: 'currency',
//         currency: 'ARS',
//         minimumFractionDigits: 0,
//     }).format(amount);
// };

// export const formatDate = (date) => {
//     return new Intl.DateTimeFormat('es-AR', {
//         day: '2-digit',
//         month: 'short',
//         year: 'numeric',
//     }).format(new Date(date));
// };

// export const formatPercentage = (value) => {
//     if (typeof value !== 'number') return '0%';
//     return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
// };

// export const getInitials = (name) => {
//     if (!name) return '';
//     return name
//         .split(' ')
//         .map(word => word.charAt(0))
//         .join('')
//         .toUpperCase()
//         .slice(0, 2);
// };

// export const formatTime = (date) => {
//     return new Intl.DateTimeFormat('es-AR', {
//         hour: '2-digit',
//         minute: '2-digit',
//     }).format(new Date(date));
// };

// Utilidades de formato para Finanzas Sensibles

export function formatCurrency(amount) {
    if (typeof amount !== 'number') return '$0';

    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
    }).format(amount);
}

export function formatPercentage(value) {
    if (typeof value !== 'number') return '0%';
    return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
}

export function formatDate(date) {
    return new Intl.DateTimeFormat('es-AR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }).format(new Date(date));
}

export function getInitials(name) {
    if (!name) return '';
    return name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2);
}