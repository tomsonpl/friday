import * as React from "react";
import {useEffect, useState} from "react";
import {Select} from "./ui/Select";
import {useFetch} from "./hooks/useFetch";
import {CarDetail} from "./CatDetail";
import {usePrevious} from "./hooks/usePrevious";


interface IProps {
    currentMake: string;
}

export const CarModels: React.FC<IProps> = (props) => {
    const {currentMake} = props;
    const [currentModel, setChosenModel] = useState<string | null>(null)
    const [reload, setReload] = useState(false);
    const previousMake = usePrevious(currentMake, null, [currentMake]);
    const [modelOptions, isRequestOk] = useFetch("models", `?make=${currentMake}`, [currentMake, reload])

    useEffect(() => {
        if (previousMake !== currentMake) {
            setChosenModel(null);
        }
    }, [currentMake])

    if (!isRequestOk) {
        return <div>
            <p>Error while loading data:</p>
            <p>Click this <button onClick={() => setReload((prevState => !prevState))}>button</button> to try again</p>
        </div>;
    }

    return (
        <div>
            <h1>Choosen Model: {currentMake}</h1>

            {!modelOptions.length ? (
                <div>Sorry, no models for {currentMake} are available</div>
            ) : (
                <Select options={modelOptions} onChange={setChosenModel}/>
            )}

            {currentMake && currentModel && (
                <CarDetail currentMake={currentMake} currentModel={currentModel} />
            )}

        </div>
    )
}