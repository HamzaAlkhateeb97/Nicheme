
import React,{useRef,useState,useEffect} from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Seo from "../components/seo"
import { StaticImage } from 'gatsby-plugin-image'
import '../Sass/logistics.scss'
import {Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
export default function Logistics({location}) {
  
  const { t, i18n } = useTranslation();
 const isLocale = i18n.language;
  const imageRef=useRef(null);
  let home_image = imageRef;
  let scrollVal = 30
  const [lastScrollTop, setLastScrollTop] = useState(0);
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
  document.querySelector('.servicesImageTwo').style.transform=`translateX(50%) translateY( -10%)`;
  document.querySelector('.servicesImageTwo').style.transition=`all .4s ease-in-out`;


};

  const handleScrollUP = () => {
    // Logic for scrolling up
    scrollVal-=70;
    document.querySelector('.servicesImageTwo').style.transform=`translateX(50%) translateY(10%)`; 
    document.querySelector('.servicesImageTwo').style.transition=`all .4s ease-in-out`;
  };
  return (
    <Layout>
           <Header location={location} pageTitle={<Trans i18nKey="logistics.mainTitle"/>} homePage={false} videoLink='/Dubai-Night-V5.1.mp4' />
           <Seo title={t('logistics.mainTitle') } />
          <section className='page-logistics'>
          <section className='page-logistics__sectionMain services'>
              <section className='partOne'>
              <StaticImage className='servicesImageOne ' src="../images/logistics-1.png"/> 
              <StaticImage ref={imageRef} className='servicesImageTwo' src="../images/logistics-2.png"/>
              
              </section>
              <section className='partTwo KoH'>
                  <span className={`partTwo--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="logistics.field1"/></span>
                  <span className={`partTwo--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="logistics.field2"/></span>
                  <span className={`partTwo--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="logistics.field3"/></span>
                  <span className={`partTwo--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="logistics.field4"/></span>
                  <span className={`partTwo--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="logistics.field5"/></span>
                  <span className={`partTwo--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="logistics.field6"/></span>
              </section>
           </section>
        </section>
    </Layout>
  )
}

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