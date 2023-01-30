export default function SectionFour(){
    return (<div>...</div>)
    return (
        <section className="studio-section">
            <div className="studio-section__inner container">
                <header className="studio-section__header">
                    <h2 className="studio-section__heading heading">Studio</h2>
                    <div className="studio-section__text">We are surrounded by amazing cultural and physical
                        weather climates. Our HQ is located in Odesa — a beautiful seaside resort city near
                        the Black Sea. Anton Checkhov lived in our same neighborhood, and we are just one
                        minute away from the opera house where Tchaikovsky conducted.
                    </div>
                </header>
                <div className="studio-section__wrapper">
                    <div className="studio-section__image studio-section__image--big">
                        <img src="assets/img/studio/01.jpg" width="1045" height="640" alt=""/>
                        <a className="studio-section__play-video fancybox" href="#ourStory">Play
                            video</a>
                    </div>
                    <div className="studio-section__image">
                        <img src="assets/img/studio/02.jpg" width="470" height="640" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}