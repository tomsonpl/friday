import * as React from "react";
import {RedNote} from "../CarModels";

interface IProps {
    refetch: () => void;
}

export const RefetchButton: React.FC<IProps> = (props) => {
    const {refetch} = props;
    return (
        <div>
            <RedNote>Error while loading data:</RedNote>
            <RedNote>Click this  <button onClick={refetch}>button</button>  to try again</RedNote>
        </div>
    );
}