import { useEffect, useState } from "react"

export const useDebounce = (value: string, timeout: number) => {
    const [debouncedValue, setDebouncedValue] = useState('');
    useEffect(() => {
        const interval = setTimeout(() => {
            setDebouncedValue(value);
        }, timeout)

        // clean up before re-render
        return () => {
            clearInterval(interval);
        }
    }, [value]);

    return debouncedValue;
};
