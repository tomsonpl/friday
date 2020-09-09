import * as React from "react";
import {useState} from "react";
import {useFetch} from "../hooks/useFetch";
import {RefetchButton} from "./ui/RefetchButton";
import {CarDetail, ICarDetail} from "./CarDetail";
import {CarForm} from "./CarsForm";
import {RedNote} from "./CarModels";
import styled from "@emotion/styled";

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
    const [activeNumber, setActiveNumber] = useState<number | null>(null)
    if (!isRequestOk) {
        return <RefetchButton refetch={refetch}/>;
    }

    const filteredList = carsList.filter((car) => {
        return (bodyType != null ? car.bodyType === bodyType : true)
            && (fuelType != null ? car.fuelType === fuelType : true)
            && (minHP != null ? car.enginePowerPS > minHP : true)
    });

    if (!carsList.length) {
        return <RedNote>No Cars of this model are avaialable</RedNote>
    }


    return (
        <Holder>
            <CarForm setBodyType={setBodyType} setFuelType={setFuelType} setMinHP={setMinHP}/>
            <CarsListHolder>
                {filteredList.map((car: ICarDetail, index: number) => {
                    const isActive = activeNumber === index;
                    return (
                        <React.Fragment key={index}>
                            <CarDetail details={car} index={index} setActive={setActiveNumber} isActive={isActive}/>
                        </React.Fragment>
                    )
                })}
            </CarsListHolder>


        </Holder>
    );
}
const Holder = styled.div`
   margin-top: 5%;
   display: flex;
   flex-direction: column;
`

const CarsListHolder = styled.div`
   margin-top: 5%;
   display: flex;
   flex-direction: row;
   flex-grow: 1;
   flex-wrap: wrap;
`;