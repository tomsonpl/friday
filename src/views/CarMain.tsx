import * as React from "react";
import {useState} from "react";
import {Select} from "../components/ui/Select";
import {CarModels} from "../components/CarModels";
import {useFetch} from "../hooks/useFetch";
import {RefetchButton} from "../components/ui/RefetchButton";
import styled from "@emotion/styled";

export const CarMain: React.FC = () => {
    const [currentMake, setCurrentMake] = useState<string | null>(null);
    const [makeOptions, isRequestOk, refetch] = useFetch<string>("makes", "", []);

    if (!isRequestOk) {
        return <RefetchButton refetch={refetch}/>;
    }
    return (
        <Holder>
            <Header>Fri:day</Header>
            <Select
                options={makeOptions}
                onChange={setCurrentMake}
                placeholder="Please select car's Make"
            />

            {currentMake != null && (
                <CarModels currentMake={currentMake}/>
            )}
        </Holder>
    );
}

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 80%;
    padding: 0 10%;
  }
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;
  
`
