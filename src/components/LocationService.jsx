import {useEffect, useState} from 'react'
import axios from 'axios'

const URL = "http://localhost:8080/location/countries?page=1&size=50"
function LocationService(){
    const [results, setResults] = useState([]);

    useEffect(() => {
        async function fetchLocations(){
            const response = await axios.get(URL);
            setResults(response);
            console.log(results);
        }
        fetchLocations();
    }, [])
    return(
        <div>
        </div>
    )
}

export default LocationService