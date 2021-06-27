import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Footer = () => {
    return (
        <div>
            <footer class="footer font-small blue pt-4" style={{backgroundColor:"darkgreen",position:"static",left: 0,bottom: 0,width:"100%"}}>
                <div class="container-fluid text-center text-md-left">
                    <div class="row">
                    <div class="col-md-6 mt-md-0 mt-3">
                        <h5 class="text-uppercase" style={{color:"white"}}>DocFirst</h5>
                        <p style={{color:"white"}}>24*7 consultation</p>
                    </div>
                    {/* <!-- Grid column --> */}

                    <hr class="clearfix w-100 d-md-none pb-3"/>

                    {/* <!-- Grid column --> */}
                    <div class="col-md-3 mb-md-0 mb-3">

                        {/* <!-- Links --> */}
                        <h5 class="text-uppercase">Links</h5>

                        <ul class="list-unstyled">
                        <li>
                            <a href="#!">Link 1</a>
                        </li>
                        <li>
                            <a href="#!">Link 2</a>
                        </li>
                        <li>
                            <a href="#!">Link 3</a>
                        </li>
                        <li>
                            <a href="#!">Link 4</a>
                        </li>
                        </ul>

                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div class="col-md-3 mb-md-0 mb-3">

                        {/* <!-- Links --> */}
                        <h5 class="text-uppercase">Links</h5>

                        <ul class="list-unstyled">
                        <li>
                            <a href="#!">Link 1</a>
                        </li>
                        <li>
                            <a href="#!">Link 2</a>
                        </li>
                        <li>
                            <a href="#!">Link 3</a>
                        </li>
                        <li>
                            <a href="#!">Link 4</a>
                        </li>
                        </ul>

                    </div>

                    </div>

                </div>

            </footer>
        </div>
    )
}

export default Footer
