import React, { useEffect, useRef, useState } from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import $ from 'jquery'
import Scrollspy from 'react-scrollspy'
import smoothscroll from 'smoothscroll-polyfill'
import WOW from 'wowjs'

import Avatar01 from "../images/avatar01.jpg";
import LogoLight from "../images/logo-light.png";
import LogoDark from "../images/logo-dark.png";
import Image02 from "../images/full/02.jpg";
import Image05 from "../images/full/05.jpg";
import Image06 from "../images/full/06.jpg";
import Image09 from "../images/full/09.jpg";
import Image14 from "../images/full/14.jpg";
import Image15 from "../images/full/15.jpg";
import Image20 from "../images/full/20.jpg";
import Image34 from "../images/full/34.jpg";
import Image33 from "../images/full/33.jpg";
import TeamImage01 from "../images/team/01.jpg";
import TeamImage02 from "../images/team/02.jpg";
import TeamImage03 from "../images/team/03.jpg";
import TeamImage04 from "../images/team/04.jpg";
import TeamImage06 from "../images/team/06.jpg";
import TeamImage07 from "../images/team/07.jpg";
import LogoImage01 from "../images/logos/01.png";
import LogoImage02 from "../images/logos/02.png";
import LogoImage03 from "../images/logos/03.png";
import LogoImage04 from "../images/logos/04.png";
import LogoImage05 from "../images/logos/05.png";
import LogoImage06 from "../images/logos/06.png";
import LogoImage07 from "../images/logos/07.png";
import LogoImage08 from "../images/logos/08.png";
import Mockup01 from "../images/mockup01.png";
import Mockup02 from "../images/mockup02.png";
import Mockup03 from "../images/mockup03.png";
import Signature from "../images/signature.png";
import Thumb01 from "../images/portfolio/thumb/01.jpg";
import Thumb02 from "../images/portfolio/thumb/02.jpg";
import Thumb03 from "../images/portfolio/thumb/03.jpg";
import Thumb04 from "../images/portfolio/thumb/04.jpg";
import Thumb05 from "../images/portfolio/thumb/05.jpg";
import Thumb06 from "../images/portfolio/thumb/06.jpg";
import Thumb07 from "../images/portfolio/thumb/07.jpg";
import Thumb08 from "../images/portfolio/thumb/08.jpg";
import Thumb09 from "../images/portfolio/thumb/09.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/animate.css";
import "../styles/main.scss";

global.jQuery = require('jquery');
require('bootstrap');

