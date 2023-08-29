import React, {useContext, useEffect, useState} from 'react';
// import {cars as carsData} from "./cars.data.js";
import CarItem from "./car-item/CarItem.jsx";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import {CarService} from "../../../services/car.service.js";
import {AuthContext} from "../../../providers/AuthProvider.jsx";


const Home = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            // написание того же без axios
            /*const response = await fetch('http://localhost:4200/cars')
            const data = await response.json()*/

            // написание с использованием axios (вынесен в отдельный сервис)
            const response = await CarService.getAll()

            setCars(response)
        }

        fetchData()
    }, [])

    const {user, setUser} = useContext(AuthContext)

    return (
        <div>
            <h1>Cars catalog</h1>

            {user ? (
                <>
                    <h2>
                        Welcome, {user.name}!
                    </h2>
                    <button onClick={() => setUser(null)}>
                        Logout
                    </button>
                </>
                )
                :
                (
                    <button onClick={() => setUser({
                        name: 'Max'
                    })}>
                        Login
                    </button>
                )
            }

            <CreateCarForm setCars={setCars}/>
            <div>
                {cars.length ? cars.map(car => (
                    <CarItem key={car.id} car={car}/>
                ))
                : <p>There are no cars to show</p>}
            </div>
        </div>
    );
};

export default Home;