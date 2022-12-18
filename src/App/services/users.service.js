import httpService from './http.service';
import localStorageService from './localStorage.service';

const userEndPoint = 'users/';

const userService = {
    get: async () => {
        const { data } = await httpService.get(userEndPoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(userEndPoint + payload._id, payload);
        return data;
    },
    getCurrentUser: async () => {
        const { data } = await httpService.get(userEndPoint + localStorageService.getUserId());
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.post(userEndPoint + localStorageService.getUserId, payload);
        return data;
    }
};

export default userService;
