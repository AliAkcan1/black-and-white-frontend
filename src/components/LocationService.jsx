import {useEffect, useState} from 'react'
import axios from 'axios'

const URL = "http://localhost:8080/location/countries?page=1&size=50"
function LocationService(){
    //eslint-disable-next-line
    const [results, setResults] = useState([]);

    useEffect(() => {
        async function fetchLocations(){
            const response = await axios.get(URL);
            setResults(response);
            console.log("Got the location list data.")
        }
        fetchLocations();
        //eslint-disable-next-line
    }, [])
    return(
        <div>
        </div>
    )
}

export default LocationService