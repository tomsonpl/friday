import * as React from "react";
import styled from "@emotion/styled";

import {Select} from "./ui/Select"
import {fuelTypeOptions, bodyTypeOptions} from "../utils/options";

interface IProps {
    setBodyType: (value: string) => void;
    setFuelType: (value: string) => void;
    setMinHP: (value: number) => void;
}

export const CarForm: React.FC<IProps> = props => {
    const {setBodyType, setFuelType, setMinHP} = props;
    return (
        <Form>
            <h3>Filters:</h3>
            <Select options={fuelTypeOptions} onChange={setFuelType} placeholder={"Choose car's Fuel type"}/>
            <Select options={bodyTypeOptions} onChange={setBodyType} placeholder={"Choose car's Body type"}/>
            <input style={{width: "100%"}} type="number" onChange={(event) => setMinHP(+event.target.value)} placeholder={"Choose car's minimum Pferdestarke"} />
        </Form>
    )
}

export const Form = styled.form`
display: flex;
flex-direction: column;
height: 200px;
justify-content: space-between;
`