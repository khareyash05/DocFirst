import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import pic from "../assets/banner.jpg"
import d1 from "../assets/doctor1.jpg"
import d2 from "../assets/doctor2.jpg"

const Home = () => {
    return (
        <div>
            <div className = "banner" style ={{backgroundColor:"darkgreen"}}>
                <div class="container-fluid" style={{padding:30}}>
                    <div class="row">
                        <div class="col" style={{padding:20}}>
                            <h5 style={{color:"white"}}>Need Doctor at 3 A.M. ??</h5>
                            <h1 style={{color:"white"}}>Why Fear when DocFirst is here!!</h1>
                            <hr style={{color:"white"}}/>
                            <p style={{color:"white"}}>24*7 video consultations for free only on DocFirst</p>
                        </div>
                        <div class="col col-lg-4">
                            <img src={pic} alt="" style={{height:250}}/>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/>
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col col-lg-5">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col col-lg-4">
                                        <img src={d1} alt="" style={{height:200}}/>
                                    </div>
                                    <div class="col col-lg-6">
                                        <h4>Find Doctors Near You</h4>
                                        <br/>
                                        <p>Select preffered doctor and time slot to book an on-clinic or video consultation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-lg-7">
                            <div class="container-fluid">
                                    <div class="row">
                                        <div class="col col-lg-4">
                                            <img src={d2} alt="" style={{height:200}}/>
                                        </div>
                                        <div class="col col-lg-6">                                            
                                            <h4>Chat with Doctors Anytime</h4>
                                            <br/><br/>
                                            <p>Have a chat with doctors and get instant remedy (P.S. Your chats are confidential and end-to-end encrypted)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
        </div>
    )
}

export default Home
