import parse from 'html-react-parser';

export const renderGuests = (number) => {
    if (number % 100 >= 11 && number % 100 <= 20) {
        return `${number} гостей`;
    } else {
        const lastDigit = number.toString().split('').pop();
        switch (lastDigit) {
            case '1':
                return `${number} гость`;
            case '2':
            case '3':
            case '4':
                return `${number} гостя`;
            default:
                return `${number} гостей`;
        }
    }
};

export function getIconText(icons, id) {
    const searchIcon = icons.find((icon) => icon._id === id);
    return searchIcon ? searchIcon.text : id;
}

export function getIconContent(icons, id) {
    const searchIcon = icons.find((icon) => icon._id === id);
    return searchIcon ? parse(`${searchIcon.content}`) : false;
}

export function addTextToProperties(allProperties, displayProperties, getText) {
    const selectedProprerties = allProperties.reduce((returnedProperties, property) => {
        if (displayProperties.find((p) => p === property.name)) {
            property.text = getText(property.name, property.value);
            returnedProperties.push(property);
        }
        return returnedProperties;
    }, []);
    return selectedProprerties;
}

export async function getData(service) {
    try {
        const content = await service.fetchAll();
        return content;
    } catch (error) {
        console.log(error);
    }
}

export const getToday = () => {
    const date = new Date();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    return today;
};

export const getTomorrow = () => {
    const today = new Date();
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    return tomorrow;
};
