export default function SectionSeven(){
    return (<div>...</div>)
    return (
        <section className="our-journal our-journal--mb">
            <div className="container">
                <header className="our-journal__header our-journal__header--block">
                    <h2 className="our-journal__heading heading heading--upper">Our Journal</h2>
                    <div className="our-journal__text">Join into our journal to discuss around art & arch,
                        share to find more inspiration for your work
                    </div>
                </header>
                <ul className="our-journal__list row">
                    <li className="news-card __js_news-list-item col-12 col-md-6">
                        <div className="news-card__pic">
                            <img src="assets/img/news/01.jpg" alt=""/>
                        </div>
                        <div className="news-card__content">
                            <div className="news-card__date">
                                <p className="num">25</p>
                                <p className="month">december</p>
                                <p className="year">2020</p>
                            </div>
                            <div className="news-card__title">
                                <a href="single-post-dark.html" target="_blank">Discover top 15 buildings
                                    modern in Italia</a>
                                <p className="author">
                                    <a href="news-grid-dark.html">inspiration</a>
                                    <span className="delimiter">/</span>
                                    <span>
                      <a href="#">By Admin</a>
                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="news-card __js_news-list-item col-12 col-md-6">
                        <div className="news-card__pic">
                            <img src="assets/img/news/02.jpg" alt=""/>
                        </div>
                        <div className="news-card__content">
                            <div className="news-card__date">
                                <p className="num">20</p>
                                <p className="month">december</p>
                                <p className="year">2020</p>
                            </div>
                            <div className="news-card__title">
                                <a href="single-post-dark.html" target="_blank">The dome in architectural,
                                    the attractive from the art</a>
                                <p className="author">
                                    <a href="news-grid-dark.html">review</a>
                                    <span className="delimiter">/</span>
                                    <span>
                      <a href="#">By Logan Cee</a>
                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}