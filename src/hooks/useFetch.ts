import {useEffect, useState, DependencyList} from "react";

export const useFetch = (apiPath: string, query: string, deps: DependencyList): [string[], boolean] => {
    const [data, setData] = useState<string[]>([]);
    const [isRequestOk, setIsRequestOk] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
                const commonUrl = `http://localhost:8080/api/`;
                const response = await fetch(`${commonUrl}${apiPath}${query}`);
                console.log({response});
                const isRequestStateOk = response.status === 200;
                setIsRequestOk(isRequestStateOk)
                const json = await response.json();
                setData(json);
            }
        )();
    }, deps);

    return [data, isRequestOk];
};
