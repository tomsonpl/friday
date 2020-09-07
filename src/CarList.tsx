import * as React from "react";
import {useState} from "react";
import {useFetch} from "./hooks/useFetch";
import {RefetchButton} from "./ui/RefetchButton";
import {CarDetail, ICarDetail} from "./CarDetail";
import {CarForm} from "./CarsForm";


interface IProps {
    currentMake: string;
    currentModel: string;
}


export const CarList: React.FC<IProps> = (props) => {
    const {currentMake, currentModel} = props;
    const [carsList, isRequestOk, refetch] = useFetch<ICarDetail>("vehicles", `?make=${currentMake}&model=${currentModel}`, [currentMake, currentModel]);
    const [fuelType, setFuelType] = useState<string | null>(null)
    const [bodyType, setBodyType] = useState<string | null>(null)
    const [minHP, setMinHP] = useState<number | null>(null);

    if (!isRequestOk) {
        return <RefetchButton refetch={refetch}/>;
    }

    const filteredList = carsList.filter((car) => {
        return (bodyType != null ? car.bodyType === bodyType : true)
            && (fuelType != null ? car.fuelType === fuelType : true)
            && (minHP != null ? car.enginePowerPS > minHP : true)
    });
    return (
        <div>
            <CarForm setBodyType={setBodyType} setFuelType={setFuelType} setMinHP={setMinHP}/>
            {filteredList.map((car: ICarDetail, index: number) => {
                return (
                    <React.Fragment key={index}>
                        <CarDetail details={car}/>
                    </React.Fragment>
                )
            })}

        </div>
    );
}