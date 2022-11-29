import httpService from './http.service';
// import localStorageService from './localStorage.service';

const authEndPoint = '/auth';

const authService = {
    register: async (userData) => {
        const { data } = await httpService.post(authEndPoint + '/signup', { ...userData });
        return data;
    }
};

export default authService;
