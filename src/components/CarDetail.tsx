import * as React from "react";
import styled from "@emotion/styled";

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
    isActive: boolean;
    setActive: (index: number) => void;
    index: number;
}
export const CarDetail: React.FC<IProps> = (props) => {
    const {details, index, setActive, isActive} = props;
    const {make, model, enginePowerPS, fuelType, bodyType} = details;
    return (
        <CarDetailHolder isActive={isActive} onClick={() => setActive(index)}>
            <h4><b>Make: {make}</b></h4>
            <p>Model: {model}</p>
            <p>Fuel type: {fuelType}</p>
            <p>Body type: {bodyType}</p>
            <p>Pferdestarke: {enginePowerPS}</p>
        </CarDetailHolder>
    )
}

const CarDetailHolder = styled.div<{isActive: boolean}>`
    box-shadow: ${(props) => props.isActive ? "0 4px 8px 0 rgba(76, 175, 80, 0.5)" : "0 4px 8px 0 rgba(0,0,0,0.2)"};
    width: 98%;
    margin: 2%;
    padding: 0 2%;
    @media (min-width: 768px) {
      width: 44%;
      padding: 2% 1%;
    }
`;