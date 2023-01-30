export default function SectionSix(){
    return (<div>...</div>)
    return (
        <div className="bg-wrapper">
            <section className="about__our-experts our-experts our-experts--mt-negative" data-aos="fade">
                <div className="our-experts__inner container">
                    <header className="our-experts__header">
                        <h2 className="our-experts__heading heading">our experts</h2>
                        <div className="our-experts__text">At Liarch studio, we’re a group with top
                            architects from building, interior, design, photography, etc. to help consult &
                            build your dream become perfect
                        </div>
                    </header>
                    <div className="our-experts__list">
                        <div className="our-experts__item team-item">
                            <div className="team-item__photo">
                                <img src="assets/img/team/item-1.png" alt=""/>
                            </div>
                            <a className="team-item__name" href="#" target="_blank">Stephan Bowie</a>
                            <div className="team-item__position">CEO Founder</div>
                        </div>
                        <div className="our-experts__item team-item">
                            <div className="team-item__photo">
                                <img src="assets/img/team/item-2.png" alt=""/>
                            </div>
                            <a className="team-item__name" href="#" target="_blank">robert downey jr</a>
                            <div className="team-item__position">CO Founder</div>
                        </div>
                        <div className="our-experts__item team-item">
                            <div className="team-item__photo">
                                <img src="assets/img/team/item-3.png" alt=""/>
                            </div>
                            <a className="team-item__name" href="#" target="_blank">laura lorence</a>
                            <div className="team-item__position">Project Management</div>
                        </div>
                        <div className="our-experts__item team-item">
                            <div className="team-item__photo">
                                <img src="assets/img/team/item-4.png" alt=""/>
                            </div>
                            <a className="team-item__name" href="#" target="_blank">david de berg</a>
                            <div className="team-item__position">Lead of Technical</div>
                        </div>
                        <div className="our-experts__item team-item">
                            <div className="team-item__photo">
                                <img src="assets/img/team/item-5.png" alt=""/>
                            </div>
                            <a className="team-item__name" href="#" target="_blank">elena stephan</a>
                            <div className="team-item__position">Architect</div>
                        </div>
                        <div className="our-experts__item team-item">
                            <div className="team-item__photo">
                                <img src="assets/img/team/item-6.png" alt=""/>
                            </div>
                            <a className="team-item__name" href="#" target="_blank">andy robertson</a>
                            <div className="team-item__position">Architect</div>
                        </div>
                        <a className="our-experts__item team-item team-item--join" href="#" target="_blank">
                            <div className="team-item__photo">
                                <svg width="67" height="45">
                                    <use xlinkHref="#users"></use>
                                </svg>
                                <p>become
                                    <br/> our member
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="our-experts__line"></div>
                </div>
            </section>
            <section className="pricing pricing--section">
                <div className="container">
                    <h2 className="pricing__title">Pricing & Plan</h2>
                    <div className="pricing__subtitle">
                        At Liarch studio, we’re a group with top architects from building, interior, design,
                        photography, etc. to help consult & build your dream become perfect
                    </div>
                </div>
                <div className="container pricing__container">
                    <div className="pricing__slider-container">
                        <div className="pricing__slider swiper-container __js_slider-price">
                            <div className="pricing__wrapper swiper-wrapper">
                                <div className="pricing-item swiper-slide">
                                    <div className="pricing-item__wrapper">
                                        <div className="pricing-item__top">
                                            <div className="pricing-item__plan">basic plan</div>
                                            <div className="pricing-item__caption"></div>
                                        </div>
                                        <div className="pricing-item__price">
                                            <sup className="currency">$</sup>
                                            <span className="digit">49</span>
                                            <span className="square">/ m2</span>
                                        </div>
                                        <div className="pricing-item__tax">10% taxed will include after make
                                            price
                                        </div>
                                        <ul className="pricing-item__included">
                                            <li>survey & preliminary sketches</li>
                                            <li>3d sketches</li>
                                        </ul>
                                        <a className="pricing-item__btn" href="#">start my project</a>
                                    </div>
                                </div>
                                <div className="pricing-item swiper-slide">
                                    <div className="pricing-item__wrapper">
                                        <div className="pricing-item__top">
                                            <div className="pricing-item__plan">premium plan</div>
                                            <div className="pricing-item__caption">
                                                <span>Popular</span>
                                            </div>
                                        </div>
                                        <div className="pricing-item__price">
                                            <sup className="currency">$</sup>
                                            <span className="digit">69</span>
                                            <span className="square">/ m2</span>
                                        </div>
                                        <div className="pricing-item__tax">10% taxed will include after make
                                            price
                                        </div>
                                        <ul className="pricing-item__included">
                                            <li>survey & preliminary sketches</li>
                                            <li>3d sketches</li>
                                            <li>materials & building</li>
                                        </ul>
                                        <a className="pricing-item__btn" href="#">start my project</a>
                                    </div>
                                </div>
                                <div className="pricing-item swiper-slide">
                                    <div className="pricing-item__wrapper">
                                        <div className="pricing-item__top">
                                            <div className="pricing-item__plan">ultimate plan</div>
                                            <div className="pricing-item__caption"></div>
                                        </div>
                                        <div className="pricing-item__price">
                                            <sup className="currency">$</sup>
                                            <span className="digit">99</span>
                                            <span className="square">/ m2</span>
                                        </div>
                                        <div className="pricing-item__tax">10% taxed will include after make
                                            price
                                        </div>
                                        <ul className="pricing-item__included">
                                            <li>survey & preliminary sketches</li>
                                            <li>3d sketches</li>
                                            <li>materials & building</li>
                                            <li>free support & repair 2 years</li>
                                        </ul>
                                        <a className="pricing-item__btn" href="#">start my project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}