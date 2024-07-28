import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <div className="d-flex align-items-center">
                        <img src={require('../Assets/Images/indrive logo.png')} alt="img" height={50} width={50} />
                        <a href="https://www.apple.com/app-store/" className='ms-3' target="_blank" rel="noopener noreferrer">
                            <img src={require('../Assets/Images/app-store.png')} alt="App Store" height={42} width={150} />
                        </a>
                        <a href='https://play.google.com/store' target="_blank" rel="noopener noreferrer">
                            <img src={require('../Assets/Images/google-store.png')} alt="Google Play" height={65} width={170} />
                        </a>
                    </div>
                    <h6 className='mt-4'>Support : <span className='text-primary'>support@indrive.com</span></h6>
                    <p className='mt-3'>The inDrive online passenger transportation aggregator is not a taxi service and is not
                        involved in the relationship of Users. All requests are created, sent and performed by
                        users independently.</p>
                    <p className='mt-3'>© SUOL INNOVATIONS LTD, 2013-2024</p>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className='d-flex justify-content-end justify-content-sm-center justify-content-md-center'>
                        <img src={require('../Assets/Images/people driven.png')} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Footer;
