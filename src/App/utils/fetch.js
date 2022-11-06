const ROOMS_URL = 'http://localhost:5000/api/v1/rooms';
const BANNERS_URL = 'http://localhost:5000/api/v1/banners';
const MENU_URL = 'http://localhost:5000/api/v1/menuItems';
const ICONS_URL = 'http://localhost:5000/api/v1/icons';
export const getAllRooms = async () => {
    const response = await fetch(ROOMS_URL);

    const rooms = await response.json();
    return rooms;
};

export const getAllBanners = async () => {
    const response = await fetch(BANNERS_URL);
    const banners = await response.json();
    return banners;
};

export const getMenuItems = async () => {
    const response = await fetch(MENU_URL);
    const menu = await response.json();
    return menu;
};

export const getIcons = async () => {
    const response = await fetch(ICONS_URL);
    const icons = await response.json();
    return icons;
};
// export default { getAllRooms, getAllBanners };
