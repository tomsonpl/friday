import * as React from "react";
import {useEffect, useState} from "react";
import styled from "@emotion/styled";

import {Select} from "./ui/Select";
import {useFetch} from "../hooks/useFetch";
import {CarList} from "./CarList";
import {usePrevious} from "../hooks/usePrevious";
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
        <Holder>
            {!modelOptions.length ? (
                <RedNote>Sorry, no models for {currentMake} are available</RedNote>
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

        </Holder>
    );
}

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const RedNote = styled.p`
  display: flex;
  font-size: 1rem;
  color: #ff0000;
`;