import * as React from "react";


export interface ICarDetail {
    make: string;
    model: string;
    enginePowerPS: number;
    enginePowerKW: number;
    fuelType: string;
    bodyType: string;
    engineCapacity: number;
}

interface IProps {
    details: ICarDetail;
}
export const CarDetail: React.FC<IProps> = (props) => {
    return (
    <p>{props.details.make}{props.details.model}{props.details.enginePowerPS}{props.details.enginePowerKW}{props.details.fuelType}{props.details.bodyType}{props.details.engineCapacity}</p>
    )
}