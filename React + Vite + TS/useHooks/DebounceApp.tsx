import { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

function DebounceApp() {
    const [searchValue, setSearchValue] = useState<string>('');
    const debouncedValue: string = useDebounce(searchValue, 500);

    // hit the backend for the search
    useEffect(() => {
        fetch("");
    }, [debouncedValue]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <div>
            <div>Debounced value: {debouncedValue}</div>
            <label htmlFor="searchInput">Search: </label> {/* Add a label */}
            <input 
                id="searchInput"
                type="text" 
                onChange={handleInputChange} 
                value={searchValue} 
            />
        </div>
    );
}

export default DebounceApp;
