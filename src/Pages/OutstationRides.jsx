import React, { useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import WorkCard from './workCard';
import Footer from './footer';
import UseOutstationRides from './Hooks/useOutstationRides';
const OutstationRides = () => {
    const { data, methods } = UseOutstationRides()
    const { formData, errors, rideBtn } = data
    const { handleChange, handleSubmit, setRideBtn } = methods


    return (
        <div className="main">
            <div className="App-header">
                <header>
                    <div className='d-flex justify-content-between align-items-center'>
                        <img src={require('../Assets/Images/logo.png')} alt="img" height={100} width={200} />
                        <button className='btn cus_Btn me-3'><LoginIcon sx={{ fontSize: '16px' }} /> Login</button>
                    </div>
                </header>
                <div className='c11s0dut'>
                    <h1>Outstation rides at <span> your <br /> fare</span></h1>
                    <div>
                        Explore hundreds of intercity routes. Suggest your price and choose one of our verified drivers
                    </div>
                </div>
                <div className='container ride_Container'>
                    <div className='d-flex'>
                        <button className={`btn ${rideBtn === 'private' ? 'cus_Btn' : 'cus_Btn_Ride'}`} onClick={() => setRideBtn('private')}>Private ride</button>
                        <button className={`btn ms-2 ${rideBtn === 'shared' ? 'cus_Btn' : 'cus_Btn_Ride'}`} onClick={() => setRideBtn('shared')}>Shared ride</button>
                    </div>
                    <div className='row mt-2'>
                        <div className="col-sm-3 col-md-4 col-lg-4 mt-3">
                            <TextField id="outlined-basic" label="From" variant="outlined"
                                className='w-100'
                                name="from"
                                value={formData.from}
                                onChange={handleChange} />
                            {errors.from && <span className='text-danger'>{errors.from}</span>}
                        </div>
                        <div className="col-sm-3 col-md-4 col-lg-4 mt-md-3 mt-5">
                            <TextField id="outlined-basic" label="To" variant="outlined" className='w-100 input_Height'
                                name="to"
                                value={formData.to}
                                onChange={handleChange}
                            />
                            {errors.to && <span className='text-danger'>{errors.to}</span>}

                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 mt-2">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="When" className='w-100'
                                        name="date"
                                        value={formData?.date}
                                        onChange={handleChange} />
                                </DemoContainer>
                            </LocalizationProvider>
                            {errors.date && <span className='text-danger'>{errors.date}</span>}

                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4 mt-3">
                            <TextField id="outlined-basic" label="Passengers" variant="outlined" className='w-100'
                                name="passengers"
                                value={formData.passengers}
                                onChange={handleChange} />
                            {errors.passengers && <span className='text-danger'>{errors.passengers}</span>}

                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4 mt-3">
                            <TextField id="outlined-basic" label="Offer your face" variant="outlined" className='w-100'
                                name="offerPrice"
                                value={formData.offerPrice}
                                onChange={handleChange} />
                            {errors.offerPrice && <span className='text-danger'>{errors.offerPrice}</span>}

                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4 mt-3">
                            <button className='btn ride_btn' onClick={handleSubmit}>Find a driver</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* So, why choose us? */}
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className="col-lg-12">
                        <h1 className='font-55'>So, why choose us?</h1>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 ">
                        <div className='card'>
                            <div className='circle'>
                                <ThumbUpOutlinedIcon />
                            </div>
                            <h3>Fair prices</h3>
                            <p>Choose the best offer at your price</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className='card'>
                            <div className='circle'>
                                <ContactMailOutlinedIcon />
                            </div>
                            <h3>Verified drivers</h3>
                            <p>Choose your driver based on their rating, reviews, and car</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className='card'>
                            <div className='circle'>
                                <GroupOutlinedIcon />
                            </div>
                            <h3>Fair prices</h3>
                            <p>You can be picked up and dropped off directly at your desired location</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* We care about safety */}
            <div className='container-fluid mt-5 safety'>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className='font-55'>We care about safety</h1>
                    </div>
                    <div className='col-lg-6 d-none d-lg-block mt-5'>
                        <img src={require('../Assets/Images/car.png')} className='img-fluid' alt="car_img" />
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 mt-5'>
                        <h3>Rating system </h3>
                        <p> We ask users to give us their honest feedback after each ride. You can choose your driver based on the experience of previous riders</p>

                        <h3 className='mt-2'>Mandatory checks </h3>
                        <p>All drivers must pass background check before driving with inDrive</p>

                        <h3 className='mt-2'>Safety button</h3>
                        <p>Tap it to quickly contact the police or emergency services</p>
                    </div>
                    <div className='col-lg-6 d-md-block d-lg-none mt-5'>
                        <img src={require('../Assets/Images/car.png')} className='img-fluid' alt="car_img" />
                    </div>
                </div>
            </div>

            {/* How does it work? */}
            <div className='container-fluid mt-5 safety'>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className='font-55'>How does it work?</h1>
                    </div>
                    <div className='col-lg-8 d-none d-lg-block mt-5'>
                        <WorkCard />
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12 mt-5 '>
                        <div className='d-flex align-itms-center ms-5 works'>
                            <div className=''>1</div>
                            <p>Fill in the order form</p>
                        </div>
                        <div className='d-flex align-itms-center ms-5 mt-4 works'>
                            <div>2</div>
                            <p>Wait for offers from drivers</p>
                        </div>
                        <div className='d-flex align-itms-center ms-5 mt-4 works'>
                            <div>3</div>
                            <p>Accept the best offer</p>
                        </div>
                        <div className='d-flex align-itms-center ms-5 mt-4 works'>
                            <div>4</div>
                            <p>Call the driver and discuss the details of your ride</p>
                        </div>
                    </div>
                    <div className='col-lg-8 d-md-block d-lg-none mt-5'>
                        <WorkCard />
                    </div>
                </div>
            </div>

            {/* Download our free app */}
            <div className='container-fluid safety' style={{ marginTop: '100px' }}>
                <div className="row">
                    <div className='col-lg-8 col-md-12 col-sm-12 mt-5'>
                        <h1 className='font-55' >Download our free app</h1>

                        <p>It makes ordering more convenient, and you also get notifications of drivers’ offers</p>
                        <button className='btn download_btn mt-2 mb-5'>Download app</button>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center  '>
                        <div className='scan'>
                            <p>Scan the code with your camera to download the app</p>
                            <img src={require('../Assets/Images/scanner.png')} alt="scanner" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="mt-5">
                <Footer />
            </div>
        </div>

    );
};

export default OutstationRides;
