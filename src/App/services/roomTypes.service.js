import httpService from './http.service';

const roomTypesEndPoint = 'roomTypes/';

const roomTypesService = {
    fetchAll: async () => {
        const { data } = await httpService.get(roomTypesEndPoint);
        return data;
    }
};

export default roomTypesService;
