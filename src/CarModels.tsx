import * as React from "react";
import {useState} from "react";
import {Select} from "./ui/Select";
import {useFetch} from "./hooks/useFetch";


interface IProps {
    chosenMake: string;
}

export const CarModels: React.FC<IProps> = (props) => {
    const {chosenMake} = props;
    const [reload, setReload] = useState(false);
    const [chosenModel, setChosenModel] = useState<string | null>(null)
    const [modelOptions, isRequestOk] = useFetch("models", `?make=${chosenMake}`, [chosenMake, reload])

    if (!isRequestOk) {
        return <div>
            <p>Error while loading data:</p>
            <p>Click this <button onClick={() => setReload((prevState => !prevState))}>button</button> to try again</p>
        </div>;
    }

    return (
        <div>
            <h1>Choosen Model: {chosenMake}</h1>

            {!modelOptions.length ? (
                <div>Sorry, no models for {chosenMake} are available</div>
            ) : (
                <Select options={modelOptions} onChange={setChosenModel}/>
            )}


        </div>
    )
}