
import Header from '../components/header'
import * as React from "react"
import {Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import "../Sass/contact.scss"
import Seo from "../components/seo"
const handleSubmit = async (event) => {
  event.preventDefault()
  const form = event.target
  const data = new FormData(form)
  const response = await fetch('https://nicheme.com/functions/send-emails.php', {
    method: 'POST',
    body: data,
  })
  if (response.ok) {
    alert('Thank You For Your Message! Our Team Will Contact You Soon!')
  } else {
    alert('There Was A Problem Sending Your Message. Please Try Again')
  }
}
export default function Contact({location}) {
  
  const { t, i18n } = useTranslation();
 const isLocale = i18n.language;
  return(
  <Layout>
  <Header location={location} homePage={false} pageTitle={<Trans i18nKey="contact-us.mainTitle"/>} videoLink='/Dubai-Night-V5.1.mp4'/>
  <Seo title={t('contact-us.mainTitle') } />
  <main className="contact-us">
<div className="contact-us__info">
    <p className={`contact-us__info--item ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="contact-us.field1"/></p>
    <p className={`contact-us__info--item ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="contact-us.field2"/></p>
    <p className={`contact-us__info--item ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="contact-us.field3"/></p>
</div>
<form onSubmit={handleSubmit} className={`contact-us__contact-form ${isLocale === 'ar' ? 'rtl-class' : ''}`}>
<label  className='contact-us__contact-form--label' htmlFor="name">{isLocale === 'en' ? 'Your Name' : 'أسمك'}</label>
<input className='contact-us__contact-form--input' type="text" name='name' id='name'/>
<label className='contact-us__contact-form--label' htmlFor="email">{isLocale === 'en' ? 'Your Email' : 'بريدك الإلكتروني'}</label>
<input className='contact-us__contact-form--input' type="text" id='email' name='email' />
<label className='contact-us__contact-form--label' htmlFor="subject">{isLocale === 'en' ? 'Subject' : 'الموضوع'}</label>
<input className='contact-us__contact-form--input' type="text" name='subject' id='subject' />
<label className='contact-us__contact-form--label' htmlFor="message">{isLocale === 'en' ? 'Your Message' : 'رسالتك'}</label>
<textarea className='contact-us__contact-form--input' cols="30" rows="5" name='message' id='message'></textarea>
<input className={`contact-us__contact-form--submit ${isLocale === 'ar' ? 'rtl-class' : ''}`} type="submit" value={isLocale === 'en' ? 'SUBMIT' : 'إرسال'}/>
</form>
<div  className='contact-us__map'>
<iframe
      
        style={{"border": 0}}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2165124677913!2d55.32774781494919!3d25.263301083865457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434da7042925%3A0x9bb28add047886cd!2sNiche%20Marketing%20Management!5e0!3m2!1sen!2sae!4v1619959321400!5m2!1sen!2sae"
        width="100%"
        height="450"
        allowfullscreen="allowfullscreen"
      ></iframe>
      </div>
  </main>
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


