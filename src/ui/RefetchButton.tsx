import * as React from "react";

interface IProps {
    refetch: () => void;
}

export const RefetchButton: React.FC<IProps> = (props) => {
    const {refetch} = props;
    return (
        <div>
            <p>Error while loading data:</p>
            <p>Click this <button onClick={refetch}>button</button> to try again</p>
        </div>
    );
}