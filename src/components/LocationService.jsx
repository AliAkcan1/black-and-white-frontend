import {useEffect, useState} from 'react'
import axios from 'axios'

const URL = "http://localhost:8080/location/countries?page=1&size=50"
function LocationService(){
    const [results, setResults] = useState([]);
    async function fetchLocations(){
        const response = await axios.get(URL);
        setResults(response.data);
        console.log(results);
    }

    useEffect(() => {
        fetchLocations();
    }, [])
    return(
        <div>
        </div>
    )
}

export default LocationService