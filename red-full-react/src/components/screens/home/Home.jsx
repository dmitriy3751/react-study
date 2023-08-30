import React, {useContext, useEffect, useState} from 'react';
// import {cars as carsData} from "./cars.data.js";
import CarItem from "./car-item/CarItem.jsx";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import {CarService} from "../../../services/car.service.js";
import {AuthContext} from "../../../providers/AuthProvider.jsx";
import {useQuery} from "@tanstack/react-query";
import {useAuth} from "../../../hooks/useAuth.js";
import Header from "../../ui/Header.jsx";
import Catalog from "../../ui/Catalog.jsx";


const Home = () => {
    // react-query сам хранит инфу в кэше (за счёт этого не надо юзать useEffect)
    const {data, isLoading, error} = useQuery(['cars'], () => CarService.getAll())

    // без использования библиотеки (tanstack) react-query
    /*const [cars, setCars] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            // написание того же без axios
            /!*const response = await fetch('http://localhost:4200/cars')
            const data = await response.json()*!/

            // написание с использованием axios (вынесен в отдельный сервис)
            const response = await CarService.getAll()

            setCars(response)
        }

        fetchData()
    }, []) */

    if(isLoading) return <p>Loading...</p>

    return (
        <div>
            <h1>Cars catalog</h1>

            <Header />

            <CreateCarForm />
            <Catalog data={data}/>
        </div>
    );
};

export default Home;