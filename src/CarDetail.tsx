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
    const {make, model, enginePowerPS, fuelType, bodyType} = props.details;
    return (
        <div style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                <div style={{padding: "2px 16px"}}>
                    <h4><b>Make: {make}</b></h4>
                    <p>Model: {model}</p>
                    <p>Fuel type: {fuelType}</p>
                    <p>Body type: {bodyType}</p>

                    <p>Pferdestarke: {enginePowerPS}</p>
                </div>
        </div>
    )
}