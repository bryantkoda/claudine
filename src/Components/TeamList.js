import React from "react";
import team from "../Images/team1.jpg";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import email from "../Images/email.png"

const TeamList = () => {
    return(
        <div className="cover-container d-flex mx-auto flex-column py-5">
            <div className="row">
                <div className='col-md-3 col-sm-12'>
                    <img src={team} className="rounded-circle img-border mx-auto d-block" width="180" height="180"/>
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <h6 className="fw-bolder">Mike Smith</h6>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <img src={facebook} width="20" className="me-1 cursor"/>
                            <img src={twitter} width="20" className="me-1 cursor"/>
                            <img src={email} width="20" className="cursor"/>
                        </div>
                    </div>
                    <h6 className="text-secondary">Partner</h6>
                    <div className="content-team">
                        <p>Lorem ipsum dolor amet consectetur sadipscing elitred diam nonumy eirmod tempor invidunt</p>
                        <p><a href="#" className="icon-link d-inline-flex align-items-center keychainify-checked">
                        &gt; read more</a></p>
                    </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                    <img src={team} className="rounded-circle img-border mx-auto d-block" width="180" height="180"/>
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <h6 className="fw-bolder">Mike Smith</h6>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <img src={facebook} width="20" className="me-1 cursor"/>
                            <img src={twitter} width="20" className="me-1 cursor"/>
                            <img src={email} width="20" className="cursor"/>
                        </div>
                    </div>
                    <h6 className="text-secondary">Partner</h6>
                    <div className="content-team">
                        <p>Lorem ipsum dolor amet consectetur sadipscing elitred diam nonumy eirmod tempor invidunt</p>
                        <p><a href="#" className="icon-link d-inline-flex align-items-center keychainify-checked">
                        &gt; read more</a></p>
                    </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                    <img src={team} className="rounded-circle img-border mx-auto d-block" width="180" height="180"/>
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <h6 className="fw-bolder">Mike Smith</h6>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <img src={facebook} width="20" className="me-1 cursor"/>
                            <img src={twitter} width="20" className="me-1 cursor"/>
                            <img src={email} width="20" className="cursor"/>
                        </div>
                    </div>
                    <h6 className="text-secondary">Partner</h6>
                    <div className="content-team">
                        <p>Lorem ipsum dolor amet consectetur sadipscing elitred diam nonumy eirmod tempor invidunt</p>
                        <p><a href="#" className="icon-link d-inline-flex align-items-center keychainify-checked">
                        &gt; read more</a></p>
                    </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                    <img src={team} className="rounded-circle img-border mx-auto d-block" width="180" height="180"/>
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <h6 className="fw-bolder">Mike Smith</h6>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <img src={facebook} width="20" className="me-1 cursor"/>
                            <img src={twitter} width="20" className="me-1 cursor"/>
                            <img src={email} width="20" className="cursor"/>
                        </div>
                    </div>
                    <h6 className="text-secondary">Partner</h6>
                    <div className="content-team">
                        <p>Lorem ipsum dolor amet consectetur sadipscing elitred diam nonumy eirmod tempor invidunt</p>
                        <p><a href="#" className="icon-link d-inline-flex align-items-center keychainify-checked">
                        &gt; read more</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamList