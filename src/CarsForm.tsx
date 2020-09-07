import * as React from "react";
import {Select} from "./ui/Select"
import {fuelTypeOptions, bodyTypeOptions} from "./utils/options";

interface IProps {
    setBodyType: (value: string) => void;
    setFuelType: (value: string) => void;
    setMinHP: (value: number) => void;
}

export const CarForm: React.FC<IProps> = props => {
    const {setBodyType, setFuelType, setMinHP} = props;
    return (
        <form>
            <Select options={fuelTypeOptions} onChange={setFuelType} placeholder={"Choose car's Fuel type"}/>
            <Select options={bodyTypeOptions} onChange={setBodyType} placeholder={"Choose car's Body type"}/>
            <input type="number" onChange={(event) => setMinHP(+event.target.value)} placeholder={"Choose car's minimum Horse power"} />
        </form>
    )
}