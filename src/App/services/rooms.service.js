import httpService from './http.service';

const roomsEndPoint = 'rooms/';

const roomsService = {
    get: async () => {
        const { data } = await httpService.get(roomsEndPoint);
        return data;
    }
};

export default roomsService;
