import React from 'react'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const WorkCard = () => {
    return (
        <>
            <div className='row'>
                <div className="col-lg-12 col-md-12- col-sm-12">
                    <div className='work_Card'>
                        <div className="d-flex justify-content-between">
                            <div className='d-flex'>
                                <img src={require('../Assets/Images/swift.webp')} alt="swift" height={100} width={150} />
                                <div className="offer-info ms-3">
                                    <div className='d-flex'>
                                        <img src={require('../Assets/Images/driver1.png')} alt="driver1" height={50} width={50} />
                                        <div className='ms-2'>
                                            <h2>Vijay <span className="rating">⭐ 4.9</span></h2>
                                            <p>Maruti Suzuki Swift, 2015</p>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <p className='fw-bold'>28 July,5:30 PM 100</p>
                                        <p className='ms-1'>for 1 passenger </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='d-flex justify-content-end'>
                                    <KeyboardArrowRightRoundedIcon />

                                </div>
                                <div className="offer-actions">
                                    <button className="decline">Decline</button>
                                    <button className="accept">Accept</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-12 col-md-12- col-sm-12">
                    <div className='work_Card'>
                        <div className="d-flex justify-content-between">
                            <div className='d-flex'>
                                <img src={require('../Assets/Images/aura.jpg')} alt="swift" height={100} width={150} />
                                <div className="offer-info ms-3">
                                    <div className='d-flex'>
                                        <img src={require('../Assets/Images/driver2.png')} alt="driver1" height={50} width={50} />
                                        <div className='ms-2'>
                                            <h2>Ravi <span className="rating">⭐ 4.5</span></h2>
                                            <p>Hyundai Aura, 2023</p>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <p className='fw-bold'>28 July,5:30 PM 100</p>
                                        <p className='ms-1'>for 1 passenger </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='d-flex justify-content-end'>
                                    <KeyboardArrowRightRoundedIcon />

                                </div>
                                <div className="offer-actions">
                                    <button className="decline">Decline</button>
                                    <button className="accept">Accept</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkCard