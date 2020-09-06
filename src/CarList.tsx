import * as React from "react";
import {useFetch} from "./hooks/useFetch";
import {RefetchButton} from "./ui/RefetchButton";
import {CarDetail, ICarDetail} from "./CarDetail";


interface IProps {
    currentMake: string;
    currentModel: string;
}


export const CarList: React.FC<IProps> = (props) => {
    const {currentMake, currentModel} = props;
    const [carsList, isRequestOk, refetch] = useFetch<ICarDetail>("vehicles", `?make=${currentMake}&model=${currentModel}`, [currentMake, currentModel]);

    if (!isRequestOk) {
        return <RefetchButton refetch={refetch}/>;
    }


    const filteredList = carsList;
    return (
        <div>
            <h1>Car details: {currentMake} - {currentModel}</h1>
            <h2>FORM:</h2>
            {filteredList.map((car: ICarDetail, index: number) => {
                return (
                    <React.Fragment key={index}>
                        <CarDetail details={car} />
                    </React.Fragment>
                )
            })}

        </div>
    );
}