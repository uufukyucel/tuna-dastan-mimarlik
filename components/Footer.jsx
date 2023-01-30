import Link from "next/link";
import {BsInstagram, BsTwitter, FaFacebookF} from "react-icons/all";

export default function Footer(){
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <Link className="footer__email" href="mailto:info@tunadastan.com">info@tunadastan.com</Link>
                    <p>Bize hayalinizi anlatın, biz de onu gerçeğe dönüştürmenize yardımcı olalım.</p>
                </div>
                <div className="footer__middle row">
                    <div className="footer__column col-12 col-md">
                        <div className="footer__column-title">Ofisimiz</div>
                        <address className="footer__address">Mekan Belli</address>
                        <Link className="footer__phone" href="tel:+905079508618">+90(507) 950 8618</Link>
                    </div>
                    <div className="footer__column col-12 col-sm">
                        <div className="footer__column-title">Yardım</div>
                        <ul className="footer__column-menu">
                            <li className="footer__column-item">
                                <Link className="footer__column-link animsition-link" href="#">SSS</Link>
                            </li>
                            <li className="footer__column-item">
                                <Link className="footer__column-link animsition-link"
                                   href="#">Şartlar & Koşullar</Link>
                            </li>
                            <li className="footer__column-item">
                                <Link className="footer__column-link animsition-link" href="#">Gizlilik Sözleşmesi</Link>
                            </li>
                            <li className="footer__column-item">
                                <Link className="footer__column-link animsition-link" href="#">Yardım</Link>
                            </li>
                            <li className="footer__column-item">
                                <Link className="footer__column-link animsition-link"
                                   href="/hizmetlerimiz">Hizmetlerimiz</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__column col-12 col-sm">
                        <div className="footer__column-title">Hızlı Linkler</div>
                        <ul className="footer__column-menu">
                            <li className="footer__column-item">
                                <Link className="footer__column-link animsition-link"
                                   href="/hakkimizda">Hakkkımızda</Link>
                            </li>
                            <li className="footer__column-item">
                                <Link className="footer__column-link animsition-link"
                                   href="/calismalarimiz">Çalışmalarımız</Link>
                            </li>
                            <li className="footer__column-item">
                                <Link className="footer__column-link animsition-link"
                                   href="/haberler">Bizden Haberler</Link>
                            </li>
                            <li className="footer__column-item">
                                <Link className="footer__column-link animsition-link"
                                   href="/iletisim">İletişim</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__column footer__column col-12 col-lg">
                        <ul className="footer__social social">
                            <li className="social__item">
                                <a className="social__link" href="#" target="_blank">
                                    <BsTwitter size={18} />
                                    <span className="visually-hidden">Twitter</span>
                                </a>
                            </li>
                            <li className="social__item">
                                <a className="social__link" href="#" target="_blank">
                                    <FaFacebookF size={18} />
                                    <span className="visually-hidden">Facebook</span>
                                </a>
                            </li>
                            <li className="social__item">
                                <Link className="social__link" href="https://instagram.com/tunahanmimarlikx" target="_blank">
                                   <BsInstagram size={18} />
                                    <span className="visually-hidden">Instagram</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="footer__copyright col-12 col-sm-6">© 2022 <span>tunadastan.com</span> Tüm hakları saklıdır.
                    </div>
                    <div className="footer__design col-12 col-sm-6"><span>Ufuk Yücel</span> tarafından geliştirildi.
                    </div>
                </div>
            </div>
        </footer>
    )
}