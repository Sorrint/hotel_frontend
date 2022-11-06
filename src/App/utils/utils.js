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
