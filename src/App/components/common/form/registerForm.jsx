import React from 'react';
import { useForm } from 'react-hook-form';
import Avatar from './avatar';
import RadioField from './radioField';
import TextField from './textField';
const RegisterForm = () => {
    const { register, handleSubmit, setValue, control } = useForm();
    const gender = [
        { name: 'male', value: 'мужской' },
        { name: 'female', value: 'женский' }
    ];

    const onSubmit = (data) => {
        console.log(data);
        // e.preventDefault();
        // const isValid = validate();
        // if (!isValid) return;
        // const newData = { ...data, qualities: data.qualities.map((q) => q.value) };
        // dispatch(signUp(newData));
    };
    return (
        <div className="form-container sign-up-container">
            <form className="form-container__form " onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form-container__title">РЕГИСТРАЦИЯ</h1>
                <TextField label="Имя" type="text" name="username" placeholder="имя" register={register} />
                <TextField type="email" name="email" placeholder="Email" label="E-mail" register={register} />
                <TextField label="Пароль" type="password" name="password" placeholder="пароль" register={register} />
                <RadioField
                    label="Пол"
                    name="sex"
                    register={register}
                    control={control}
                    options={gender}
                    setValue={setValue}
                    value="male"
                />
                <Avatar
                    name="avatar"
                    label="Аватар"
                    value={`https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
                        .toString(36)
                        .substring(7)}.svg`}
                    register={register}
                    setValue={setValue}
                />
                <button className="form-container__button">ЗАРЕГИСТРИРОВАТЬСЯ</button>
            </form>
        </div>
    );
};

export default RegisterForm;
