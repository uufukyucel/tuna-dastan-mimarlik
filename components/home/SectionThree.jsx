export default function SectionThree(){
    return (
        <div>...</div>
    )
    return (
        <section className="works-section">
            <div className="works-section__inner container">
                <div className="row">
                    <div className="works-section__column col-12 col-md-7">
                        <h2 className="works-section__heading heading">Works</h2>
                        <div className="works-section__card works-section__card--big">
                            <div className="works-section__card-image">
                                <img src="assets/img/works-section/01.jpg" width="600" height="600" alt=""/>
                            </div>
                            <div className="works-section__card-tags">Residential, Design</div>
                            <h3 className="works-section__card-heading">
                                <a href="single-project-standart-dark.html">Cube villa, Poland</a>
                            </h3>
                            <div className="works-section__card-text">Discover how we helped CleanCloud to
                                increase their presence on a global market by their scaling up its visual
                                identity and building a flexible style guide for their future product
                                elaboration.
                            </div>
                        </div>
                        <a className="works-section__btn btn" href="works-grid.html">more projects</a>
                    </div>
                    <div className="works-section__column works-section__column--list col-12 col-md-5">
                        <div className="works-section__card">
                            <div className="works-section__card-image">
                                <img src="assets/img/works-section/02.jpg" width="400" height="400" alt=""/>
                            </div>
                            <div className="works-section__card-tags">Architecture, CGI</div>
                            <h3 className="works-section__card-heading">
                                <a href="single-project-standart-dark.html">Stone house</a>
                            </h3>
                            <div className="works-section__card-text">Stone House is a digital platform that
                                provides university students with personalized learning pathways
                            </div>
                        </div>
                        <div className="works-section__card">
                            <div className="works-section__card-image">
                                <img src="assets/img/works-section/03.jpg" width="400" height="400" alt=""/>
                            </div>
                            <div className="works-section__card-tags">Architecture, CGI</div>
                            <h3 className="works-section__card-heading">
                                <a href="single-project-standart-dark.html">Single house</a>
                            </h3>
                            <div className="works-section__card-text">Discover how we helped them scale up
                                from local to global.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}