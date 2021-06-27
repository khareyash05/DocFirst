import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Register = () => {
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col col-lg-6">
                        <a href="/docregister"><button style={{alignItems:"flex-end"}} class="btn btn-success">Are you a Doctor? Register here</button></a>
                    </div>
                    <div class="col col-lg-6">
                        <a  href="/userregister"><button class="btn btn-dark">Or Are you a Patient? Register here</button></a>
                    </div>    
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    )
}

export default Register
