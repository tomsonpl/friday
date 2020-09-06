import * as React from "react";
import {useState} from "react";
import {Select} from "./ui/Select";
import {CarModels} from "./CarModels";
import {useFetch} from "./hooks/useFetch";

interface IProps {}

export const CarChoose: React.FC<IProps> = (props) => {
    const [currentMake, setCurrentMake] = useState<string | null>(null)
    const [reload, setReload] = useState(false);
    const [makeOptions, isRequestOk] = useFetch("makes", "", [reload])

    if (!isRequestOk) {
        return <div>
            <p>Error while loading data:</p>
            <p>Click this <button onClick={() => setReload((prevState => !prevState))}>button</button> to try again</p>
        </div>;
    }
    return (
        <div>
            <h1>Please choose a car:</h1>

            <Select options={makeOptions} onChange={setCurrentMake}/>

            {currentMake != null && (
                <CarModels currentMake={currentMake}/>
            )}
        </div>
    )
}