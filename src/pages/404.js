import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import {Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import "../Sass/404.scss"
const NotFoundPage = ({location}) => {
  
  
  const { t, i18n } = useTranslation();
 const isLocale = i18n.language;
  return(
    <Layout>
    <Header pageTitle={<Trans i18nKey="not-found.mainTitle"/>} location={location} homePage={false} videoLink='/Dubai-Night-V5.1.mp4' />
    <Seo title={t('not-found.mainTitle') } />
    <div className="page-not-found">
      <h1 className={` ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="not-found.field1"/></h1>
      <h3 className={` ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="not-found.field2"/></h3>
    </div>
  </Layout>
)
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
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