const IndexPage = () => {
  useEffect(() => {
    smoothscroll.polyfill();
    const wow = new WOW.WOW();
    wow.init()
  }, []);

  const [isPrepareHeader, setPrepareHeader] = useState(false);
  const [isFixHeader, setFixHeader] = useState(false);


  const handleScroll = (e) => {
    if(e.currentTarget.scrollY > 100) {
        setPrepareHeader(true);
    } else {
        setPrepareHeader(false);
    }

    if(e.currentTarget.scrollY > 1) {
        setFixHeader(true);
    } else {
        setFixHeader(false);
    }
  }

  const handleNavMenuItemClick = (e) => {
    if(e.currentTarget.hash) {
      e.preventDefault();
      let hash = e.currentTarget.hash
      window.scroll({ top: document.querySelector(hash).offsetTop, left: 0, behavior: 'smooth' });
    }
  }

  useEventListener("scroll", handleScroll);

  return (
  <>
    {/* <section id="preloader">
        <div className="site-spinner"></div>
    </section> */}

    <div id="page-wraper">
        <div className="wrapper">

            <div id="header" className={"header " + (isFixHeader ? "header-fixed " : "") + (isPrepareHeader ? "header-prepare " : "")}>
                <div className="header-inner">
                    <div className="logo">
                        <a href="#">
                            <img src={LogoLight} />
                        </a>
                    </div>

                    <div className="nav-menu-icon">
                        <a><i className="fa fa-bars"></i></a>
                    </div>

                    <div className="nav-menu singlepage-nav">
                        <ul className="nav-menu-inner">
                            <li><a href="#intro" onClick={handleNavMenuItemClick}>Home</a></li>
                            <li>
                                <a href="#" className="menu-has-sub" onClick={handleNavMenuItemClick}>Demos <i className="fa fa-angle-down"></i></a>
                                <ul className="sub-dropdown dropdown">
                                    <li><a className="nav-external" href="index.html">Home - Main</a></li>
                                    <li><a className="nav-external" href="index2-slider_vertical.html">Home - Vertical Slider</a></li>
                                    <li><a className="nav-external" href="index3-slider_kenburns.html">Home - Kenburns Slider</a></li>
                                    <li><a className="nav-external" href="index4-static.html">Home - Static</a></li>
                                    <li><a className="nav-external" href="index5-static_parallax.html">Home - Parallax</a></li>
                                    <li><a className="nav-external" href="index6-text_rotator1.html">Home - Text Rotator 1</a></li>
                                    <li><a className="nav-external" href="index7-text_rotator2.html">Home - Text Rotator 2</a></li>
                                    <li><a className="nav-external" href="index8-video_youtube.html">Home - Video Bg</a></li>
                                    <li><a className="nav-external" href="index9-text_slider.html">Home - Text Slider</a></li>
                                    <li><a className="nav-external" href="index10-bg_slideshow.html">Home - Bg Slideshow</a></li>
                                    <li><a className="nav-external" href="index11-coming_soon.html">Home - Coming Soon Page</a></li>
                                    <li>
                                        <a className="menu-has-sub nav-external">Sub Dropdown<i className="fa fa-angle-right"></i></a>
                                        <ul className="sub-dropdown">
                                            <li><a className="nav-external" href="#">Sub Menu 1</a></li>
                                            <li><a className="nav-external" href="#">Sub Menu 2</a></li>
                                            <li><a className="nav-external" href="#">Sub Menu 3</a></li>
                                            <li><a className="nav-external" href="#">Sub Menu 4</a></li>
                                            <li><a className="nav-external" href="#">Sub Menu 5</a></li>
                                        </ul>
                                    </li>

                                </ul>
                            </li>
                            <li><a href="#about" onClick={handleNavMenuItemClick}>About</a></li>
                            <li><a href="#latest-work" onClick={handleNavMenuItemClick}>Work</a></li>
                            <li><a href="#service" onClick={handleNavMenuItemClick}>Service</a></li>
                            <li><a href="#pricing" onClick={handleNavMenuItemClick}>Pricing</a></li>
                            <li><a href="#client" onClick={handleNavMenuItemClick}>Client</a></li>
                            <li><a href="#elements" onClick={handleNavMenuItemClick}>Elements</a></li>
                            <li><a href="#contact-us" onClick={handleNavMenuItemClick}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <section id="intro" className="intro-fullscreen">
                <div className="intro-media bg-image overlay-dark20" style={{backgroundImage: "url(" + Image34 + ")"}}></div>
                <div className="intro-caption-waper dark-bg">
                    <div className="intro-full-height container">
                        <div className="intro-content">
                            <div className="intro-content-inner">
                                <div className="intro-img-circle">
                                    <img src={Avatar01} alt="avatar01" />
                                </div>
                                <h1 className="intro-title mb-10"><span className="text-light">Hi!, I am</span> John Doe</h1>
                                <h6 className="page-title-alt color mb-45">Web Designer & Developer</h6>
                                <a className="btn btn-lg btn-white scroll-down" href="#Statement1">Go My Resume</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section id="about" className="section-padding text-center">
                <div className="container mb-60">
                    <div className="row text-center">
                        <div className="col-md-6 wow slideInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                            <img src={Mockup03} style={{maxWidth: 457 + "px", width: "100%"}} alt="mockup" />
                        </div>
                        <div className="col-md-6 wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                            <div className="spacer-15"></div>
                            <h6 className="page-title-alt color mb-10">Creative Agency</h6>
                            <h2 className="page-title mb-25">Mazel <span className="text-light">One</span></h2>
                            <p className="mb-35">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo reprehenderit qui in dignissim qui blandit ea voluptate velit esse quam suscipit lobortis nisldolore eu feugiat  praesent luptatum nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril.</p>
                            <img src={Signature} alt="signature" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="about2" className="section-padding text-center gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 content-box mb-sm-30 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                            <div className="icon-top icon-black"><i className="icon icon-basic-anchor"></i></div>
                            <h5 className="features-title">We’re Creative</h5>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.</p>
                        </div>
                        <div className="col-md-4 col-sm-6 content-box mb-sm-30 wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                            <div className="icon-top icon-black"><i className="icon icon-basic-alarm"></i></div>
                            <h5 className="features-title">TWe have magic</h5>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.</p>
                        </div>
                        <div className="col-md-4 col-sm-6 content-box mb-sm-30 wow fadeIn" data-wow-delay="0.6s" data-wow-duration="2s">
                            <div className="icon-top icon-black"><i className="icon icon-basic-globe"></i></div>
                            <h5 className="features-title">Why we do it</h5>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Statement1" className="section-padding bg-image overlay-dark dark-bg text-center" data-stellar-background-ratio="0.5" data-background-img={Image33}>
                <div className="container">
                    <p className="max-width-700 lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam.</p>
                    <a className="btn btn-md btn-color">Download</a>
                </div>
            </section>

            <section id="team-people" className="section-padding text-center">
                <div className="container">
                    <h2 className="page-title">Our <span className="text-light">Team</span></h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="owl-carousel team-carousel nf-carousel-theme">

                            <div className="item">
                                <div className="team-item">
                                    <div className="team-item-img">
                                        <img src={TeamImage01} alt="" />
                                        <div className="team-item-detail">
                                            <div className="team-item-detail-inner light-color">
                                                <h5>Mitchell KAPPOS</h5>
                                                <p>To portal for some of the world's most high-value net.</p>
                                                <ul className="social">
                                                    <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="https://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></a></li>
                                                    <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                                                    <li><a href="https://www.behance.net/" target="_blank"><i className="fa fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-item-info">
                                        <h6>Mitchell KAPPOS</h6>
                                        <p className="">( Graphic Designer )</p>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="team-item">
                                    <div className="team-item-img">
                                        <img src={TeamImage03} alt="" />
                                        <div className="team-item-detail">
                                            <div className="team-item-detail-inner light-color">
                                                <h5>Leonardo da Vinci</h5>
                                                <p>To portal for some of the world's most high-value net.</p>
                                                <ul className="social">
                                                    <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="https://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></a></li>
                                                    <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                                                    <li><a href="https://www.behance.net/" target="_blank"><i className="fa fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-item-info">
                                        <h6>Leonardo da Vinci</h6>
                                        <p className="">( Front-End Dev )</p>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="team-item">
                                    <div className="team-item-img">
                                        <img src={TeamImage07} alt="" />
                                        <div className="team-item-detail">
                                            <div className="team-item-detail-inner light-color">
                                                <h5>John Doe</h5>
                                                <p>To portal for some of the world's most high-value net.</p>
                                                <ul className="social">
                                                    <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="https://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></a></li>
                                                    <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                                                    <li><a href="https://www.behance.net/" target="_blank"><i className="fa fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-item-info">
                                        <h6>John Doe</h6>
                                        <p className="">( Project Manager )</p>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="team-item">
                                    <div className="team-item-img">
                                        <img src={TeamImage04} alt="" />
                                        <div className="team-item-detail">
                                            <div className="team-item-detail-inner light-color">
                                                <h5>Michael Lee</h5>
                                                <p>To portal for some of the world's most high-value net.</p>
                                                <ul className="social">
                                                    <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="https://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></a></li>
                                                    <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                                                    <li><a href="https://www.behance.net/" target="_blank"><i className="fa fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-item-info">
                                        <h6>Michael Lee</h6>
                                        <p className="">( Web Developer )</p>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="team-item">
                                    <div className="team-item-img">
                                        <img src={TeamImage02} alt="" />
                                        <div className="team-item-detail">
                                            <div className="team-item-detail-inner light-color">
                                                <h5>Michael Lee</h5>
                                                <p>To portal for some of the world's most high-value net.</p>
                                                <ul className="social">
                                                    <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="https://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></a></li>
                                                    <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                                                    <li><a href="https://www.behance.net/" target="_blank"><i className="fa fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-item-info">
                                        <h6>Michael Lee</h6>
                                        <p className="">Photographer</p>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="team-item">
                                    <div className="team-item-img">
                                        <img src={TeamImage06} alt="" />
                                        <div className="team-item-detail">
                                            <div className="team-item-detail-inner light-color">
                                                <h5>Michael Lee</h5>
                                                <p>To portal for some of the world's most high-value net.</p>
                                                <ul className="social">
                                                    <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="https://www.dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></a></li>
                                                    <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                                                    <li><a href="https://www.behance.net/" target="_blank"><i className="fa fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-item-info">
                                        <h6>Michael Lee</h6>
                                        <p className="">Photographer</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section id="accordian_skills" className="section-padding">
                <div className="container text-center">
                    <h2 className="page-title">Skills <span className="text-light">&</span> History</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 mb-sm-30">
                            <div className="accordion">
                                <div className="accordion-title">
                                    <a href="">Jan 14, 2008 (Opening)</a>
                                </div>
                                <div className="accordion-content">
                                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.
                                </div>
                                <div className="accordion-title">
                                    <a href="">FEB 18, 2011 (The best company of the year)</a>
                                </div>
                                <div className="accordion-content">
                                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.
                                </div>
                                <div className="accordion-title">
                                    <a href="">APR 6, 2013 (Opening </a>
                                </div>
                                <div className="accordion-content">
                                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo.
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className="skillbar" data-percent="55%">
                                <h6 className="skillbar-title">Design</h6>
                                <div className="skill-bar-percent">55%</div>
                                <div className="skillbar-bar">
                                    <div className="skillbar-bar-child"></div>
                                </div>
                            </div>

                            <div className="skillbar" data-percent="80%">
                                <h6 className="skillbar-title">Development</h6>
                                <div className="skill-bar-percent">80%</div>
                                <div className="skillbar-bar">
                                    <div className="skillbar-bar-child"></div>
                                </div>
                            </div>

                            <div className="skillbar" data-percent="40%">
                                <h6 className="skillbar-title">Photography</h6>
                                <div className="skill-bar-percent">40%</div>
                                <div className="skillbar-bar">
                                    <div className="skillbar-bar-child"></div>
                                </div>
                            </div>

                            <div className="skillbar" data-percent="70%">
                                <h6 className="skillbar-title">Branding</h6>
                                <div className="skill-bar-percent">70%</div>
                                <div className="skillbar-bar">
                                    <div className="skillbar-bar-child"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="section-padding bg-image overlay-dark dark-bg text-center" data-stellar-background-ratio="0.5" data-background-img={Image06}>
                <div className="container">
                    <div className="owl-carousel testimonial-carousel nf-carousel-theme white">
                        <div className="item">
                            <div className="testimonial text-center max-width-700">
                                <div className="page-icon-sm"><i className="fa fa-quote-right"></i></div>
                                <p className="lead">I got a dummy for Christmas and started teaching myself. I got books and records and sat in front of the practising.</p>
                                <h6 className="quote-author">Jeff Dunham <span className="text-regular">( Appel Studio )</span></h6>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial text-center max-width-700">
                                <div className="page-icon-sm"><i className="fa fa-quote-right"></i></div>
                                <p className="lead">you can never eat a pet you name. And anyway, I did my first show in the third grade it would be like a ventriloquist.</p>
                                <h6 className="quote-author">Alexander Theroux <span className="text-regular">( USA )</span></h6>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial text-center max-width-700">
                                <div className="page-icon-sm"><i className="fa fa-quote-right"></i></div>
                                <p className="lead">We're not leaving here without Buster, man. Leave no crash-test dummy behind!</p>
                                <h6 className="quote-author">Adam Savage <span className="text-regular">( Artist )</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="process" className="section-padding">
                <div className="container text-center">
                    <h2 className="page-title">Work <span className="text-light">Process</span></h2>
                </div>
                <div className="container text-center">
                    <div className="row">
                        <div className="process-box col-lg-2 col-md-4 col-sm-6 col-12 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                            <div className="tipped" data-title="Step1 - Skype Interview" data-tipper-options='{"direction":"top"}'>
                                <div className="process-icon alt-icon-top"><i className="icon icon-basic-headset"></i></div>
                                <h6>Interview</h6>
                            </div>
                        </div>
                        <div className="process-box col-lg-2 col-md-4 col-sm-6 col-12 wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                            <div className="tipped" data-title="Step2 - Project Plan" data-tipper-options='{"direction":"top"}'>
                                <div className="process-icon alt-icon-top"><i className="icon icon-basic-book-pencil"></i></div>
                                <h6>Plan</h6>
                            </div>
                        </div>
                        <div className="process-box col-lg-2 col-md-4 col-sm-6 col-12 wow fadeIn" data-wow-delay="0.6s" data-wow-duration="2s">
                            <div className="tipped" data-title="Step3 - Design" data-tipper-options='{"direction":"top"}'>
                                <div className="process-icon alt-icon-top"><i className="icon icon-basic-picture-multiple"></i></div>
                                <h6>Design</h6>
                            </div>
                        </div>
                        <div className="process-box col-lg-2 col-md-4 col-sm-6 col-12 wow fadeIn" data-wow-delay="0.8s" data-wow-duration="2s">
                            <div className="tipped" data-title="Step4 - Development" data-tipper-options='{"direction":"top"}'>
                                <div className="process-icon alt-icon-top"><i className="icon icon-basic-gear"></i></div>
                                <h6>Development</h6>
                            </div>
                        </div>
                        <div className="process-box col-lg-2 col-md-4 col-sm-6 col-12 wow fadeIn" data-wow-delay="1s" data-wow-duration="2s">
                            <div className="tipped" data-title="Step5 - Testing" data-tipper-options='{"direction":"top"}'>
                                <div className="process-icon alt-icon-top"><i className="icon icon-ecommerce-graph3"></i></div>
                                <h6>Testing</h6>
                            </div>
                        </div>
                        <div className="process-box col-lg-2 col-md-4 col-sm-6 col-12 wow fadeIn" data-wow-delay="1.2s" data-wow-duration="2s">
                            <div className="tipped" data-title="Step6 - Delivery" data-tipper-options='{"direction":"top"}'>
                                <div className="process-icon alt-icon-top"><i className="icon icon-basic-anticlockwise"></i></div>
                                <h6>Delivery</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section id="latest-work" className="section-padding">
                <div className="container text-center">
                    <h2 className="page-title">Latest <span className="text-light">Work</span></h2>
                </div>
                <div className="owl-carousel content-carousel content-slider">
                    <div className="item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mb-sm-30">
                                    <img src={Mockup02} alt="" />
                                </div>
                                <div className="col-md-5 offset-md-1">
                                    <h4 className="content-title">Project name & Title</h4>
                                    <p>Cras dapibus Vivamus elementum semper nisi Aenean vulputate eleifend tellus Aenean leo ligula, porttitor eu consequat vitae Phasellus viverra nulla ut metus varius laoreet.</p>
                                    <ul className="list-inside">
                                        <li>Branding Design</li>
                                        <li>Web Design</li>
                                    </ul>
                                    <a target="_blank" href="http://google.com/" className="btn btn-md btn-black">Visit Site <i className="fa fa-external-link right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 mb-sm-30">
                                    <h4 className="content-title">Project name & Title</h4>
                                    <p>Cras dapibus Vivamus elementum semper nisi Aenean vulputate eleifend tellus Aenean leo ligula, porttitor eu consequat vitae Phasellus viverra nulla ut metus varius laoreet.</p>
                                    <ul className="list-inside">
                                        <li>Fully Responsive</li>
                                        <li>Web Design</li>
                                    </ul>
                                    <a target="_blank" href="http://google.com/" className="btn btn-md btn-black">Visit Site <i className="fa fa-external-link right"></i></a>
                                </div>
                                <div className="col-md-6 offset-md-1">
                                    <img src={Mockup01} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mb-sm-30">
                                    <img src={Mockup01} alt="" />
                                </div>
                                <div className="col-md-5 offset-md-1">
                                    <h4 className="content-title">Fully Responsive</h4>
                                    <p>Cras dapibus Vivamus elementum semper nisi Aenean vulputate eleifend tellus Aenean leo ligula, porttitor eu consequat vitae Phasellus viverra nulla ut metus varius laoreet.</p>
                                    <p>porttitor eu consequat vitae Phasellus viverra nulla ut metus varius laoreet</p>
                                    <div className="spacer-15"></div>
                                    <a target="_blank" href="http://google.com/" className="btn btn-md btn-black">Visit Site <i className="fa fa-external-link right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="section-padding-t gray-bg">
                <div className="container text-center">
                    <h2>Our <span className="text-light">Portfolio</span></h2>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <ul className="col portfolio-filter categories-filter">
                            <li><a className="categories active" data-filter="*">All</a></li>
                            <li><a className="categories" data-filter=".branding">Branding</a></li>
                            <li><a className="categories" data-filter=".creative">Creative</a></li>
                            <li><a className="categories" data-filter=".photography">Photography</a></li>
                            <li><a className="categories" data-filter=".coffee">coffee</a></li>
                        </ul>

                    </div>
                    <div className="portfolio-grid-fit row gallery-popup">
                        <div className="portfolio-item branding photography coffee">
                            <div className="portfolio-box">
                                <a className="portfolio-image-wrap">
                                    <img src={Thumb01} alt="" /></a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-tb">
                                        <div className="portfolio-caption-tb-cell">
                                            <h5>Digital Camera mockup</h5>
                                            <p>Mockup - Photography - Graphic - Branding</p>
                                            <ul className="portfolio-btn-wraper">
                                                <li>
                                                    <a className="gallery-popup-link btn btn-color" href="https://www.google.com/" title="Portfolio Image 01"><i className="fa fa-search"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.dribbble.com/"><i className="fa fa-dribbble"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-pinterest"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.behance.net/"><i className="fa fa-behance"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-box">
                                <a className="portfolio-image-wrap">
                                    <img src={Thumb02} alt="" /></a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-tb">
                                        <div className="portfolio-caption-tb-cell">
                                            <h5>Digital Camera mockup</h5>
                                            <p>Mockup - Photography - Graphic - Branding</p>
                                            <ul className="portfolio-btn-wraper">
                                                <li>
                                                    <a className="gallery-popup-link btn btn-color" href="https://www.google.com/" title="Portfolio Image 02"><i className="fa fa-search"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.dribbble.com/"><i className="fa fa-dribbble"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-pinterest"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.behance.net/"><i className="fa fa-behance"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item branding photography">
                            <div className="portfolio-box">
                                <a className="portfolio-image-wrap">
                                    <img src={Thumb03} alt="" /></a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-tb">
                                        <div className="portfolio-caption-tb-cell">
                                            <h5>Digital Camera mockup</h5>
                                            <p>Mockup - Photography - Graphic - Branding</p>
                                            <ul className="portfolio-btn-wraper">
                                                <li>
                                                    <a className="gallery-popup-link btn btn-color" href="https://www.google.com/" title="Portfolio Image 03"><i className="fa fa-search"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.dribbble.com/"><i className="fa fa-dribbble"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-pinterest"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.behance.net/"><i className="fa fa-behance"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item creative">
                            <div className="portfolio-box">
                                <a className="portfolio-image-wrap">
                                    <img src={Thumb04} alt="" /></a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-tb">
                                        <div className="portfolio-caption-tb-cell">
                                            <h5>Digital Camera mockup</h5>
                                            <p>Mockup - Photography - Graphic - Branding</p>
                                            <ul className="portfolio-btn-wraper">
                                                <li>
                                                    <a className="gallery-popup-link btn btn-color" href="https://www.google.com/" title="Portfolio Image 04"><i className="fa fa-search"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.dribbble.com/"><i className="fa fa-dribbble"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-pinterest"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.behance.net/"><i className="fa fa-behance"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item creative">
                            <div className="portfolio-box">
                                <a className="portfolio-image-wrap">
                                    <img src={Thumb05} alt="" /></a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-tb">
                                        <div className="portfolio-caption-tb-cell">
                                            <h5>Digital Camera mockup</h5>
                                            <p>Mockup - Photography - Graphic - Branding</p>
                                            <ul className="portfolio-btn-wraper">
                                                <li>
                                                    <a className="gallery-popup-link btn btn-color" href="https://www.google.com/" title="Portfolio Image 05"><i className="fa fa-search"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.dribbble.com/"><i className="fa fa-dribbble"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-pinterest"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.behance.net/"><i className="fa fa-behance"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item branding photography">
                            <div className="portfolio-box">
                                <a className="portfolio-image-wrap">
                                    <img src={Thumb06} alt="" /></a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-tb">
                                        <div className="portfolio-caption-tb-cell">
                                            <h5>Digital Camera mockup</h5>
                                            <p>Mockup - Photography - Graphic - Branding</p>
                                            <ul className="portfolio-btn-wraper">
                                                <li>
                                                    <a className="gallery-popup-link btn btn-color" href="https://www.google.com/" title="Portfolio Image 06"><i className="fa fa-search"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.dribbble.com/"><i className="fa fa-dribbble"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-pinterest"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.behance.net/"><i className="fa fa-behance"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item branding creative coffee">
                            <div className="portfolio-box">
                                <a className="portfolio-image-wrap">
                                    <img src={Thumb07} alt="" /></a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-tb">
                                        <div className="portfolio-caption-tb-cell">
                                            <h5>Digital Camera mockup</h5>
                                            <p>Mockup - Photography - Graphic - Branding</p>
                                            <ul className="portfolio-btn-wraper">
                                                <li>
                                                    <a className="gallery-popup-link btn btn-color" href="https://www.google.com/" title="Portfolio Image 07"><i className="fa fa-search"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.dribbble.com/"><i className="fa fa-dribbble"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-pinterest"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.behance.net/"><i className="fa fa-behance"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item photography">
                            <div className="portfolio-box">
                                <a className="portfolio-image-wrap">
                                    <img src={Thumb08} alt="" /></a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-tb">
                                        <div className="portfolio-caption-tb-cell">
                                            <h5>Digital Camera mockup</h5>
                                            <p>Mockup - Photography - Graphic - Branding</p>
                                            <ul className="portfolio-btn-wraper">
                                                <li>
                                                    <a className="gallery-popup-link btn btn-color" href="https://www.google.com/" title="Portfolio Image 08"><i className="fa fa-search"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.dribbble.com/"><i className="fa fa-dribbble"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-pinterest"></i></a>
                                                </li>
                                                <li>
                                                    <a className="btn btn-black" target="_blank" href="https://www.behance.net/"><i className="fa fa-behance"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="action-box2" className="action-box action-black">
                <div className="container">
                    <div className="row action-box-left">
                        <h4 className="action-box-title">Powerfull Onepage Multipurpose Responsive Template ?</h4>
                    </div>
                    <div className="action-box-right">
                        <a className="btn btn-md btn-color" href="http://google.com/" target="_blank">See More</a>
                    </div>
                </div>
            </section>

            <section id="service" className="section-padding">
                <div className="container mb-60 text-center">
                    <h2>Our <span className="text-light">Service</span></h2>
                    <p className="max-width-700 large">Excepturi Sint Occaecati Cupiditate non Provident voluptate.</p>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 pt-30 pt-sm-0">
                            <div className="content-box right wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                                <div className="icon-right"><i className="icon icon-basic-display"></i></div>
                                <h5 className="features-title">Bootstrap 4</h5>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                            </div>
                            <div className="content-box right wow fadeIn" data-wow-delay="0.2s" data-wow-duration="4s">
                                <div className="icon-right"><i className="icon icon-music-play-button"></i></div>
                                <h5 className="features-title">html5 & Youtube video</h5>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                            </div>
                            <div className="content-box right wow fadeIn" data-wow-delay="0.2s" data-wow-duration="6s">
                                <div className="icon-right"><i className="icon icon-basic-eye"></i></div>
                                <h5 className="features-title">Clean code & design</h5>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                            </div>
                            <div className="content-box right wow fadeIn" data-wow-delay="0.2s" data-wow-duration="8s">
                                <div className="icon-right"><i className="icon icon-basic-webpage-multiple"></i></div>
                                <h5 className="features-title">Unlimited layouts</h5>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 d-lg-block d-sm-none .d-md-none text-center">
                            <img src={Mockup02} alt="" />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 pt-30 pt-sm-0">
                            <div className="content-box left wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                                <div className="icon-left"><i className="icon icon-basic-gear"></i></div>
                                <h5 className="features-title">Flexible & Customizable</h5>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                            </div>
                            <div className="content-box left wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                                <div className="icon-left"><i className="icon icon-basic-cards-diamonds"></i></div>
                                <h5 className="features-title">Multi Concept & Mutli prapose Theme</h5>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                            </div>
                            <div className="content-box left wow fadeIn" data-wow-delay="0.6s" data-wow-duration="2s">
                                <div className="icon-left"><i className="icon icon-basic-sheet"></i></div>
                                <h5 className="features-title">Well Documented</h5>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                            </div>
                            <div className="content-box left wow fadeIn" data-wow-delay="0.8s" data-wow-duration="2s">
                                <div className="icon-left"><i className="icon icon-basic-headset"></i></div>
                                <h5 className="features-title">Friendly Support</h5>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae vel illum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="counter" className="section-padding bg-image overlay-dark dark-bg" data-stellar-background-ratio="0.5" data-background-img={Image14}>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 mb-sm-30">
                            <div className="alt-icon-top counter-icon"><i className="icon icon-basic-cup"></i></div>
                            <h1 className="counter-title counter-num">103</h1>
                            <h5 className="counter-sub-title">Awwards</h5>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-sm-30">
                            <div className="alt-icon-top counter-icon"><i className="icon icon-basic-heart"></i></div>
                            <h1 className="counter-title counter-num">256</h1>
                            <h5 className="counter-sub-title">client</h5>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-sm-30">
                            <div className="alt-icon-top counter-icon"><i className="icon icon-basic-case"></i></div>
                            <h1 className="counter-title counter-num">148</h1>
                            <h5 className="counter-sub-title">Project</h5>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-sm-30">
                            <div className="alt-icon-top counter-icon"><i className="icon icon-basic-lightbulb"></i></div>
                            <h1 className="counter-title counter-num">23</h1>
                            <h5 className="counter-sub-title">Team</h5>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="section-padding">
                <div className="container text-center">
                    <h2 className="page-title">Pricing <span className="text-light">Table</span></h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-sm-30 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                            <div className="pricing-box">
                                <div className="pricing-title pricing-padding-t">
                                    <h4>Regular</h4>
                                </div>
                                <div className="pricing-price pricing-padding">
                                    <p><span className="dollar">$</span><span className="pricing-price-lg">49</span><span className="pricing-price-sm">/ month</span></p>
                                </div>
                                <div className="pricing-features">
                                    <ul>
                                        <li>Full Access</li>
                                        <li>1 Domain <strong>Free</strong></li>
                                        <li>Source Files</li>
                                        <li><strong>50 User Accounts</strong></li>
                                        <li>6 Month License</li>
                                        <li>Premium Support</li>
                                    </ul>
                                </div>
                                <div className="pricing-button pricing-padding">
                                    <a className="btn btn-md btn-black" href="http://google.com/" target="_blank"><i className="fa fa-user left"></i>Sign Up</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-sm-30 wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                            <div className="pricing-box highlight">
                                <div className="pricing-title pricing-padding-t">
                                    <h4>Standard</h4>
                                </div>
                                <div className="pricing-price pricing-padding">
                                    <p><span className="dollar">$</span><span className="pricing-price-lg color">99</span><span className="pricing-price-sm">/ month</span></p>
                                </div>
                                <div className="pricing-features">
                                    <ul>
                                        <li>Full Access</li>
                                        <li>10 Domain <strong>Free</strong></li>
                                        <li>Source Files</li>
                                        <li><strong>500 User Accounts</strong></li>
                                        <li>6 Month License</li>
                                        <li>Premium Support</li>
                                    </ul>
                                </div>
                                <div className="pricing-button pricing-padding">
                                    <a className="btn btn-md btn-color" href="http://google.com/" target="_blank"><i className="fa fa-user left"></i>Sign Up</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-sm-30 wow fadeIn" data-wow-delay="0.6s" data-wow-duration="2s">
                            <div className="pricing-box">
                                <div className="pricing-title pricing-padding-t">
                                    <h4>Advanced</h4>
                                </div>
                                <div className="pricing-price pricing-padding">
                                    <p><span className="dollar">$</span><span className="pricing-price-lg">199</span><span className="pricing-price-sm">/ month</span></p>
                                </div>
                                <div className="pricing-features">
                                    <ul>
                                        <li>Full Access</li>
                                        <li>100 Domain <strong>Free</strong></li>
                                        <li>Source Files</li>
                                        <li><strong>5000 User Accounts</strong></li>
                                        <li>6 Month License</li>
                                        <li>Free Support</li>
                                    </ul>
                                </div>
                                <div className="pricing-button pricing-padding">
                                    <a className="btn btn-md btn-black" href="http://google.com/" target="_blank"><i className="fa fa-user left"></i>Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="video-action" className="section-padding bg-image overlay-dark dark-bg" data-stellar-background-ratio="0.5" data-background-img={Image02}>
                <div className="container text-center">
                    <div className="page-icon">
                        <a className="video-popup white" href="https://www.youtube.com/watch?v=bMZ3ysoCgEU"><i className="icon icon-music-play-button"></i></a>
                    </div>
                    <p className="max-width-700 lead">
                        We’re developing a number of special projects if interested,<br />
                        see the promo video
                    </p>
                    <h6 className="page-title-alt color mb-0">See Watch Video</h6>
                </div>
            </section>

            <section id="client" className="section-padding">
                <div className="container text-center">
                    <h2 className="page-title">Happy <span className="text-light">Client</span></h2>
                </div>
                <div className="container">
                    <div className="owl-carousel client-carousel">
                        <div className="item">
                            <div className="client-logo">
                                <a href="#">
                                    <img src={LogoImage01} alt="" /></a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <a href="#">
                                    <img src={LogoImage02} alt="" /></a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <a href="#">
                                    <img src={LogoImage03} alt="" /></a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <a href="#">
                                    <img src={LogoImage04} alt="" /></a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <a href="#">
                                    <img src={LogoImage05} alt="" /></a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <a href="#">
                                    <img src={LogoImage06} alt="" /></a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <a href="#">
                                    <img src={LogoImage08} alt="" /></a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <a href="#">
                                    <img src={LogoImage01} alt="" /></a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <a href="#">
                                    <img src={LogoImage02} alt="" /></a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="client-logo">
                                <a href="#">
                                    <img src={LogoImage03} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section id="elements" className="section-padding">
                <div className="container text-center">
                    <h2 className="page-title">Tabs <span className="text-light">&</span> Elements</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <ul className="nav tabs-nav alt-icon-tab text-center" role="tablist">
                            <li className="nav-item mb-30">
                                <a className="nav-link active" href="#tab-video" data-toggle="tab">
                                    <div className="alt-icon-top"><i className="icon icon-basic-video"></i></div>
                                    <h6>Video</h6>
                                </a>
                            </li>
                            <li className="nav-item mb-30">
                                <a className="nav-link" href="#tab-image-slider" data-toggle="tab">
                                    <div className="alt-icon-top"><i className="icon icon-basic-picture"></i></div>
                                    <h6>Image Slider</h6>
                                </a>
                            </li>
                            <li className="nav-item mb-30">
                                <a className="nav-link" href="#tab-icon-box" data-toggle="tab">
                                    <div className="alt-icon-top"><i className="icon icon-basic-spades"></i></div>
                                    <h6>Icon Box</h6>
                                </a>
                            </li>
                            <li className="nav-item mb-30">
                                <a className="nav-link" href="#tab-content-box" data-toggle="tab">
                                    <div className="alt-icon-top"><i className="icon icon-basic-webpage-txt"></i></div>
                                    <h6>Content Box</h6>
                                </a>
                            </li>
                            <li className="nav-item mb-30">
                                <a className="nav-link" href="#tab-cover-box" data-toggle="tab">
                                    <div className="alt-icon-top"><i className="icon icon-basic-webpage-multiple"></i></div>
                                    <h6>Cover Box</h6>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="tabs-cont row">
                        <div id="tab-video" role="tabpanel" className="col-12 tab-pane fade in active">
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="media">
                                        <iframe src="https://www.youtube.com/embed/bMZ3ysoCgEU?rel=0&amp;controls=0&amp;showinfo=0" frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-image-slider" role="tabpanel" className="col-12 tab-pane fade">
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="owl-carousel image-carousel nf-carousel-theme white">
                                        <div className="item">
                                            <img src={Image06} alt="" />
                                        </div>
                                        <div className="item">
                                            <img src={Image14} alt="" />
                                        </div>
                                        <div className="item">
                                            <img src={Image09} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-icon-box" role="tabpanel" className="col-12 tab-pane fade">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 mb-sm-30">
                                    <div className="content-box alt-left">
                                        <div className="alt-icon-left">
                                            <i className="icon icon-basic-cup"></i>
                                        </div>
                                        <h5 className="features-title">Branding Design</h5>
                                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mb-sm-30">
                                    <div className="content-box alt-left">
                                        <div className="alt-icon-left">
                                            <i className="icon icon-basic-life-buoy"></i>
                                        </div>
                                        <h5 className="features-title">Web Design</h5>
                                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mb-sm-30">
                                    <div className="content-box alt-right">
                                        <div className="alt-icon-right">
                                            <i className="icon icon-basic-lightbulb"></i>
                                        </div>
                                        <h5 className="features-title">App Development</h5>
                                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mb-sm-30">
                                    <div className="content-box alt-left">
                                        <div className="alt-icon-left">
                                            <i className="icon icon-basic-star"></i>
                                        </div>
                                        <h5 className="features-title">Graphic Design</h5>
                                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mb-sm-30">
                                    <div className="content-box alt-left">
                                        <div className="alt-icon-left">
                                            <i className="icon icon-ecommerce-graph1"></i>
                                        </div>
                                        <h5 className="features-title">Landscape Photography</h5>
                                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mb-sm-30">
                                    <div className="content-box alt-right">
                                        <div className="alt-icon-right">
                                            <i className="icon icon-music-play-button"></i>
                                        </div>
                                        <h5 className="features-title">Photo Editing</h5>
                                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-content-box" role="tabpanel" className="col-12 tab-pane fade">
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col-md-4 col-sm-6 mb-30">
                                        <div className="content-box content-box-with-bg">
                                            <div className="icon-top icon-color"><i className="icon icon-basic-accelerator"></i></div>
                                            <h5 className="features-title">Branding Design</h5>
                                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum dolorem.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 mb-30">
                                        <div className="content-box content-box-with-bg">
                                            <div className="icon-top icon-color"><i className="icon icon-basic-cup"></i></div>
                                            <h5 className="features-title">Web Design</h5>
                                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum dolorem.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 mb-30">
                                        <div className="content-box content-box-with-bg">
                                            <div className="icon-top icon-color"><i className="icon icon-basic-anchor"></i></div>
                                            <h5 className="features-title">App Development</h5>
                                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum dolorem.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 mb-30">
                                        <div className="content-box content-box-with-bg">
                                            <div className="icon-top icon-black"><i className="icon icon-basic-globe"></i></div>
                                            <h5 className="features-title">Graphic Design</h5>
                                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum dolorem.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 mb-30">
                                        <div className="content-box content-box-with-bg">
                                            <div className="icon-top icon-black"><i className="icon icon-basic-gear"></i></div>
                                            <h5 className="features-title">Photography</h5>
                                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum dolorem.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 mb-30">
                                        <div className="content-box content-box-with-bg">
                                            <div className="icon-top icon-black"><i className="icon icon-basic-paperplane"></i></div>
                                            <h5 className="features-title">Photo Editing</h5>
                                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum dolorem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-cover-box" role="tabpanel" className="col-12 tab-pane fade">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="cover-box mb-30">
                                            <figure className="cover-box-img">
                                                <img src={Thumb09} alt="cover-img" />
                                            </figure>
                                            <div className="cover-box-content">
                                                <h5>Responsive Design</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut dignissimos ea est, impedit incidunt, laboriosam maxime</p>
                                                <a className="link">Read More <i className="fa fa-angle-right right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="cover-box mb-30">
                                            <figure className="cover-box-img">
                                                <img src={Thumb06} alt="cover-img" />
                                            </figure>
                                            <div className="cover-box-content">
                                                <h5>App Development</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut dignissimos ea est, impedit incidunt, laboriosam maxime</p>
                                                <a className="link">Read More <i className="fa fa-angle-right right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="cover-box mb-30">
                                            <figure className="cover-box-img">
                                                <img src={Thumb05} alt="cover-img" />
                                            </figure>
                                            <div className="cover-box-content">
                                                <h5>Photography</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut dignissimos ea est, impedit incidunt, laboriosam maxime</p>
                                                <a className="link">Read More <i className="fa fa-angle-right right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section id="contact-us" className="section-padding dark-bg bg-image overlay-dark60" data-background-img={Image02} data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <h6 className="page-title-alt color mb-15">Wanna say hello? </h6>
                            <h2 className="page-title">Get In <span className="text-light">Touch</span></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">

                            <form id="contact" className="row contact-form" role="form">
                                <div className="col-md-12 text-center">
                                    <h5 className="successContent">
                                        <i className="fa fa-check left" style={{color: "#5cb45d"}}></i>Your message has been sent successfully.
                                    </h5>
                                    <h5 className="errorContent" style={{color: "#e1534f"}}>
                                        <i className="fa fa-exclamation-circle left"></i>There was a problem validating the form please check!
                                    </h5>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-field-wrapper">
                                        <input className="input-md form-full" id="form-name" type="text" name="form-name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-field-wrapper">
                                        <input className="input-md form-full" id="form-email" type="email" name="form-email" placeholder="Email" required />
                                    </div>
                                    <div className="form-field-wrapper">
                                        <input className="input-md form-full" id="form-subject" type="text" name="form-subject" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-0">
                                    <div className="form-field-wrapper">
                                        <textarea className="input-md form-full" id="form-message" rows="7" name="form-message" placeholder="Your Message" required></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button className="btn-contact-submit btn btn-md btn-color" type="submit" id="form-submit" name="submit">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
            <section className="map" id="map"></section>
            <section id="contct-info" className="section-padding">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-4 mb-sm-30 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="2s">
                            <div className="alt-icon-sm-top"><i className="icon icon-basic-geolocalize-05"></i></div>
                            <h5 className="features-title">Address</h5>
                            <p>
                                502, DieSachbearbeiter, Schönhauser Allee,<br />
                                167c10435 Berlin,Germany.
                            </p>
                        </div>
                        <div className="col-md-4 mb-sm-30 wow fadeIn" data-wow-delay="0.4s" data-wow-duration="2s">
                            <div className="alt-icon-sm-top"><i className="icon icon-basic-alarm"></i></div>
                            <h5 className="features-title">office Hours</h5>
                            <p>
                                Mon - Fri : 8am to 6pm<br />
                                Sat : 10am to 2pm
                            </p>
                        </div>
                        <div className="col-md-4 mb-sm-30 wow fadeIn" data-wow-delay="0.6s" data-wow-duration="2s">
                            <div className="alt-icon-sm-top"><i className="icon icon-basic-headset"></i></div>
                            <h5 className="features-title">Contact</h5>
                            <p className="contact-link">
                                <a href="mailto:yourname@domain.com"><span className="text-bold">Email :</span> yourname@domain.com</a><br />
                                <a><span className="text-bold">Call :</span> +40 (0) 012 345 6789</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer id="footer" className="footer section-padding gray-bg">
                <div className="container text-center">

                    <div className="footer-logo mb-25 wow fadeInUp" data-wow-duration="1.5s">
                        <a className="scroll-top" href="#intro">
                            <img src={LogoDark} alt="mazel" />
                        </a>
                    </div>

                    <p className="copyright mb-25">
                        &copy; 2015 <a><b>Mazel Template</b></a>. All Rights Reserved.<br />
                        Template by <a href="http://nileforest.com/" target="_blank"><b>nileforest</b></a>
                    </p>
                    <ul className="social">
                        <li>
                            <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="https://plus.google.com/" target="_blank"><i className="fa fa-google-plus"></i></a>
                        </li>
                    </ul>

                </div>
            </footer>

        </div>
    </div>
  </>
)
}

// custom Hook
function useEventListener(eventName, handler, element = window){
    // Create a ref that stores handler
    const savedHandler = useRef();
    
    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);
  
    useEffect(
      () => {
        // Make sure element supports addEventListener
        // On 
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;
        
        // Create event listener that calls handler function stored in ref
        const eventListener = event => savedHandler.current(event);
        
        // Add event listener
        element.addEventListener(eventName, eventListener);
        
        // Remove event listener on cleanup
        return () => {
          element.removeEventListener(eventName, eventListener);
        };
      },
      [eventName, element] // Re-run if eventName or element changes
    );
  };

export default IndexPage
