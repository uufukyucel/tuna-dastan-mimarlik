import {BsPlay} from "react-icons/all";
import Image from "next/image";
import AnAwardsImage3 from "@/assets/img/an-awards-image-3.png"
import Link from "next/link";
export default function SectionOne(){
    return <section className="an-awards an-awards--different" data-aos="fade" data-aos-delay="350">
        <div className="container">
            <div className="row">
                <div className="an-awards__intro col-12 col-md col-lg-6 order-md-1">
                    <div className="an-awards__image an-awards__image--mb-negative">
                        <Image src={AnAwardsImage3} width="549" height="832" alt=""/>
                    </div>
                </div>
                <div className="an-awards__content col-12 col-md col-lg-6">
                    <h1 className="an-awards__heading heading heading--h1">TUNA DAŞTAN MİMARLIK</h1>
                    <div className="an-awards__text">Türk markasıyız, mekana tutkuyla bağlıyız ve zamanla sürdürülebilir değerlere karşı değerler yaratıyoruz
                    </div>
                    <div className="an-awards__buttons">
                        <a className="an-awards__btn btn" href="about-default.html">Daha fazla</a>
                        <div className="video-btn video-btn--outline">
                            <Link className="video-btn__btn fancybox" href="#ourStory">
                                <span className="visually-hidden">Play</span>
                                <BsPlay size={64} />
                            </Link>
                            <span className="video-btn__text">Hikayemizi Gör</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}