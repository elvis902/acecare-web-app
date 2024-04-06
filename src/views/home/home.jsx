import React from 'react';
import aboutImg from '../../assets/images/about1-img.jpg'
import './home.css'
import { Col, Row } from 'antd';
import DoctorsCard from './doctorsCard';
import { doctorsInfo } from './contants';
import DepartmentCard from './departmentCard';
import { departmentInfo } from './contants';

import { faNotesMedical } from '@fortawesome/free-solid-svg-icons'
import { faPills } from '@fortawesome/free-solid-svg-icons'
import { faLungs } from '@fortawesome/free-solid-svg-icons'
import { faChild } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';




function Home(props) {
    const departmentIconIdMap = new Map();
    departmentIconIdMap.set('child', faChild);
    departmentIconIdMap.set('notesMedical', faNotesMedical);
    departmentIconIdMap.set('pills', faPills);
    departmentIconIdMap.set('lungs', faLungs);
    return (
        <>
            <section className="home" id='home'>
                <div className="info">
                    <h1>Multi-Specialty Clinic</h1>
                    <h3>Comprehensive care for all ages</h3>
                    <p>Ace Care is a trusted multi-specialty clinic in Barpeta Road, Assam, offering a wide range of services for patients of all ages. Visit us for expert care and personalized treatment.</p>
                </div>
            </section>

            <section className="about" id='about'>
                <Row className='about-row-1'>
                    <Col className='about-row-1-col' span={24}>About Us</Col>
                </Row>
                <Row className='about-row-2'>
                    <Col className='about-row-2-col-1'>
                        <img className='about-row-2-img' src={aboutImg} alt="" />
                    </Col>
                    <Col className='about-row-2-col-2'>
                        <div className="content">
                            <h3>We take care of your healthy life</h3>
                            <p>Ace Care is a trusted multi-specialty clinic located in Amtol, Manaspur, Near Rabindra Sarobar, Barpeta Road, Assam - 781315. We offer a comprehensive range of services, including pediatrics, rheumatology, internal medicine, and pain medicine. Our pediatric services include well-child care, immunizations, sick-child care, growth and development evaluation, asthma management, allergy evaluation and treatment, behavioral and developmental evaluation, and adolescent health care. Our rheumatology services include evaluation and management of rheumatoid arthritis, management of systemic lupus erythematosus (SLE), management of psoriatic arthritis, management of ankylosing spondylitis, management of gout, management of osteoarthritis, infusion therapy, management of vasculitis, and management of scleroderma. Our pain medicine services include medication management, interventional pain procedures, physical therapy and rehabilitation, and pain education and counseling. Our internal medicine services include management of acute illnesses, geriatric care, women's health services, primary care services for adults, management of chronic diseases, health promotion and disease prevention, comprehensive health assessments, immunizations, mental health evaluation and treatment, and men's health services. At Ace Care, we are committed to providing expert medical care in a compassionate and patient-centered environment. We offer telehealth visits, in-person visits, and walk-ins for your convenience. If you are looking for a multi-specialty clinic in Barpeta Road, Assam, visit Ace Care or call us at 8876136211.</p>
                            <a href="#" className="btn">learn more <span className="fa-solid fa-chevron-right"></span></a>
                        </div>
                    </Col>
                </Row>
                {/* <h1 className="heading"><span>about</span> us</h1>

                <div className="row">
                    <div className="image">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="content">
                        <h3>We take care of your healthy life</h3>
                        <p>Ace Care is a trusted multi-specialty clinic located in Kalabhanga ward no 4, Barpeta Road, Assam, 781315. We offer a comprehensive range of services, including pediatrics, rheumatology, internal medicine, and pain medicine. Our pediatric services include well-child care, immunizations, sick-child care, growth and development evaluation, asthma management, allergy evaluation and treatment, behavioral and developmental evaluation, and adolescent health care. Our rheumatology services include evaluation and management of rheumatoid arthritis, management of systemic lupus erythematosus (SLE), management of psoriatic arthritis, management of ankylosing spondylitis, management of gout, management of osteoarthritis, infusion therapy, management of vasculitis, and management of scleroderma. Our pain medicine services include medication management, interventional pain procedures, physical therapy and rehabilitation, and pain education and counseling. Our internal medicine services include management of acute illnesses, geriatric care, women's health services, primary care services for adults, management of chronic diseases, health promotion and disease prevention, comprehensive health assessments, immunizations, mental health evaluation and treatment, and men's health services. At Ace Care, we are committed to providing expert medical care in a compassionate and patient-centered environment. We offer telehealth visits, in-person visits, and walk-ins for your convenience. If you are looking for a multi-specialty clinic in Barpeta Road, Assam, visit Ace Care or call us at 8011063040.</p>
                        <a href="#" className="btn">learn more <span className="fa-solid fa-chevron-right"></span></a>
                    </div>

                </div> */}
            </section>

            <section className='doctors' id='doctors'>
                <div className='doctors-1'>
                    <h1>Expert Health Care</h1>

                    <p>Our experienced team of doctors is dedicated to providing the highest quality care for our patients. Schedule
                        an appointment with our friendly team and experience the difference at Ace Care</p>
                    <div className='doc-box'>
                        {doctorsInfo.map((doctor) => (
                            <div className='doc-1'>
                                <DoctorsCard
                                    doctorData={doctor} />

                            </div>
                        ))}




                    </div>
                </div>
            </section>

            <section className='departments' id='departments'>
                <h1 class="heading"> Our Departments</h1>
                <div className='dept-box'>
                    {departmentInfo.map((department) => (
                        <div className='dept'>
                            <DepartmentCard departmentData={department} iconRes={departmentIconIdMap.get(department.iconKey)} />
                        </div>
                    ))}

                </div>

            </section>

            <section className="footer" id='contact'>
                <Row className='footer-row'>
                    <Col className='footer-col' xs={{span:24}} md={{span:7, offset:1}}>
                        <h3>Contacts</h3>
                        <p> <FontAwesomeIcon icon={faPhone} /> <span>8876136211,8826868550</span></p>
                        <p> <FontAwesomeIcon icon={faEnvelope} /> <span>acecare00@gmail.com</span></p>
                        <div className="icons">
                            <h3>Follow Us</h3>
                            <a href="https://www.facebook.com/profile.php?id=61556438889687">
                                <FontAwesomeIcon icon={faFacebook} />      
                            </a>
                            <a href="https://www.instagram.com/acecare_polyclinic/">
                                <FontAwesomeIcon icon={faInstagram} />     
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faTwitter} />     
                            </a>
                            {/* <span><FontAwesomeIcon icon={faFacebook} /></span>
                            <span><FontAwesomeIcon icon={faTwitter} /></span>
                            <span><FontAwesomeIcon icon={faInstagram} /></span> */}
                        </div>
                    </Col>

                    <Col className='footer-col' xs={{span:24}} md={{span:7, offset:1}}>
                        <h3>Location</h3>
                        <p><span><FontAwesomeIcon icon={faLocationDot} /></span> Amtol, Manaspur, Near Rabindra Sarobar, Barpeta Road, Assam - 781315</p>
                    </Col>

                    <Col className='footer-col' xs={{span:24}} md={{span:7, offset:1}}>
                        <h3>Availability</h3>
                        <p>OPD : 8am-9pm</p>
                        <p>Pharmacy : 24X7</p>
                    </Col>
                </Row >
            </section >
        </>
    );
}

export default Home;