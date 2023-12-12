import {useEffect, useState} from 'react'
import axios from 'axios'

const URL = "http://localhost:8080/location/countries?page=1&size=50"

export default function SignUp() {
    const [results, setResults] = useState([]);
    useEffect(() => {
         async function fetchLocations(){
             const response = await axios.get(URL);
             setResults(response);
             console.log("Got the location list data.")
         }
         fetchLocations();
    }, []);

    function searchCountryList(){

    }

    return (
        <div className="signup-page">
            <div className="signup-main">
                <div className="signup-main-header">
                    <h1>Create a new account.</h1>
                </div>
                <div className="signup-main-textboxes">
                    <div className="signup-form-container">
                        <form className="signup-form">
                            <div className="name-surname">
                                <div className='d-signup-name signup-textbox-cnt' >
                                    <label htmlFor="signup-name" className='signup-label'>Name</label>
                                    <input type="text" placeholder="Name" id='signup-name' className="signup-textbox signup-name" required />
                                </div>
                                <div className="d-signup-surname signup-textbox-cnt">
                                    <label htmlFor="signup-surname" className='signup-label'>Last Name</label>
                                    <input type="text" placeholder="Last Name" id='signup-surname' className="signup-textbox signup-surname" required />
                                </div>
                            </div>
                            <div className="d-signup-username signup-textbox-cnt">
                                <label htmlFor="signup-username" className='signup-label'>Username</label>
                                <input type="text" placeholder="Username" id='signup-username' className="signup-textbox signup-username" required />
                            </div>
                            <div className="d-signup-email signup-textbox-cnt">
                                <label htmlFor="signup-email" className='signup-label'>E-Mail Adress</label>
                                <input type="text" placeholder="E-Mail" id='signup-email' className="signup-textbox signup-email" required />
                            </div>

                            {/* LOCATION SERVICE WORKS IN THIS AREA */}
                            <div className="location">
                                <div className="d-signup-country signup-textbox-cnt">
                                    <label htmlFor="signup-country" className='signup-label'>Country</label>
                                    <input type="text" placeholder="Country" id='signup-country' className="signup-textbox signup-country" required />
                                    <div className="country-search-list">
                                        <ul>
                                            <li>aa</li>
                                            <li>aaaaa</li>
                                            <li>aaaa</li>
                                            <li>aaaaaa</li>
                                            <li>aaaaaaa</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="d-signup-city signup-textbox-cnt">
                                    <label htmlFor="signup-city" className='signup-label'>City</label>
                                    <input type="text" placeholder="City" id='signup-city' className="signup-textbox signup-city" required />
                                </div>
                            </div>
                            {/* location service area */}
                            <div className="d-signup-password signup-textbox-cnt">
                                <label htmlFor="signup-surname" className='signup-label'>Password</label>
                                <input type="password" placeholder="Password" id='signup-password' className="signup-textbox signup-password" required />
                            </div>
                            <div className="d-signup-verify signup-textbox-cnt">
                                <label htmlFor="signup-verify" className='signup-label'>Verify Password</label>
                                <input type="password" placeholder="Verify Password" id='signup-verify' className="signup-textbox signup-verify" required />
                            </div>
                            <div className="d-signup-checkbox">
                                <input type="checkbox" name="checkbox" id="signup-checkbox" value="accept" />
                                <label htmlFor="signup-checkbox">I agree with suecasey&apos;s <a href='/'>Terms of Service</a>, Privacy Policy, and default Notification Settings.</label>
                            </div>
                            <div className="d-signup-submit">
                                <button className="signup-button">Sign Up</button>
                            </div>
                        </form>
                        <p>Already have an accout? <a href="/login">Login</a> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}