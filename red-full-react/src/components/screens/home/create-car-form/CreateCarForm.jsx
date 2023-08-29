import React, {useState} from 'react';
import styles from './CreateCarForm.module.css'
import {useForm} from 'react-hook-form'

// нужно было для реализации формы без react-hook-forms
/*const clearData = {
    price: '',
    name: '',
    image: ''
}*/

const CreateCarForm = ({setCars}) => {

    const {register,
        reset,
        handleSubmit,
        formState: {errors}
    } = useForm({
        mode: 'onChange'
    })

    const createCar = (data) => {
        console.log(data)

        setCars(prev => [
            ...prev,
            {
                id: prev.length + 1,
                ...data
            }
        ])

        reset()
    }

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

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <input
                {...register('name', {required: 'Name is required!'})}
                placeholder='Name'
            />

            {errors?.name?.message && (
                <p style={{ color: 'red' }}>
                    {errors.name.message}
                </p>
            )}

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
};

export default CreateCarForm;