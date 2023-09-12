import  React,{useEffect, useRef, useState} from "react"
import {Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../Sass/home.scss"
import { doc } from "prettier"

const IndexPage = ({location}) =>{
  
  const { t, i18n } = useTranslation();
 const isLocale = i18n.language;
  
  const imageRef=useRef(null);

  let home_image = imageRef;



  const [lastScrollTop, setLastScrollTop] = useState(0);
  let scrollVal = 30
  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
   
      if (st > lastScrollTop) {
        handleScrollDOWN();
      } else if (st < lastScrollTop) {
        handleScrollUP();
      }
      // else horizontal scroll (you can add the handling logic here)
      
      setLastScrollTop(st);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]); // Re-run effect when lastScrollTop changes

  const handleScrollDOWN = () => {
    // Logic for scrolling down
    scrollVal+=70;
  document.querySelector('.about-image-abs').style.transform=`translateY( -${scrollVal}px)`;
  document.querySelector('.about-image-abs').style.transition=`all .4s ease-in-out`;


};

  const handleScrollUP = () => {
    // Logic for scrolling up
    scrollVal-=70;
    document.querySelector('.about-image-abs').style.transform=`translateY(${scrollVal}px)`; 
    document.querySelector('.about-image-abs').style.transition=`all .4s ease-in-out`;
  };
  
  return(
  <Layout>
    <Header location={location} homePage={true} videoLink="/Dubai-Night-V5.1.mp4" />
    <Seo title={t('index.mainTitle') } />
    <main className="home-page">
      <section className="home-page__about-section">
        <div className="home-page__about-section--images">
          <StaticImage  className="about-image" src="../images/home(2).jpg" />
          <StaticImage
          id="absImage" ref={imageRef}
            className="about-image-abs"
            src="../images/home(1).jpg"
          />
        </div>
        <div className={`home-page__about-section--info ${isLocale === 'ar' ? 'rtl-class' : ''}`}>
          <h2 className={`info-heading ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="index.field1"/></h2>
          <p className={`info-desc ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="index.field2"/></p>
          <Link to="/about-us" className={`info-cta ${isLocale === 'ar' ? 'rtl-class' : ''}`}>{isLocale === "en" ? "Read More":"أقرأ المزيد"}</Link>
        </div>
      </section>
      <video
        src="/Dubai-Day-Medium-Bitrate1.mp4"
        autoPlay
        loop
        muted
        className="home-page__video-section"
      ></video>

      <section className="home-page__services-section">
        <h2 className={`home-page__services-section--heading ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="index.field3"/></h2>
        <p className={`home-page__services-section--info ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="index.field4"/></p>
        <div className="home-page__services-section--service-items">
          <div className="service-item">
            <StaticImage class="s-item-image" src="../images/service(12).png" />
            <span className={`s-item-name ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="index.field5"/></span>
          </div>
          <div className="service-item">
            <StaticImage class="s-item-image" src="../images/service(23).png" />
            <span className={`s-item-name ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="index.field6"/></span>
          </div>
          <div className="service-item">
            <StaticImage class="s-item-image" src="../images/service(22).png" />
            <span className={`s-item-name ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="index.field7"/></span>
          </div>
          <div className="service-item">
            <StaticImage class="s-item-image" src="../images/service(21).png" />
            <span className={`s-item-name ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="index.field8"/></span>
          </div>
          <div className="service-item">
            <StaticImage class="s-item-image" src="../images/service(20).png" />
            <span className={`s-item-name ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="index.field9"/></span>
          </div>
          <div className="service-item">
            <StaticImage class="s-item-image" src="../images/service(19).png" />
            <span className={`s-item-name ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="index.field10"/></span>
          </div>
          <div className="service-item">
            <StaticImage class="s-item-image" src="../images/service(18).png" />
            <span className={`s-item-name ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="index.field11"/></span>
          </div>
          <div className="service-item">
            <StaticImage class="s-item-image" src="../images/service(17).png" />
            <span className={`s-item-name ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="index.field12"/></span>
          </div>
          <div className="service-item">
            <StaticImage class="s-item-image" src="../images/service(16).png" />
            <span className={`s-item-name ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="index.field13"/></span>
          </div>
          <div className="service-item">
            <StaticImage class="s-item-image" src="../images/service(15).png" />
            <span className={`s-item-name ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="index.field14"/></span>
          </div>
          <div className="service-item">
            <StaticImage class="s-item-image" src="../images/service(14).png" />
            <span className={`s-item-name ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="index.field15"/></span>
          </div>
          <div className="service-item">
            <StaticImage class="s-item-image" src="../images/service(13).png" />
            <span className={`s-item-name ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="index.field16"/></span>
          </div>
        </div>
      </section> 
     </main>
  </Layout>
)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default IndexPage
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["translation"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
