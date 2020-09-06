import {DependencyList, useEffect, useRef} from "react";

export const usePrevious = <T>(prev: T, init: T, deps?: DependencyList): T => {
    const ref = useRef(init);
    useEffect(() => {
        ref.current = prev;
    }, deps);
    return ref.current;
};
