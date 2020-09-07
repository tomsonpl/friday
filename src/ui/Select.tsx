import * as React from "react";
import ReactSelect from "react-select"

interface IProps {
    options: string[];
    onChange: (value: string) => void;
    placeholder: string;
}

interface IValueLabel {
    value: string;
    label: string;
}
export const Select: React.FC<IProps> = (props) => {
    const {options, onChange, placeholder} = props;
    const valueLabelOptions: IValueLabel[] = options.map((option: string) => ({value: option, label: option}));

        return (
            <ReactSelect
                options={valueLabelOptions}
                onChange={(option) => onChange((option as IValueLabel).value)}
                placeholder={placeholder}
            />
        );

}