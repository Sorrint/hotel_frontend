export const existingMethods = {
    isCapitalSymbol: 'isCapitalSymbol',
    isContainDigit: 'isContainDigit'
};
export function validator(value, config) {
    if (!Array.isArray(config)) {
        console.log('тип ошибок должен быть указан в массиве!');
    }
    let statusValidate;
    let message;

    for (const validateMethod of config) {
        switch (validateMethod) {
            case 'isCapitalSymbol': {
                const capitalRegExp = /[A-Z]+/g;
                statusValidate = !capitalRegExp.test(value);
                if (statusValidate) {
                    message = 'Поле должно содержать хотя бы одну большую букву!';
                }
                break;
            }
            case 'isContainDigit': {
                const digitRegExp = /\d+/g;
                statusValidate = !digitRegExp.test(value);
                if (statusValidate) {
                    message = 'Поле должно содержать хотя бы одну цифру!';
                }
                break;
            }
            default:
                break;
        }

        if (statusValidate) return message;
    }
}
// export function validator(data, config) {
//     const errors = {};
//     function validate(validateMethod, data, config) {
//         let statusValidate;
//         switch (validateMethod) {
//             case 'isRequired': {
//                 if (typeof data === 'boolean') {
//                     statusValidate = !data;
//                     break;
//                 } else {
//                     statusValidate = data.trim() === '';
//                     break;
//                 }
//             }

//             case 'isEmail': {
//                 const emailRegExp = /^\S+@\S+\.\S+$/g;
//                 statusValidate = !emailRegExp.test(data);
//                 break;
//             }
//             case 'isCapitalSymbol': {
//                 const capitalRegExp = /[A-Z]+/g;
//                 statusValidate = !capitalRegExp.test(data);
//                 break;
//             }
//             case 'isContainDigit': {
//                 const digitRegExp = /\d+/g;
//                 statusValidate = !digitRegExp.test(data);
//                 break;
//             }
//             case 'min': {
//                 statusValidate = data.length < config.value;
//                 break;
//             }
//             default:
//                 break;
//         }
//         if (statusValidate) return config.message;
//     }
//     for (const fieldName in data) {
//         for (const validateMethod in config[fieldName]) {
//             const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod]);
//             if (error && !errors[fieldName]) {
//                 errors[fieldName] = error;
//             }
//         }
//     }
//     return errors;
// }
