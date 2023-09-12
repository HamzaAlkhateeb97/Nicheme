
import React,{useState,useEffect,useRef} from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import '../Sass/retail-engagement-programs.scss'
import {Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
export default function RetailEngagementPrograms({location}) {
  
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
  document.querySelector('.servicesImageOne').style.transform=`translateY( -10%)`;
  document.querySelector('.servicesImageOne').style.transition=`all .4s ease-in-out`;


};

  const handleScrollUP = () => {
    // Logic for scrolling up
    scrollVal-=70;
    document.querySelector('.servicesImageOne').style.transform=` translateY(10%)`; 
    document.querySelector('.servicesImageOne').style.transition=`all .4s ease-in-out`;
  };
  return (
    <Layout>
           <Header location={location} pageTitle={<Trans i18nKey="retail-engagement-programs.mainTitle"/>} homePage={false} videoLink='/Dubai-Night-V5.1.mp4' />
           <Seo title={t('retail-engagement-programs.mainTitle') } />
          <section className='page-retail-engagement-programs'>
          <section className='page-retail-engagement-programs__sectionMain services'>
              <section className='partOne'>
              <StaticImage ref={imageRef} className='servicesImageOne' src="../images/retail-engagement-programs-1.png"/> 
              </section>
              <section className='partTwo'>
              <span className={`partTwo--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="retail-engagement-programs.field1"/></span>
              <span className={`partTwo--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="retail-engagement-programs.field2"/></span>
              <span className={`partTwo--title ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="retail-engagement-programs.field3"/></span>
              <span className={`partTwo--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="retail-engagement-programs.field4"/></span>
              <ul className={`partTwo--list ${isLocale === 'ar' ? 'rtl-class' : ''}`}>
                <li><Trans i18nKey="retail-engagement-programs.field5"/></li>
                <li><Trans i18nKey="retail-engagement-programs.field6"/></li>

              </ul>
              <span className={`partTwo--title ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="retail-engagement-programs.field7"/></span>
              <ul className={`partTwo--list ${isLocale === 'ar' ? 'rtl-class' : ''}`}>
                <li><Trans i18nKey="retail-engagement-programs.field8"/></li>
                <li><Trans i18nKey="retail-engagement-programs.field9"/></li>
                <li><Trans i18nKey="retail-engagement-programs.field10"/></li>
                <li><Trans i18nKey="retail-engagement-programs.field11"/></li>

              </ul>
              <span className={`partTwo--title ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="retail-engagement-programs.field12"/></span>
              <span className={`partTwo--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="retail-engagement-programs.field13"/></span>
              <ul className={`partTwo--list ${isLocale === 'ar' ? 'rtl-class' : ''}`}>
                <li><Trans i18nKey="retail-engagement-programs.field14"/></li>
                <li><Trans i18nKey="retail-engagement-programs.field15"/></li>
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