export default function Login(){
    return(
        <div className="login-page">
            <div className="login-main">
                <div className="login-main-header">
                    <h1>Login to your account.</h1>
                    <p>Still Not A Member? <a href="/signup">Sign Up</a> </p>
                </div>
                <div className="login-main-textboxes">
                    <div className="login-form-container">
                        <form id="login-form">
                            <label htmlFor="login-username" className='login-label'>Username</label>
                            <input type="text" placeholder="Username" id="login-username"  required/>
                            <label htmlFor="login-password" className='login-label'>Password</label>
                            <input type="password" placeholder="Password" id="login-password"  required/>
                            <a href="/" className="login-forgot">Forgot your password?</a>
                            <button id="login-button">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}