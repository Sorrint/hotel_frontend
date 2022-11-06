import httpService from './http.service';

const menuItemsEndPoint = 'menuItems/';

const menuItemsService = {
    fetchAll: async () => {
        const { data } = await httpService.get(menuItemsEndPoint);
        return data;
    }
};

export default menuItemsService;
