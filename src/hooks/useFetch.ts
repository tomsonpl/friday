import {useEffect, useState, DependencyList} from "react";

export const useFetch = (apiPath: string, query: string, deps: DependencyList): [string[], boolean, () => void] => {
    const [data, setData] = useState<string[]>([]);
    const [isRequestOk, setIsRequestOk] = useState<boolean>(false);
    const [refetch, setRefetch] = useState(false);
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
    }, [...deps, refetch]);

    return [data, isRequestOk, () => setRefetch((prevValue) => !prevValue)];
};
