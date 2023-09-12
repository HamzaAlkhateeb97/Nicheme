/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import  React,{useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from '@reach/router'
import { StaticImage } from "gatsby-plugin-image"
// import Header from "./header"
import "./layout.css"
import "../Sass/layout.scss"
import '../Sass/header.scss'
import "../Sass/footer.scss"
import "../Sass/services-main.scss"
import logo from '../images/favicon.png';
import {Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';

const Layout = ({ children }, props) => {
  
  const { t, i18n } = useTranslation();
 const isLocale = i18n.language;
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const location = useLocation()
  useEffect(() => {

 
    setTimeout(()=>{

      document.querySelector('.layout-container').classList.add('active-layer')

    },500)
    return () => {
      document.querySelector('.layout-container').classList.remove('active-layer')
    }
  }, [location.state])

  return (
    <>
  <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
  
  <main className="layout-container">
        <div className="layout-container__layer-1"></div>
        <div className="layout-container__layer-2">
          <img className="layout-container__layer-2--logo" src={logo}/>
        </div>
        {children}
        
        </main>       
       <section className="pre-footer">
       <video className="header__video" src={`/Distribution1.mp4`} loop autoPlay muted></video>
   <div className="header__hero">
          <p className={`header__hero--slug ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="header.field1" /></p>
          <h1 className={`header__hero--heading ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="header.field2" /></h1>
          <Link to='/contact-us' className={`header__hero--cta ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="header.field3" /></Link>
   </div>
       </section>
       <footer className="footer">
        <div className="footer__social-icons">
          <Link className="footer__social-icons--social-icon" to='https://www.facebook.com/Niche.MME'><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></Link>
          <Link className="footer__social-icons--social-icon" to='https://www.linkedin.com/company/niche-marketing-management/'><i class="fa-brands fa-linkedin" aria-hidden="true"></i></Link>
          <Link className="footer__social-icons--social-icon" to='https://www.instagram.com/niche_marketing_management'><i class="fa-brands fa-instagram" aria-hidden="true"></i></Link>
        </div>
        <p className={`footer__copyright ${isLocale === "ar"? "rtl-class":""} `}><Trans i18nKey="footer.field1" /></p>
       </footer>
    </>
  )
}

export default Layout
