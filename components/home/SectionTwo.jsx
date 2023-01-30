import {BsBoxSeam, FiPhoneCall, RiPencilRulerLine, TfiVector} from "react-icons/all";
import Link from "next/link";

export default function SectionTwo(){
    return <div className="bg-wrapper">
        <section className="simplicity">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 type-service type-service--lite">
                        <ul className="type-service__list">
                            <li className="type-service__item" data-aos="fade">
                                <Link href="/projelerimiz">
                                    <div
                                        className="type-service__item-icon type-service__item-icon--interior">
                                        <RiPencilRulerLine size={49} />
                                    </div>
                                    <h3 className="type-service__item-heading">İç Mekan & Bina</h3>
                                    <div className="type-service__item-text">Sihiri binanıza ve iç mekanınıza taşıyoruz
                                    </div>
                                    <div className="type-service__item-link">Projelerimiz</div>
                                </Link>
                            </li>
                            <li className="type-service__item" data-aos="fade" data-aos-delay="300">
                                <Link href="/projelerimiz">
                                    <div
                                        className="type-service__item-icon type-service__item-icon--design">
                                        <TfiVector size={49} />
                                    </div>
                                    <h3 className="type-service__item-heading">Tasarım</h3>
                                    <div className="type-service__item-text">Dijital ürünler ile yaratıcı tasarımlar
                                    </div>
                                    <div className="type-service__item-link">Projelerimiz</div>
                                </Link>
                            </li>
                            <li className="type-service__item" data-aos="fade" data-aos-delay="600">
                                <Link href="/projelerimiz">
                                    <div
                                        className="type-service__item-icon type-service__item-icon--furniture">
                                        <BsBoxSeam size={49} />
                                    </div>
                                    <h3 className="type-service__item-heading">Ürün</h3>
                                    <div className="type-service__item-text">Özel ürünler yaratıyoruz ve satıyoruz
                                    </div>
                                    <div className="type-service__item-link">Projelerimiz</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="simplicity__content col-12 col-md-6 col-xl-5 offset-xl-1">
                        <h2 className="simplicity__heading heading">RÜYALARINIZI İNŞA ETMENİZE YARDIMCI OLALIM</h2>
                        <div className="simplicity__subheading">İyi tasarımın iyi iş anlamına geldiğini biliyoruz.
                        </div>
                        <div className="simplicity__text">Açıkça iletişim kuran, pazarlama hedeflerine ulaşan ve harika
                            görünen kimlikler, dijital deneyimler ve basılı materyaller oluşturarak müşterimizin başarılı
                            olmasına yardımcı oluyoruz.
                        </div>
                        <div className="simplicity__notice">Hemen bizi arayın.</div>
                        <div className="simplicity__phone phone-block phone-block--theme-beige">
                            <div className="phone-block__icon">
                                <FiPhoneCall size={18} />
                            </div>
                            <div className="phone-block__content">
                                <div className="phone-block__hint">24/7</div>
                                <a className="phone-block__number" href="tel:+6530025656376">+90 - 507 950 86 18</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="simplicity__statistics statistics row" data-aos="fade">
                    <div className="statistics__item col-12 col-sm">
                        <div className="statistics__item-value">
                            <span className="__js_number" data-end-value="25">0</span>
                        </div>
                        <div className="statistics__item-text">yıllık
                            <br/>twcrübw
                        </div>
                    </div>
                    <div className="statistics__item col-12 col-sm">
                        <div className="statistics__item-value">
                            <span className="__js_number" data-end-value="250">0</span>
                        </div>
                        <div className="statistics__item-text">tatmin
                            <br/>müşteri
                        </div>
                    </div>
                    <div className="statistics__item col-12 col-lg">
                        <div className="statistics__item-value">
                            <span className="__js_number" data-end-value="1875">0</span>
                        </div>
                        <div className="statistics__item-text">tamamlanan proje
                            <br/>0 ilde
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}