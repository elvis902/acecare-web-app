import React from "react";
import './about.css'

const About = () => {
    return(
        <section className="about">
          <h1 className="heading"><span>about</span> us</h1>

          <div className="row">
            <div className="image">
                <img src="../src/assets/images/about1-img.jpg" alt=""/>
            </div>
            <div className="content">
                <h3>We take care of your healthy life</h3>
                <p>Ace Care is a trusted multi-specialty clinic located in Kalabhanga ward no 4, Barpeta Road, Assam, 781315. We offer a comprehensive range of services, including pediatrics, rheumatology, internal medicine, and pain medicine. Our pediatric services include well-child care, immunizations, sick-child care, growth and development evaluation, asthma management, allergy evaluation and treatment, behavioral and developmental evaluation, and adolescent health care. Our rheumatology services include evaluation and management of rheumatoid arthritis, management of systemic lupus erythematosus (SLE), management of psoriatic arthritis, management of ankylosing spondylitis, management of gout, management of osteoarthritis, infusion therapy, management of vasculitis, and management of scleroderma. Our pain medicine services include medication management, interventional pain procedures, physical therapy and rehabilitation, and pain education and counseling. Our internal medicine services include management of acute illnesses, geriatric care, women's health services, primary care services for adults, management of chronic diseases, health promotion and disease prevention, comprehensive health assessments, immunizations, mental health evaluation and treatment, and men's health services. At Ace Care, we are committed to providing expert medical care in a compassionate and patient-centered environment. We offer telehealth visits, in-person visits, and walk-ins for your convenience. If you are looking for a multi-specialty clinic in Barpeta Road, Assam, visit Ace Care or call us at 8011063040.</p>
                <a href="#" className="btn">learn more <span className="fa-solid fa-chevron-right"></span></a>
            </div>
            
        </div>
        </section>
    );
};

export default About;