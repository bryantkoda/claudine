import React from "react";
import team from "../Images/team1.jpg";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import email from "../Images/email.png"

const TeamList = () => {
    return(
        <div className="container">
            <div className="row p-5">
                <div className='col-md-3 col-sm-12 p-4'>
                    <img src={team} className="rounded-circle img-border mx-auto d-block" width="180" height="180"/>
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <h5 className="fw-bolder">Mike Smith</h5>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <img src={facebook} width="20" className="me-1"/>
                            <img src={twitter} width="20" className="me-1"/>
                            <img src={email} width="20"/>
                        </div>
                    </div>
                    <h6>Partner</h6>
                    <p>Lorem ipsum dolor amet consectetur sadipscing elitred diam nonumy eirmod tempor invidunt</p>
                    <p><a href="#" className="icon-link d-inline-flex align-items-center keychainify-checked">
                    &gt; read more</a></p>
                </div>
                <div className='col-md-3 col-sm-12 p-4'>
                    <img src={team} className="rounded-circle img-border mx-auto d-block" width="180" height="180"/>
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <h5 className="fw-bolder">Mike Smith</h5>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <img src={facebook} width="20" className="me-1"/>
                            <img src={twitter} width="20" className="me-1"/>
                            <img src={email} width="20"/>
                        </div>
                    </div>
                    <h6>Partner</h6>
                    <p>Lorem ipsum dolor amet consectetur sadipscing elitred diam nonumy eirmod tempor invidunt</p>
                    <p><a href="#" className="icon-link d-inline-flex align-items-center keychainify-checked">
                    &gt; read more</a></p>
                </div>
                <div className='col-md-3 col-sm-12 p-4'>
                    <img src={team} className="rounded-circle img-border mx-auto d-block" width="180" height="180"/>
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <h5 className="fw-bolder">Mike Smith</h5>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <img src={facebook} width="20" className="me-1"/>
                            <img src={twitter} width="20" className="me-1"/>
                            <img src={email} width="20"/>
                        </div>
                    </div>
                    <h6>Partner</h6>
                    <p>Lorem ipsum dolor amet consectetur sadipscing elitred diam nonumy eirmod tempor invidunt</p>
                    <p><a href="#" className="icon-link d-inline-flex align-items-center keychainify-checked">
                    &gt; read more</a></p>
                </div>
                <div className='col-md-3 col-sm-12 p-4'>
                    <img src={team} className="rounded-circle img-border mx-auto d-block" width="180" height="180"/>
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <h5 className="fw-bolder">Mike Smith</h5>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <img src={facebook} width="20" className="me-1"/>
                            <img src={twitter} width="20" className="me-1"/>
                            <img src={email} width="20"/>
                        </div>
                    </div>
                    <h6>Partner</h6>
                    <p>Lorem ipsum dolor amet consectetur sadipscing elitred diam nonumy eirmod tempor invidunt</p>
                    <p><a href="#" className="icon-link d-inline-flex align-items-center keychainify-checked">
                    &gt; read more</a></p>
                </div>
            </div>
        </div>
    );
}

export default TeamList