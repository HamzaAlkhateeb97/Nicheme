import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import '../Sass/about-us.scss'
import Seo from '../components/seo'
import { graphql } from 'gatsby';
import {Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
export default function AboutUs({location}) {
  
  const { t, i18n } = useTranslation();
 const isLocale = i18n.language;
  return (
    <Layout>
           <Header location={location} pageTitle={<Trans i18nKey="about-us.mainTitle"/>} homePage={false} videoLink='/Dubai-Night-V5.1.mp4' />
           <Seo title={t('about-us.mainTitle') } />
        <section className='page-about-us'>
            <div className="page-about-us__content">
                <div className={`page-about-us__content--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="about-us.field1"/></div>
                <div className={`page-about-us__content--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="about-us.field2"/></div>
                <div className={`page-about-us__content--paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="about-us.field3"/></div>
            </div>
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