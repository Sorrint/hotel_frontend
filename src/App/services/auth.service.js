import httpService from './http.service';
import localStorageService from './localStorage.service';

const authEndPoint = '/auth';

const authService = {
    register: async (userData) => {
        const { data } = await httpService.post(authEndPoint + '/signup', { ...userData });
        return data;
    },
    login: async ({ email, password }) => {
        const { data } = await httpService.post(authEndPoint + '/login', { email, password });
        return data;
    },
    refresh: async () => {
        const { data } = await httpService.post('token', {
            refreshToken: localStorageService.getRefreshToken()
        });
        return data;
    }
};

export default authService;
