import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import '../Sass/clients.scss'
import Seo from "../components/seo"
import { StaticImage } from 'gatsby-plugin-image'
import {Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
export default function Clients({location}) {
  const { t, i18n } = useTranslation();
 const isLocale = i18n.language;
  return (
    <Layout>
         <Header location={location} pageTitle={<Trans i18nKey="clients.mainTitle"/>} homePage={false} videoLink='/Dubai-Night-V5.1.mp4' />
         <Seo title={t('clients.mainTitle') } />
        <section className='page-clients'>
          <section className='page-clients__images'>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(1).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(2).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(3).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(4).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(5).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(6).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(7).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(8).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(9).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(10).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(11).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(12).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(13).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(14).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(15).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(16).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(17).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(18).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(19).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(20).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(21).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(22).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(23).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(24).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(25).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(26).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(27).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(28).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(29).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(30).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(31).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(32).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(33).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(34).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(35).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(36).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(37).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(38).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(39).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(40).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(41).png' alt=''/>
          <StaticImage quality={100} className='page-clients__images--logo' src='../images/client-image(42).png' alt=''/>
                  
            
          </section>
          <section className='page-clients__content'>
            <div className={`page-clients__content--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="clients.field1"/></div>
            <div className={`page-clients__content--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="clients.field2"/></div>
            <div className={`page-clients__content--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="clients.field3"/></div>
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