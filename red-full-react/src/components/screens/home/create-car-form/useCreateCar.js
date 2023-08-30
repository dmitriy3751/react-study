import {useMutation, useQueryClient} from "@tanstack/react-query";
import {CarService} from "../../../../services/car.service.js";

export const useCreateCar = (reset) => {
    const queryClient = useQueryClient()

    // использование бибилотеки react-query
    const { mutate } = useMutation(['create car'],
        (data) => CarService.create(data), {
            onSuccess: () => {
                // заставляем сервер обновить содержимое ключа cars
                queryClient.invalidateQueries('cars')
                reset()
            }
        })

    const createCar = (data) => {
        // data передаётся за счёт react-hook-form

        // вызов метода (через react-query), отправляющего данные о новой машине на сервер
        mutate(data)
    }

    return {createCar}
}