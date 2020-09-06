import * as React from "react";


interface IProps {
    options: string[];
    onChange: (value: string) => void;
}
export const Select: React.FC<IProps> = (props) => {
    const {options, onChange} = props;
    return (
        <select onChange={(e) => {
            console.log({value: e.target.value})
            onChange(e.target.value)
        }}>
            {options.map((option) => (<option key={option} value={option}>{option}</option>))}
        </select>
    )
}