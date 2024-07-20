import React, { useState, useEffect } from 'react';
import Header from './header';

const AboutUs = () => {
  const [loading, setLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState([]);
  const [services, setServices] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
     

      const fetchedServices = [
        {
          title: 'Biodegradable Packaging',
          icon: 'leaf',
          description: 'Compostable food containers, plant-based plastic alternatives, and eco-friendly cutlery and straws.',
          link: '#',
          linkText: 'Read More',
        },
        {
          title: 'Recycled Packaging',
          icon: 'recycle',
          description: 'Recycled paper bags, cardboard boxes from post-consumer waste, and reusable and recyclable packaging solutions.',
          link: '#',
          linkText: 'Details',
        },
        {
          title: 'Custom Solutions',
          icon: 'pencil',
          description: 'Tailored packaging designs for businesses, branding and labeling services, and sustainable packaging consultations.',
          link: '#',
          linkText: 'Read More',
        },
        {
          title: 'Market Target',
          icon: 'leaf',
          description:
           'Food and Beverage Industry: Restaurants, cafes, food trucks, and catering services.Retail: Online retailers, brick-and-mortar stores, and grocery chains. Corporate: Offices and large institutions requiring bulk packaging solutions. Events: Event planners and organizers needing disposable yet sustainable options',
          link: '#',
          linkText: 'Read More',
        },
        {
          title: 'Competitive Advantage',
          icon: 'recycle',
          description: 'Eco-Friendly Materials: Use of plant-based, biodegradable, and recyclable materials. Innovation: Continual development of new, more sustainable packaging options. Custom Solutions: Ability to create tailor-made packaging solutions for diverse needs.Certifications: Compliance with international environmental standards and certifications.',
          link: '#',
          linkText: 'Details',
        },
        {
          title: 'Future Plans',
          icon: 'pencil',
          description: ' Patents: Holds multiple patents for biodegradable packaging technologies. Product Line Expansion: Introducing new products such as edible packaging and smart packaging solutions. Global Reach: Further expanding distribution channels in emerging markets. Subscription services for regular supply. ',
          link: '#',
          linkText: 'Read More',
        },
      ];

      const fetchedClients = [1, 2, 3, 4, 5, 6];

      setServices(fetchedServices);
      setClients(fetchedClients);
      setLoading(false);
    }, 2000); // Simulating a network request delay of 2 seconds
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <div className="loader">Loading...</div> // You can style this loader as per your requirement
      ) : (
        <>
          {/* Page Content */}
          <div className="page-heading about-heading header-text">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-content">
                    <h4>About Us</h4>
                    <h2>STRONG PACKAGINGS LIMITED</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="best-features about-features">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <h2>Mission Statement</h2>
                    <p>"To revolutionise the disposable packaging industry by providing sustainable, eco-friendly solutions that meet the needs of businesses and consumers while protecting our planet."</p>
                    <h2>Vision</h2>
                    <p>"To lead the global shift towards environmentally responsible packaging through innovation, education, and commitment to sustainability."</p>
                    <h2>Core Values</h2>
                    <p>
                      <span className='text-danger'>Sustainability</span>: Prioritising eco-friendly materials and processes. <hr />
                      <span className='text-danger'>Innovation</span>: Continuously improving products and services. <hr />
                      <span className='text-danger'>Quality</span>: Ensuring high standards in all products. <hr />
                      <span className='text-danger'>Customer Focus</span>: Meeting and exceeding customer expectations. <hr />
                      <span className='text-danger'>Integrity</span>: Conducting business with transparency and honesty.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-image">
                    <img src="assets/images/feature-image.jpg" alt="Feature" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="left-content">
                    <h4>Who We Are & What We Do</h4>
                    <p>"To revolutionise the disposable packaging industry by providing sustainable, eco-friendly solutions that meet the needs of businesses and consumers while protecting our planet.</p>
                    <ul className="social-icons">
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="#"><i className="fa fa-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

         

          <div className="services">
            <div className="container">
              <div className="row">
                {services.map((service, index) => (
                  <div className="col-md-4 mt-3" key={index}>
                    <div className="service-item">
                      <div className="icon">
                        <i className={`fa fa-${service.icon}`}></i>
                      </div>
                      <div className="down-content">
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                        <a href={service.link} className="filled-button">{service.linkText}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="happy-clients">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <h2>Happy Partners</h2>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="owl-clients owl-carousel">
                    {clients.map((num) => (
                      <div className="client-item" key={num}>
                        <img src={`assets/images/client-01.png`} alt={`Client ${num}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AboutUs;
