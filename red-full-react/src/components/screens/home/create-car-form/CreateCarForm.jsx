import React, {useState} from 'react';
import styles from './CreateCarForm.module.css'
import {useForm} from 'react-hook-form'
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {CarService} from "../../../../services/car.service.js";
import ErrorMessage from "./ErrorMessage.jsx";
import {useCreateCar} from "./useCreateCar.js";

// нужно было для реализации формы без react-hook-forms
/*const clearData = {
    price: '',
    name: '',
    image: ''
}*/

const CreateCarForm = () => {

    // использование бибилотеки react-hook-form
    const {register,
        reset,
        handleSubmit,
        formState: {errors}
    } = useForm({
        mode: 'onChange'
    })

    const { createCar } = useCreateCar(reset)

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <input
                {...register('name', {required: 'Name is required!'})}
                placeholder='Name'
            />

            <ErrorMessage errors={errors}/>

            <input
                {...register('price', {required: true})}
                placeholder='Price'
            />
            <input
                {...register('image', {required: true})}
                placeholder='Image'
            />

            <button className='btn'>Create</button>
        </form>
    );

    // код с react-query вынесли в useCreateCar
    /*const createCar = (data) => {
        // data передаётся за счёт react-hook-form

        // вызов метода (через react-query), отправляющего данные о новой машине на сервер
        mutate(data)

        // код ниже был актуален при отсутствии взаимодействия с сервером (отправка новой машины туда) с помощью react-query
        /!*console.log(data)

        setCars(prev => [
            ...prev,
            {
                id: prev.length + 1,
                ...data
            }
        ])

        reset()*!/
    }*/

    // пример реализации одного инпута без использования react-hook-form
    // const [data, setData] = useState(clearData)
    /*const createCar = (e) => {
        e.preventDefault()

        setCars(prev => [
            ...prev,
            {
                id: prev.length + 1,
                ...data
            }
        ])

        setData(clearData)
    }*/

    /*return (
        <form className={styles.form}}>
            <input placeholder='Name'
                   onChange={e => setData(
                       prev => ({
                           ...prev, name: e.target.value
                       })
                   )}
                   value={data.name}
            />
            <button className='btn' onClick={e => createCar(e)}>Create</button>
        </form>
    )*/
};

export default CreateCarForm;