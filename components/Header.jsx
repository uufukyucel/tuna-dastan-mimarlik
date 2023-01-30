import Link from "next/link";

function Header(){
    return (
        <header className="header header--white __js_fixed-header">
            <div className="header__inner">
                <Link href="/" className="header__logo logo">
              <span className="logo__image">
                    <svg width="52" height="52" aria-label="logo">
                        <use xlinkHref="#logo"></use>
                    </svg>
                </span>
                    <span className="logo__text">Tuna Daştan Mimarlık</span>
                </Link>
                <nav className="header__nav navigation">
                    <ul className="navigation__list">
                        <li className="navigation__item navigation__item--current">
                            <Link className="navigation__link" href="/">Anasayfa</Link>
                        </li>
                        <li className="navigation__item">
                            <Link className="navigation__link animsition-link" href="/hakkimizda">Hakkımızda</Link>
                        </li>
                        <li className="navigation__item">
                            <Link className="navigation__link animsition-link" href="/iletisim">İletişim</Link>
                        </li>
                    </ul>
                </nav>
                <ul className="header__lang-switcher lang-switcher lang-switcher--white">
                    <li className="lang-switcher__item">
                        <a className="lang-switcher__link lang-switcher__link--current">en</a>
                    </li>
                    <li className="lang-switcher__item">
                        <a className="lang-switcher__link" href="#">tr</a>
                    </li>
                </ul>
                <div className="header__search header-search __js_header-search">
                    <div className="header-search__wrapper">
                        <form action="#" method="post">
                            <label aria-label="Type and hit enter to search">
                                <input type="search" name="header-search" placeholder="Type and hit enter to search..." />
                            </label>
                        </form>
                    </div>
                    <button className="header-search__toggle" type="button">
                        <svg className="header-search__toggle-icon header-search__toggle-icon--loupe" width="22" height="22">
                            <use xlinkHref="#search"></use>
                        </svg>
                        <svg className="header-search__toggle-icon header-search__toggle-icon--close" width="22" height="22">
                            <use xlinkHref="#close"></use>
                        </svg>
                        <span className="visually-hidden">Show search field</span>
                    </button>
                </div>
                <button className="header__menu-toggle menu-toggle" type="button">
                    <span className="visually-hidden">Menu</span>
                </button>
            </div>
        </header>
    )
}

export default Header