import React, {useContext, useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import {CarService} from "../../../services/car.service.js";
import CarItem from "../home/car-item/CarItem.jsx";
import {AuthContext} from "../../../providers/AuthProvider.jsx";
import WithAuth from "../../../HOC/withAuth.jsx";

const CarDetail = () => {
    const { id } = useParams()
    const [car, setCar] = useState({})

    useEffect(() => {
        if(!id) return

        const fetchData = async () => {
            // написание того же без axios
            /*const response = await fetch('http://localhost:4200/cars')
            const data = await response.json()*/

            // написание с использованием axios (вынесен в отдельный сервис)
            const response = await CarService.getById(id)

            setCar(response)
        }

        fetchData()
    }, [id])

    if(!car?.name) return <p>Car not found!</p>

    return (
        <div>
            <Link to='/'>Home page</Link>
            <CarItem car={car} />
        </div>
    );
};

export default WithAuth(CarDetail);