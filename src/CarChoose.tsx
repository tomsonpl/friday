import * as React from "react";
import {useState} from "react";
import {Select} from "./ui/Select";
import {CarModels} from "./CarModels";
import {useFetch} from "./hooks/useFetch";
import {RefetchButton} from "./ui/RefetchButton";


export const CarChoose: React.FC<{}> = () => {
    const [currentMake, setCurrentMake] = useState<string | null>(null);
    const [makeOptions, isRequestOk, refetch] = useFetch("makes", "", []);

    if (!isRequestOk) {
        return <RefetchButton refetch={refetch}/>;
    }
    return (
        <div>
            <h1>Please choose a car:</h1>

            <Select options={makeOptions} onChange={setCurrentMake}/>

            {currentMake != null && (
                <CarModels currentMake={currentMake}/>
            )}
        </div>
    );
}