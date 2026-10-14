import { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPlane,
  FaUsers,
  FaSearch,
  FaShieldAlt,
  FaHeadset,
  FaStar,
  FaCompass,
  FaLandmark,
  FaUmbrellaBeach,
  FaGlobeAsia,
  FaArrowRight,
  FaQuoteRight,
} from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel, { type TravelCard } from '../components/Carousel';
import SectionTitle from '../components/SectionTitle';
import '../scss/Home.scss';

import heroImage from '../assets/images/hero.jpg';
import holidayOne from '../assets/images/holiday-1.png';
import holidayTwo from '../assets/images/holiday-2.png';
import holidayThree from '../assets/images/holiday-3.png';
import holidayFour from '../assets/images/holiday-4.png';
import underOne from '../assets/images/under-1.png';
import underTwo from '../assets/images/under-2.png';
import underThree from '../assets/images/under-3.png';
import underFour from '../assets/images/under-4.png';
import whyChooseImage from '../assets/images/why-choose.png';
import trendOne from '../assets/images/trend-1.jpg';
import trendTwo from '../assets/images/trend-2.jpg';
import trendThree from '../assets/images/trend-3.jpg';
import trendFour from '../assets/images/trend-4.jpg';
import trendFive from '../assets/images/trend-5.jpg';
import packageOne from '../assets/images/package-1.png';
import packageTwo from '../assets/images/package-2.png';
import packageThree from '../assets/images/package-3.png';
import packageFour from '../assets/images/package-4.png';
import packageFive from '../assets/images/package-5.png';
import affiliationOne from '../assets/images/our-affiliations-logo-1.png';
import affiliationTwo from '../assets/images/our-affiliations-logo-2.png';
import affiliationThree from '../assets/images/our-affiliations-logo-3.png';
import affiliationFour from '../assets/images/our-affiliations-logo-4.png';
import affiliationFive from '../assets/images/our-affiliations-logo-5.png';
import affiliationSix from '../assets/images/our-affiliations-logo-6.png';
import awardOne from '../assets/images/achievements-1.jpg';
import awardTwo from '../assets/images/achievements-2.png';
import awardThree from '../assets/images/achievements-3.png';
import awardFour from '../assets/images/achievements-4.jpg';
import awardFive from '../assets/images/achievements-5.jpg';
import awardSix from '../assets/images/achievements-6.png';

const holidayCards: TravelCard[] = [
  {
    title: 'Enchanting Kerala',
    location: '4 Days / 3 Nights',
    price: '₹28,000',
    image: holidayOne,
  },
  {
    title: 'Paradise Island Resort & Spa',
    location: 'Maldives · 5 Days',
    price: '₹75,000',
    image: holidayTwo,
  },
  { title: 'Ulu Batu Package', location: 'Bali · 6 Days', price: '₹48,999', image: holidayThree },
  {
    title: 'Best of Langkawi',
    location: 'Malaysia · 4 Days',
    price: '₹35,000',
    image: holidayFour,
  },
];

const trendingCards: TravelCard[] = [
  { title: 'Gardens by the Bay', location: 'Singapore', price: 'from ₹1.55 lakh', image: trendOne },
  { title: 'Parisian Charm', location: 'Paris, France', price: 'from ₹1.55 lakh', image: trendTwo },
  { title: 'Kuala Lumpur', location: 'Malaysia', price: 'from ₹1 lakh', image: trendThree },
  { title: 'Italian Wonder', location: 'Pisa, Italy', price: 'from ₹2 lakh', image: trendFour },
  { title: 'Huzhou Springs', location: 'China', price: 'from ₹2.5 lakh', image: trendFive },
];

const popularPackages: TravelCard[] = [
  {
    title: 'Most Exotic Resort',
    location: 'Kerala · 3 Nights',
    price: '₹12,999',
    image: packageOne,
  },
  {
    title: 'Serene Pondicherry Escape',
    location: 'Pondicherry · 2 Nights',
    price: '₹8,499',
    image: packageTwo,
  },
  { title: 'Misty Getaway', location: 'Coorg · 3 Nights', price: '₹9,999', image: packageThree },
  {
    title: 'Delightful Hill Stay',
    location: 'Ooty · 2 Nights',
    price: '₹11,500',
    image: packageFour,
  },
  { title: 'Adventure Weekend', location: 'Western Ghats', price: '₹7,999', image: packageFive },
];

