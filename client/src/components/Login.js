import React from 'react'

const Login = () => {
    return (
        <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col col-lg-6">
                        <a href="/doclogin"><button style={{alignItems:"flex-end"}} class="btn btn-success">Are you a Doctor? Login here</button></a>
                    </div>
                    <div class="col col-lg-6">
                        <a  href="/userlogin"><button class="btn btn-dark">Or Are you a Patient? Login here</button></a>
                    </div>    
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default Login
