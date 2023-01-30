import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionOne from "@/components/home/SectionOne";
import SectionTwo from "@/components/home/SectionTwo";
import SectionThree from "@/components/home/SectionThree";
import SectionFour from "@/components/home/SectionFour";
import SectionFive from "@/components/home/SectionFive";
import SectionSix from "@/components/home/SectionSix";
import SectionSeven from "@/components/home/SectionSeven";

export default function Homepage(){
    return (
        <div className="animsition">
                <section className="menu">
                    <div className="menu__inner">
                        <button className="menu__close" type="button">
                            <svg width="24" height="24">
                                <use xlinkHref="#close"></use>
                            </svg>
                            <span className="visually-hidden">Close menu</span>
                        </button>
                        <ul className="menu__lang-switcher lang-switcher lang-switcher--upper lang-switcher--menu">
                            <li className="lang-switcher__item">
                                <a className="lang-switcher__link lang-switcher__link--current">Eng</a>
                            </li>
                            <li className="lang-switcher__item">
                                <a className="lang-switcher__link" href="#">Fra</a>
                            </li>
                            <li className="lang-switcher__item">
                                <a className="lang-switcher__link" href="#">Ger</a>
                            </li>
                        </ul>
                        <div className="menu__wrapper">
                            <ul className="menu__list">
                                <li className="menu__item menu__item--current">
                                    <a className="menu__link __js_menu-dropdown-link">Home</a>
                                    <div className="menu__dropdown">
                                        <ul className="menu__sublist">
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="home-default.html">Home
                                                    Default</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="home-modern.html">Home
                                                    Modern</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="home-parallax.html">Home
                                                    Parallax</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="home-technical-drawing.html">Home Technical Drawing</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="home-left-menu.html">Home
                                                    Left Menu</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink menu__sublink--current">Home Visual</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="home-default-dark.html">Home Default Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="home-modern-dark.html">Home Modern Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="home-parallax-dark.html">Home Parallax Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="home-technical-drawing-dark.html">Home Technical Drawing
                                                    Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="home-left-menu-dark.html">Home Left Menu Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="home-visual-dark.html">Home Visual Dark</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link __js_menu-dropdown-link"
                                       href="about-default-dark.html">About</a>
                                    <div className="menu__dropdown">
                                        <ul className="menu__sublist">
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="about-default.html">About
                                                    Default</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="about-universal.html">About Universal</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="about-visual.html">About
                                                    Visual</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="about-default-dark.html">About Default Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="about-universal-dark.html">About Universal Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="about-visual-dark.html">About Visual Dark</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link __js_menu-dropdown-link"
                                       href="works-grid-dark.html">Works</a>
                                    <div className="menu__dropdown">
                                        <ul className="menu__sublist">
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="works-grid.html">Works
                                                    Grid</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="works-grid-2.html">Works
                                                    Grid 2</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="works-grid-3.html">Works
                                                    Grid 3</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="works-masonry.html">Works
                                                    Masonry</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="works-listing.html">Works
                                                    Listing</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="works-carousel-1.html">Works Carousel 1</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="works-carousel-2.html">Works Carousel 2</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="single-project-standart.html">Single Project Standart</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="single-project-sidebar.html">Single Project Sidebar</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="single-project-minimalism.html">Single Project Minimalism</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="works-grid-dark.html">Works Grid Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="works-grid-2-dark.html">Works Grid 2 Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="works-grid-3-dark.html">Works Grid 3 Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="works-masonry-dark.html">Works Masonry Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="works-listing-dark.html">Works Listing Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="works-carousel-1-dark.html">Works Carousel 1 Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="works-carousel-2-dark.html">Works Carousel 2 Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="single-project-standart-dark.html">Single Project Standart
                                                    Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="single-project-sidebar-dark.html">Single Project Sidebar
                                                    Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="single-project-minimalism-dark.html">Single Project Minimalism
                                                    Dark</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link __js_menu-dropdown-link"
                                       href="news-grid-dark.html">News</a>
                                    <div className="menu__dropdown">
                                        <ul className="menu__sublist">
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="news-grid.html">News
                                                    Grid</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="news-grid-2.html">News
                                                    Grid 2</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="news-masonry.html">News
                                                    Masonry</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="news-sidebar.html">News
                                                    Sidebar</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="single-post.html">Single
                                                    Post</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="single-post-sidebar.html">Single Post Sidebar</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="news-grid-dark.html">News
                                                    Grid Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="news-grid-2-dark.html">News Grid 2 Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="news-masonry-dark.html">News Masonry Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="news-sidebar-dark.html">News Sidebar Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="single-post-dark.html">Single Post Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="single-post-sidebar-dark.html">Single Post Sidebar Dark</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link __js_menu-dropdown-link"
                                       href="services-dark.html">Pages</a>
                                    <div className="menu__dropdown">
                                        <ul className="menu__sublist">
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="services.html">Services</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="service-detail.html">Service
                                                    Detail</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="pricing.html">Pricing</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="team.html">Team</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="contact.html">Contact</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="contact-2.html">Contact
                                                    2</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="404-error.html">404
                                                    Error</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="coming-soon.html">Coming
                                                    Soon</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="services-dark.html">Services
                                                    Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="service-detail-dark.html">Service Detail Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="pricing-dark.html">Pricing
                                                    Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="team-dark.html">Team
                                                    Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="contact-dark.html">Contact
                                                    Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="contact-2-dark.html">Contact
                                                    2 Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link" href="404-error-dark.html">404
                                                    Error Dark</a>
                                            </li>
                                            <li className="menu__subitem">
                                                <a className="menu__sublink animsition-link"
                                                   href="coming-soon-dark.html">Coming Soon Dark</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="menu__bottom">
                            <div className="menu__copy">
                                © 2021 <span>Liarch.</span> All Rights Reserved.
                                <br/>Development by <span>Paul Studio</span>
                            </div>
                            <ul className="menu__social social">
                                <li className="social__item">
                                    <a className="social__link" href="#" target="_blank">
                                        <svg width="18" height="18" aria-label="twitter icon">
                                            <use xlinkHref="#twitter"></use>
                                        </svg>
                                        <span className="visually-hidden">Twitter</span>
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a className="social__link" href="#" target="_blank">
                                        <svg width="18" height="18" aria-label="facebook icon">
                                            <use xlinkHref="#facebook"></use>
                                        </svg>
                                        <span className="visually-hidden">Facebook</span>
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a className="social__link" href="#" target="_blank">
                                        <svg width="18" height="18" aria-label="instagram icon">
                                            <use xlinkHref="#instagram"></use>
                                        </svg>
                                        <span className="visually-hidden">Instagram</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <main>
                    <SectionOne />
                    <SectionTwo />
                    <SectionThree />
                    <SectionFour />
                    <SectionFive />
                    <SectionSix />
                    <SectionSeven />
                </main>
            </div>
    )
}