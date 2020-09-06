import * as React from "react";
import {useEffect, useState} from "react";
import {Select} from "./ui/Select";


interface IProps {
    chosenMake: string;
}

export const CarModels: React.FC<IProps> = (props) => {

    const [modelOptions, setModelOptions] = useState<string[] | null>(null);
    const [chosenModel, useChosenModel] = useState<string | null>(null)
    const {chosenMake} = props;
    useEffect(() => {
        (async () => {
            const modelsResponse = await fetch(`http://localhost:8080/api/models?make=${chosenMake}`)
            const modelOptions = await modelsResponse.json();
            setModelOptions(modelOptions)
            console.log({modelOptions})
        })();

    }, [chosenModel])

    if (modelOptions == null) {
        return <div>NULL</div>;
    }
    return (
        <div>
            <h1>Choosen Model: {chosenMake}</h1>

            {!modelOptions.length ? (
                <div>Sorry, no models for {chosenMake} available</div>
            ) : (
                <Select options={modelOptions} onChange={useChosenModel}/>
                )}


        </div>
    )
}