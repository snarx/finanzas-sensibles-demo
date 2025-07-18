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
