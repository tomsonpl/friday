import * as React from "react";
import {useEffect, useState} from "react";
import {Select} from "./ui/Select";
import {useFetch} from "./hooks/useFetch";
import {CarList} from "./CarList";
import {usePrevious} from "./hooks/usePrevious";
import {RefetchButton} from "./ui/RefetchButton";


interface IProps {
    currentMake: string;
}

export const CarModels: React.FC<IProps> = (props) => {
    const {currentMake} = props;
    const [currentModel, setChosenModel] = useState<string | null>(null);
    const previousMake = usePrevious(currentMake, null, [currentMake]);
    const [modelOptions, isRequestOk, refetch] = useFetch<string>("models", `?make=${currentMake}`, [currentMake]);

    useEffect(() => {
        if (previousMake !== currentMake) {
            setChosenModel(null);
        }
    }, [currentMake])

    if (!isRequestOk) {
        return <RefetchButton refetch={refetch}/>;
    }

    return (
        <div>
            {!modelOptions.length ? (
                <div>Sorry, no models for {currentMake} are available</div>
            ) : (
                <Select
                    options={modelOptions}
                    onChange={setChosenModel}
                    placeholder="Please select car's Model"
                />
            )}

            {currentMake && currentModel && (
                <CarList currentMake={currentMake} currentModel={currentModel}/>
            )}

        </div>
    );
}