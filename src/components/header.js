import {Link, Trans,useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import  React,{useEffect} from "react"
import {  navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
function goHome(){

  window.location.href='/';
}
function handleClick(){
document.querySelector('#nav_element').classList.toggle('active-nav')
document.querySelector('#nav_links').classList.toggle('active-links')
}
const Header = ( props ) => {
const { originalPath} = useI18next();
 const { t, i18n } = useTranslation();
 const isLocale = i18n.language;
  let location = props.location || { pathname: '/' }
  
  useEffect(() => {
    
  window.addEventListener('scroll',()=>{
if(window.scrollY > 0){
    document.querySelector('#nav_container').classList.add('shrink-nav')
}
else{
  document.querySelector('#nav_container').classList.remove('shrink-nav')
}
  })
    return () => {
     window.removeEventListener('scroll',()=>{

     
        })
    }
  }, [])
  
let videoURL = props.videoLink;
let secondary = props.homePage
let pagetitle = props.pageTitle

  return(
  <header
  className="header"
  >
<video className="header__video" src={`${videoURL}`} poster="/poster.jpg" loop autoPlay muted></video>
    <nav id="nav_container" className="header__navbar">
      <Link className="header__navbar--logo" to="/">
      <StaticImage onClick={()=>{window.location.href='/index'}}  src='../images/logo.png'/>
      </Link>
      <div className={`header__navbar--links ${isLocale === 'ar' ? 'row-reverse-class' : ''}`}>
        <Link to='/' className={`nav-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="navbar.field1"/></Link>
        <Link to='/about-us' className={`nav-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="navbar.field2"/></Link>
        <Link to='/clients' className={`nav-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="navbar.field4"/></Link>
        <div id='service_links' className={`nav-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}> <span className="s-link-btn"><Trans i18nKey="navbar.field5"/></span>
        <div className={`s-links ${isLocale === "ar"? "rtl-class":""} `}>
          <Link to="/branding-advertising" className={`s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="branding-advertising.mainTitle"/></Link>
          <Link to="/digital-marketing" className={`s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="digital-marketing.mainTitle"/></Link>
          <Link to="/distribution" className={`s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="distribution.mainTitle"/></Link>
          <Link to="/installation-of-fixtures-and-fittings" className={`s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="installation-of-fixtures-and-fittings.mainTitle"/></Link>
          <Link to="/logistics" className={`s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="logistics.mainTitle"/></Link>
          <Link to="/merchandising" className={`s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="merchandising.mainTitle"/></Link>
          <Link to="/online-reporting" className={`s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="online-reporting.mainTitle"/></Link>
          <Link to="/promotions-activations" className={`s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="promotions-activations.mainTitle"/></Link>
          <Link to="/retail-audits" className={`s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="retail-audits.mainTitle"/></Link>
          <Link to="/retail-engagement-programs" className={`s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="retail-engagement-programs.mainTitle"/></Link>
          <Link to="/retail-shelving" className={`s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="retail-shelving.mainTitle"/></Link>
          <Link to="/video-design" className={`s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="video-design.mainTitle"/></Link>
          <Link to="/vehicle-tracking" className={`s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="vehicle-tracking.mainTitle"/></Link>
          
        </div>
        
        </div>
        <Link to='/contact-us' className={`nav-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="navbar.field3"/></Link>
        
      </div>
      <div id="nav_element" className="header__navbar--mobile-links">
        <div id="nav_links" className={`links-container ${isLocale === "ar" ? "rtl-class":""}`}>
        <Link to='/' className={`m-nav-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="navbar.field1"/></Link>
        <Link to='/about-us' className={`m-nav-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="navbar.field2"/></Link>
        <Link to='/clients' className={`m-nav-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="navbar.field4"/></Link>
        <div>
        <input type="checkbox" className="m-links-key" name="m_links" id="m_links" style={{display: 'none'}} />
        <label htmlFor="m_links" className={`m-nav-link ${isLocale === 'ar' ? 'rtl-class' : ''}`} ><Trans i18nKey="navbar.field5"/></label>
        <div className="m-links-content">
          <Link to="/branding-advertising" className={`m-s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="branding-advertising.mainTitle"/></Link>
          <Link to="/digital-marketing" className={`m-s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="digital-marketing.mainTitle"/></Link>
          <Link to="/distribution" className={`m-s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="distribution.mainTitle"/></Link>
          <Link to="/installation-of-fixtures-and-fittings" className={`m-s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="installation-of-fixtures-and-fittings.mainTitle"/></Link>
          <Link to="/logistics" className={`m-s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="logistics.mainTitle"/></Link>
          <Link to="/merchandising" className={`m-s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="merchandising.mainTitle"/></Link>
          <Link to="/online-reporting" className={`m-s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="online-reporting.mainTitle"/></Link>
          <Link to="/promotions-activations" className={`m-s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="promotions-activations.mainTitle"/></Link>
          <Link to="/retail-audits" className={`m-s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="retail-audits.mainTitle"/></Link>
          <Link to="/retail-engagement-programs" className={`m-s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="retail-engagement-programs.mainTitle"/></Link>
          <Link to="/retail-shelving" className={`m-s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="retail-shelving.mainTitle"/></Link>
          <Link to="/video-design" className={`m-s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="video-design.mainTitle"/></Link>
          <Link to="/vehicle-tracking" className={`m-s-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="vehicle-tracking.mainTitle"/></Link>
        </div>
        </div>
        <Link to='/contact-us' className={`m-nav-link ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="navbar.field3"/></Link>
        
        <span className={`m-nav-link`}>
        <Link  className={`switch-language ${isLocale === 'en' ? 'rtl-class' : ''}`} to={originalPath} language={isLocale==="ar"?"en":"ar"}>{isLocale==="ar"?"English":"العربية"}</Link>
        </span>
        
       
      
      
        <p className={`m-nav-info  ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="contact-us.field1"/></p>
        <p className={`m-nav-info  ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="contact-us.field2"/></p>
        <p className={`m-nav-info  ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="contact-us.field3"/></p>
        <button onClick={handleClick} className="m-nav-icon"><i class="fa fa-xmark" aria-hidden="true"></i></button>
      </div>
      </div>
      <div className="header__navbar--lang-ham">
      
        <span className={`nav-link lang`}>
          <Link className={`switch-language ${isLocale === 'en' ? 'rtl-class' : ''}`}  to={originalPath} language={isLocale==="ar"?"en":"ar"}>{isLocale==="ar"?"English":"العربية"}</Link>
        </span>
        <button onClick={handleClick} className="nav-icon"><i class="fa fa-bars" aria-hidden="true"></i></button>
      </div>
    </nav>
   <div className="header__hero">
    {secondary && (
          <>
          <p className={`header__hero--slug ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="header.field1" /></p>
          <h1 className={`header__hero--heading ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="header.field2" /></h1>
          <Link to='/contact-us' className={`header__hero--cta ${isLocale === 'ar' ? 'rtl-class' : ''}`}><Trans i18nKey="header.field3" /></Link>
          </>
     )}

   
   {pagetitle && (<>
   
    <h1 className={`header__hero--heading heading-2 ${isLocale === 'ar' ? 'rtl-class' : ''}`}>{props.pageTitle}</h1>
   </>)}

   </div>

  </header>
  )
}

export default Header


// this should do it!
