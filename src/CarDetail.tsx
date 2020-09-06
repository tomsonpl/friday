import * as React from "react";
import {useFetch} from "./hooks/useFetch";
import {RefetchButton} from "./ui/RefetchButton";


interface IProps {
    currentMake: string;
    currentModel: string;
}

export const CarDetail: React.FC<IProps> = (props) => {
    const {currentMake, currentModel} = props;
    const [carDetail, isRequestOk, refetch] = useFetch("vehicles", `?make=${currentMake}&model=${currentModel}`, [currentMake, currentModel]);

    if (!isRequestOk) {
        return <RefetchButton refetch={refetch}/>;
    }

    return (
        <div>
            <h1>Car details: {currentMake} - {currentModel}</h1>
            {console.log({carDetail})}
            {/*{!modelOptions.length ? (*/}
            {/*    <div>Sorry, no models for {currentMake} are available</div>*/}
            {/*) : (*/}
            {/*    <Select options={modelOptions} onChange={setChosenModel}/>*/}
            {/*)}*/}


        </div>
    );
}