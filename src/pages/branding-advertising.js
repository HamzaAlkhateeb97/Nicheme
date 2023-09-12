import React from 'react'
import Layout from '../components/layout'
import '../Sass/branding-advertising.scss'
import Header from '../components/header'
import Seo from "../components/seo"
import { StaticImage } from 'gatsby-plugin-image'
import {Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)
    const response = await fetch('https://nicheme.com/functions/manifest-email.php', {
      method: 'POST',
      body: data,
    })
    if (response.ok) {
      alert('Thank You For Your Message! Our Team Will Contact You Soon!')
    } else {
      alert('There Was A Problem Sending Your Message. Please Try Again')
    }
  }
export default function BrandingAdvertising({location}) {
  
  const { t, i18n } = useTranslation();
 const isLocale = i18n.language;
  return (
    <Layout>
     <Header location={location} pageTitle={<Trans i18nKey="branding-advertising.mainTitle"/>} homePage={false} videoLink='/Dubai-Night-V5.1.mp4' />
     <Seo title={t('branding-advertising.mainTitle') } />
        <section className='page-branding-advertising'>
            <section className='page-branding-advertising__sectionOne'>
                <div className={`page-branding-advertising__sectionOne--title ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="branding-advertising.field1"/></div>
            </section>
            <section className='page-branding-advertising__sectionTwo'>
                <div className='page-branding-advertising__sectionTwo--image'>
                <StaticImage className='card-image' src='../images/branding-img-main.png'/>
                </div>
                <div className='page-branding-advertising__sectionTwo--text'>
                    <span className={`text-title ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="branding-advertising.field2"/></span>
                    <span className={`text-paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="branding-advertising.field3"/></span>
                </div>
            </section>
            <section className={`page-branding-advertising__sectionThree ${isLocale === 'ar' ? 'rtl-class' : ''}`}>
                <div className='page-branding-advertising__sectionThree--card'>
                    <StaticImage className='card-image' src='../images/branding-img-1.png'/>
                    <span className={`card-title ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="branding-advertising.field4"/></span>
                    <span className={`card-paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="branding-advertising.field5"/></span>
                </div>
                <div className='page-branding-advertising__sectionThree--card'>
                    <StaticImage className='card-image' src='../images/branding-img-2.png'/>
                    <span className={`card-title ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="branding-advertising.field6"/></span>
                    <span className={`card-paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="branding-advertising.field7"/></span>
                </div>
                <div className='page-branding-advertising__sectionThree--card'>
                    <StaticImage className='card-image' src='../images/branding-img-3.png'/>
                    <span className={`card-title ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="branding-advertising.field8"/></span>
                    <span className={`card-paragraph ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="branding-advertising.field9"/></span>
                </div>
            </section>
            <section className='page-branding-advertising__sectionFour'>
                <div className={`page-branding-advertising__sectionFour--title ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="branding-advertising.field10"/></div>
                <form onSubmit={handleSubmit} className={`page-branding-advertising__sectionFour--form ${isLocale === 'ar' ? 'rtl-class' : ''}`}>
                    <label htmlFor="name"> {isLocale === 'en' ? 'Your Name' : 'أسمك'}</label>
                    <input type="text" id="name" name="name"/>
                    
                    <label htmlFor="phone">{isLocale === 'en' ? 'Your Phone Number' : 'رقم هاتفك'}</label>
                    <input type="text" id="phone" name="phone"/>
                    
                    <label htmlFor="email">{isLocale === 'en' ? 'Your Email' : 'بريدك الإلكتروني'}</label>
                    <input type="email" id="email" name="email"/>
                    
                    <label htmlFor="subject">{isLocale === 'en' ? 'Subject' : 'الموضوع'}</label>
                    <input type="text" id="subject" name="subject"/>
                    
                    <label htmlFor="project-details">{isLocale === 'en' ? 'Project details (optional)' : 'تفاصيل المشروع (اختياري)'}</label>
                    <textarea id="project-details" name="project-details"/>
                    
                    <input className={`submit ${isLocale === 'ar' ? 'rtl-class' : ''}`} type="submit" value={isLocale === 'en' ? 'SUBMIT' : 'إرسال'}/>
                </form>
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