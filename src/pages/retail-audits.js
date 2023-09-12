
import React,{useState,useEffect,useRef} from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import '../Sass/retail-audits.scss'
import Seo from "../components/seo"
import {Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
export default function RetailAudits({location}) {
  
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
           <Header location={location} pageTitle={<Trans i18nKey="retail-audits.mainTitle"/>} homePage={false} videoLink='/Dubai-Night-V5.1.mp4' />
           <Seo title={t('retail-audits.mainTitle') } />
          <section className='page-retail-audits'>
          <section className='page-retail-audits__sectionMain services'>
              <section className='partOne'>
              <StaticImage className='servicesImageOne' src="../images/retail-audits-1.png"/> 
                <StaticImage ref={imageRef} className='servicesImageTwo' src="../images/retail-audits-2.png"/>
              </section>
              <section className='partTwo'>
              <span className={`partTwo--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="retail-audits.field1"/></span>
              <span className='partTwo--title'></span>
              <ul className={`partTwo--list ${isLocale === 'ar' ? 'rtl-class' : ''}`}>
                <li><Trans i18nKey="retail-audits.field2"/></li>
                <li><Trans i18nKey="retail-audits.field3"/></li>
                <li><Trans i18nKey="retail-audits.field4"/></li>
                <li><Trans i18nKey="retail-audits.field5"/></li>
                <li><Trans i18nKey="retail-audits.field6"/></li>
                <li><Trans i18nKey="retail-audits.field7"/></li>
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