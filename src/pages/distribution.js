
import React, {useState,useEffect,useRef} from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Seo from "../components/seo"
import { StaticImage } from 'gatsby-plugin-image'
import '../Sass/distribution.scss'
import {Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
export default function Distribution({location}) {
  
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
           <Header location={location} pageTitle={<Trans i18nKey="distribution.mainTitle"/>} homePage={false} videoLink='/Dubai-Night-V5.1.mp4' />
           <Seo title={t('distribution.mainTitle') } />
          <section className='page-distribution'>
          <section className={`page-distribution__sectionOne ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="distribution.field1"/></section>
           <section className='page-distribution__sectionMain services'>
              <section className='partOne'>
              <StaticImage className='servicesImageOne' src="../images/distribution-1.png"/> 
              <StaticImage ref={imageRef} className='servicesImageTwo' src="../images/distribution-2.png"/>
              </section>
              <section className={`partTwo ${isLocale === 'ar' ? 'rtl-class' : ''}`}>
                  <h3 className={`partTwo--title ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="distribution.field2"/></h3>
                  <ul className='partTwo--list'>
                    <li><Trans i18nKey="distribution.field3"/></li>
                    <li><Trans i18nKey="distribution.field4"/></li>
                    <li><Trans i18nKey="distribution.field5"/></li>
                  </ul>
                  <h3 className={`partTwo--title ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="distribution.field6"/></h3>
                  <ul className='partTwo--list'>
                  <li><Trans i18nKey="distribution.field7"/></li>
                  <li><Trans i18nKey="distribution.field8"/></li>
                  </ul>
                  <h3 className={`partTwo--title ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="distribution.field9"/></h3>
                  <ul className='partTwo--list'>
                  <li><Trans i18nKey="distribution.field10"/></li>
                  <li><Trans i18nKey="distribution.field11"/></li>
                  <li><Trans i18nKey="distribution.field12"/></li>
                  </ul>
                  <h3 className={`partTwo--title ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="distribution.field13"/></h3>
                  <ul className='partTwo--list'>
                    <li><Trans i18nKey="distribution.field14"/></li>
                    <li><Trans i18nKey="distribution.field15"/></li>
                    <li><Trans i18nKey="distribution.field16"/></li>
                  </ul>
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