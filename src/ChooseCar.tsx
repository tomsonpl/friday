import * as React from "react";
import {useEffect, useState} from "react";
import {Select} from "./ui/Select";
import {CarModels} from "./CarModels";

interface IProps {}

export const ChooseCar: React.FC<IProps> = (props) => {
    const [makeOptions, setMakeOptions] = useState<string[]>([])
    const [chosenMake, useChosenMake] = useState<string | null>(null)
    useEffect(() => {
        (async () => {
            const makeResponse = await fetch("http://localhost:8080/api/makes")
            const makeOptions = await makeResponse.json();
            setMakeOptions(makeOptions)
        })();

    }, [])

    return (
        <div>
            <h1>Please choose a car:</h1>
            {makeOptions.length ? (
                    <Select options={makeOptions} onChange={useChosenMake}/>
                )
                : (
                    <p style={{color: "red"}}>Error while loading data - please reload the page</p>
                )
            }

            {chosenMake != null && (
                <CarModels chosenMake={chosenMake}/>
            )}
        </div>
    )
}