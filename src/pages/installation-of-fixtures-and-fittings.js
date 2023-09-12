
import React,{useState,useRef,useEffect} from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import '../Sass/installation-of-fixtures-and-fittings.scss'
import {Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';

export default function InstallationOfFixturesAndFittings({location}) {
  
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
           <Header location={location} pageTitle={<Trans i18nKey="installation-of-fixtures-and-fittings.mainTitle"/>} homePage={false} videoLink='/Dubai-Night-V5.1.mp4' />
               <Seo title={t('installation-of-fixtures-and-fittings.mainTitle') } />
          <section className='page-installation-of-fixtures-and-fittings'>
            <section className='page-installation-of-fixtures-and-fittings__sectionMain services'>
                <section className='partOne'>
                <StaticImage className='servicesImageOne' src="../images/installation-of-fixtures-and-fittings-1.png"/> 
                <StaticImage ref={imageRef} className='servicesImageTwo' src="../images/installation-of-fixtures-and-fittings-2.png"/>
                </section>
                <section className='partTwo special'>
                    <span className={`partTwo--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="installation-of-fixtures-and-fittings.field1"/></span>
                    <span className={`partTwo--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="installation-of-fixtures-and-fittings.field2"/></span>
                    <span className={`partTwo--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="installation-of-fixtures-and-fittings.field3"/></span>
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