const affiliations = [
  affiliationOne,
  affiliationTwo,
  affiliationThree,
  affiliationFour,
  affiliationFive,
  affiliationSix,
];
const awards = [awardOne, awardTwo, awardThree, awardFour, awardFive, awardSix];
const testimonials = [
  {
    name: 'Angelina Rose',
    text: 'Our holiday was wonderful. Every detail was handled with care, and we had plenty of time to explore at our own pace.',
  },
  {
    name: 'Andrew Simon',
    text: 'We had a fantastic trip! The hotels were lovely, transfers were smooth, and the team was always available whenever we needed help.',
  },
  {
    name: 'Maria Doe',
    text: 'The team made our anniversary unforgettable with thoughtful recommendations, great stays and an experience we will always remember.',
  },
];

export default function Home() {
  const [searchBy, setSearchBy] = useState('domestic');
  const [tourType, setTourType] = useState('Domestic');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div id="top">
      <Header />
      <main>
        <section
          className="hero"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(5, 23, 25, .42), rgba(5, 23, 25, .12)), url(${heroImage})`,
          }}
        >
          <div className="hero-copy">
            <span className="hero-kicker">YOUR NEXT CHAPTER STARTS HERE</span>
            <h1>
              Travel Beyond Ordinary.
              <br />
              <span>Travel Benchmark</span>
            </h1>
            <p>
              Explore the world’s most breathtaking destinations with our curated travel packages.
            </p>
          </div>
        </section>

        <section className="search-wrap" id="search">
          <div className="search-box">
            <h2>Search your Dream Holiday</h2>
            <div className="search-tabs">
              <label>
                <input
                  type="radio"
                  name="searchBy"
                  value="domestic"
                  checked={searchBy === 'domestic'}
                  onChange={() => setSearchBy('domestic')}
                />{' '}
                Domestic
              </label>
              <label>
                <input
                  type="radio"
                  name="searchBy"
                  value="international"
                  checked={searchBy === 'international'}
                  onChange={() => setSearchBy('international')}
                />{' '}
                International
              </label>
            </div>
            <div className="search-fields">
              <label>
                <FaMapMarkerAlt />
                <input aria-label={'Destination'} placeholder={'Destination'} />
              </label>
              <label>
                <FaPlane />
                <select aria-label="Tour type">
                  <option>Tour Type</option>
                  <option>Adventure</option>
                  <option>Relaxation</option>
                  <option>Family</option>
                </select>
              </label>
              <label>
                <FaUsers />
                <select aria-label="Travellers">
                  <option>2 Adults - 1 Children</option>
                  <option>2 Adults</option>
                  <option>4 Adults</option>
                </select>
              </label>
              <button className="search-button" type="button">
                <FaSearch /> Search
              </button>
            </div>
          </div>
        </section>

        <section className="page-width section holiday-section">
          <SectionTitle
            title="Christmas & New Year Holidays"
            subtitle="Explore the world’s most magical destinations this festive season"
          />
          <Carousel items={holidayCards} visible={4} className="holiday-carousel" />
        </section>

        <section className="page-width section package-types" id="packages">
          <div className="section-heading-left">
            <h2>Packages we provide</h2>
          </div>

          <div className="type-grid">
            {[underOne, underTwo, underThree, underFour].map((image, index) => (
              <div className="type-tile" key={image}>
                <img src={image} alt="" className="type-tile-image" />

                <div className="type-tile-text">
                  <span>Under</span>
                  <span>{['₹1,00,000', '₹1,50,000', '₹1,75,000', '₹2,00,000'][index]}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="why-section" id="why">
          <div className="why-inner page-width">
            <div className="why-copy">
              <span className="eyebrow">THE logoipsum DIFFERENCE</span>
              <h2>Why choose us</h2>
              <p>
                At every new journey, our team is dedicated to serving every traveller. We provide
                thoughtful customer support at all stages of your holiday, from the first enquiry to
                your return home.
              </p>
              <p>
                Our experts help you plan a trip that suits your interests and budget, whether you
                seek adventure, relaxation or a cultural discovery.
              </p>
              <div className="stats-grid">
                <div>
                  <span className="stat-icon aqua">
                    <FaPlane />
                  </span>
                  <strong>60K+</strong>
                  <small>Happy Travellers</small>
                </div>
                <div>
                  <span className="stat-icon yellow">
                    <FaStar />
                  </span>
                  <strong>60K+</strong>
                  <small>Tour Successes</small>
                </div>
                <div>
                  <span className="stat-icon mint">
                    <FaShieldAlt />
                  </span>
                  <strong>60%</strong>
                  <small>Positive Reviews</small>
                </div>
                <div>
                  <span className="stat-icon pink">
                    <FaHeadset />
                  </span>
                  <strong>60+</strong>
                  <small>Travel Experts</small>
                </div>
              </div>
            </div>
            <div className="why-photo">
              <img src={whyChooseImage} alt="Traveller enjoying a scenic holiday" />
            </div>
          </div>
          <div className="affiliations page-width">
            <h3>Our Affiliations</h3>
            <div className="affiliation-logos">
              {affiliations.map((logo, index) => (
                <img key={logo} src={logo} alt={`Travel affiliation ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>

        <section className="awards-section page-width">
          <div className="awards-panel">
            <SectionTitle title="Awards & Achievements" />
            <div className="awards-grid">
              {awards.map((image, index) => (
                <div className="award-item" key={image}>
                  <img src={image} alt={`Award ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="award-notes">
              <div>
                <FaStar />
                <p>
                  <strong>Instant Assistance Anytime</strong>
                  <br />
                  Our team is here to help throughout your journey.
                </p>
              </div>
              <div>
                <FaShieldAlt />
                <p>
                  <strong>Real Time Updates</strong>
                  <br />
                  Stay informed about the important details of your trip.
                </p>
              </div>
              <div>
                <FaHeadset />
                <p>
                  <strong>24/7 Customer Care</strong>
                  <br />
                  Support whenever you need a helping hand.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-width section trending-section" id="trending">
          <SectionTitle title="Trending Tours" subtitle="Find your next unforgettable adventure" />
          <Carousel
            items={trendingCards}
            visible={5}
            className="trending-carousel"
            variant="overlay"
          />
        </section>

        <section className="page-width section tour-types">
          <SectionTitle
            title="Choose Tour Types"
            subtitle="These popular destinations have a lot to offer"
          />
          <div className="tour-type-grid">
            <a href="#popular">
              <FaCompass />
              <span>Wildlife Tour</span>
            </a>
            <a href="#popular">
              <FaPlane />
              <span>Adventure Tour</span>
            </a>
            <a href="#popular">
              <FaGlobeAsia />
              <span>City Tours</span>
            </a>
            <a href="#popular">
              <FaLandmark />
              <span>Historical Tours</span>
            </a>
            <a href="#popular">
              <FaUmbrellaBeach />
              <span>Beach Tours</span>
            </a>
          </div>
        </section>

        <section className="popular-section" id="popular">
          <div className="page-width section popular-inner">
            <SectionTitle title="Popular Packages" light />
            <div className="tour-toggle">
              <button
                type="button"
                className={tourType === 'Domestic' ? 'active' : ''}
                onClick={() => setTourType('Domestic')}
              >
                Domestic
              </button>
              <button
                type="button"
                className={tourType === 'International' ? 'active' : ''}
                onClick={() => setTourType('International')}
              >
                International
              </button>
            </div>
            <Carousel items={popularPackages} visible={5} className="popular-carousel" />
            <a className="view-all" href="#search">
              View All <FaArrowRight />
            </a>
          </div>
        </section>

        <section className="testimonials-section page-width">
          <SectionTitle
            title="Testimonials"
            subtitle="Stories from travellers who explored with us"
          />
          <div className="testimonial-grid">
            {testimonials.map((item, index) => (
              <article
                className={`testimonial${activeTestimonial === index ? ' selected' : ''}`}
                key={item.name}
              >
                <div className="reviewer">
                  <span className="avatar">
                    {item.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </span>
                  <div>
                    <strong>{item.name}</strong>
                    <span className="stars">★★★★★</span>
                  </div>
                </div>
                <p>{item.text}</p>
                <span className="quote-mark">
                  <FaQuoteRight />
                </span>
              </article>
            ))}
          </div>
          <div className="testimonial-dots">
            {testimonials.map((item, index) => (
              <button
                type="button"
                key={item.name}
                aria-label={`Show ${item.name} testimonial`}
                className={activeTestimonial === index ? 'active' : ''}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </section>

        <section className="cta-wrap page-width">
          <div className="cta">
            <div>
              <span>Need Help?</span>
              <h2>Stuck Planning Your Trip?</h2>
              <p>We’ve got it covered. Our travel experts can help plan your next adventure.</p>
              <a href="#search">
                Get Started <FaArrowRight />
              </a>
            </div>
            <div className="cta-art">
              <FaGlobeAsia />
              <FaPlane />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
