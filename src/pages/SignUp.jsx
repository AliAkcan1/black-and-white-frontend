import LocationService from "../components/LocationService"

export default function SignUp(){
    return(
        <div className="signup-page">
            <LocationService />
            <div className="signup-main">
                <div className="signup-main-header">
                    <h1>Create a new account.</h1>
                    <p>Already Have An Account? <a href="/login">Login</a> </p>
                </div>
                <div className="signup-main-textboxes">
                    <div className="signup-form-container">
                        <form className="signup-form">
                            <div className="name-surname">
                                <div className='d-signup-name signup-textbox-cnt' >
                                    <label htmlFor="signup-name" className='signup-label'>Name</label>
                                    <input type="text" placeholder="Name" id='signup-name' className="signup-textbox signup-name"  required/>
                                </div>
                                <div className="d-signup-surname signup-textbox-cnt">
                                    <label htmlFor="signup-surname" className='signup-label'>Last Name</label>
                                    <input type="text" placeholder="Surname" id='signup-surname' className="signup-textbox signup-surname"  required/>
                                </div>
                            </div>
                            <div className="d-signup-username signup-textbox-cnt">
                                <label htmlFor="signup-username" className='signup-label'>Username</label>
                                <input type="text" placeholder="Username" id='signup-username' className="signup-textbox signup-username"  required/>
                            </div>
                            <div className="d-signup-email signup-textbox-cnt">
                                <label htmlFor="signup-email" className='signup-label'>E-Mail Adress</label>
                                <input type="text" placeholder="E-Mail" id='signup-email' className="signup-textbox signup-email"  required/>
                            </div>
                            <div className="location">
                                <div className="d-signup-city signup-textbox-cnt">
                                    <label htmlFor="signup-city" className='signup-label'>City</label>
                                    <input type="text" placeholder="City" id='signup-city' className="signup-textbox signup-city"  required/>
                                </div>
                                <div className="d-signup-country signup-textbox-cnt">
                                    <label htmlFor="signup-country" className='signup-label'>Country</label>
                                    <input type="text" placeholder="Country" id='signup-country' className="signup-textbox signup-country"  required/>
                                </div>
                            </div>
                            <div className="d-signup-password signup-textbox-cnt">
                                <label htmlFor="signup-surname" className='signup-label'>Password</label>
                                <input type="password" placeholder="Password" id='signup-password' className="signup-textbox signup-password"  required/>
                            </div>
                            <div className="d-signup-verify signup-textbox-cnt">
                                <label htmlFor="signup-verify" className='signup-label'>Verify Password</label>
                                <input type="password" placeholder="Verify Password" id='signup-verify' className="signup-textbox signup-verify"  required/>
                            </div>
                            <div className="d-signup-checkbox">
                                <input type="checkbox" name="checkbox" id="signup-checkbox" value="accept" />
                                <label htmlFor="signup-checkbox">I agree with suecasey.'s <a href='/'>Terms of Service</a>, Privacy Policy, and default Notification Settings.</label>
                            </div>
                            <button className="signup-button">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}