import { Droplet, Eye, Sunrise, Sunset, Thermometer, Waves, Wind } from "lucide-react";
import styles from "./highlightsWeather.module.scss";

function HighlightsWeather() {
    return ( 
        <article className={styles.card}>
            <h2 className={styles.card__title}>Todays Highlights</h2>
            <ul className={styles.articles}>
                <li className={[styles.articles__item, styles.wind].join(' ')}>
                    <article className={styles.article__wind}>
                        <div className={styles.wind__title}>
                            <h3 className={styles.article__title}>Air Quality Index</h3>
                            <div className={styles.wind__index}>Very Poor</div>
                        </div>
                        <div className={styles.wind__description}>
                            <Wind size={48} style={{alignSelf: "center"}}/>
                            <div className={styles.wind__info}>
                                <h4>PM2.5</h4>
                                <h4>SO2</h4>
                                <h4>NO2</h4>
                                <h4>O3</h4>
                                <div className={styles.article__number}>177</div>
                                <div className={styles.article__number}>29.8</div>
                                <div className={styles.article__number}>43.2</div>
                                <div className={styles.article__number}>0.150</div>
                            </div>
                        </div>
                    </article>
                </li>
                <li className={[styles.articles__item, styles.sun].join(' ')}>
                    <article className={styles.article}>
                        <h3 className={styles.article__title}>Sunrise & Sunset</h3>
                        <div className={styles.article__description}>
                            <div className={styles.article__description_sun}>
                                <Sunrise size={48} className={styles.article__description_image}/>
                                <h4>Sunrise</h4>
                                <div className={styles.article__number}>6:45 AM</div>
                            </div>
                            <div className={styles.article__description_sun}>
                                <Sunset size={48} className={styles.article__description_image}/>
                                <h4>Sunset</h4>
                                <div className={styles.article__number}>6:21 PM</div>
                            </div>
                        </div>
                    </article>
                </li>
                <li className={[styles.articles__item, [styles.articles__item_small]].join(' ')}>
                    <article className={styles.article}>
                        <h3 className={styles.article__title}>Humidity</h3>
                        <div className={styles.article__description}>
                            <Droplet size={42}/>
                            <div className={styles.article__number}>73<span className={styles.article__measure}>%</span></div>
                        </div>
                    </article>
                </li>
                <li className={[styles.articles__item, [styles.articles__item_small]].join(' ')}>
                    <article className={styles.article}>
                        <h3 className={styles.article__title}>Pressure</h3>
                        <div className={styles.article__description}>
                            <Waves size={42}/>
                            <div className={styles.article__number}>1019<span className={styles.article__measure}>hPa</span></div>
                        </div>
                    </article>
                </li>
                <li className={[styles.articles__item, [styles.articles__item_small]].join(' ')}>
                    <article className={styles.article}>
                        <h3 className={styles.article__title}>Visibility</h3>
                        <div className={styles.article__description}>
                            <Eye size={42}/>
                            <div className={styles.article__number}>2.5<span className={styles.article__measure}>km</span></div>
                        </div>
                    </article>
                </li>
                <li className={[styles.articles__item, [styles.articles__item_small]].join(' ')}>
                    <article className={styles.article}>
                        <h3 className={styles.article__title}>Feels like</h3>
                        <div className={styles.article__description}>
                            <Thermometer size={42} className={styles.thermometer}/>
                            <div className={styles.article__number}>20&deg;<span className={styles.article__measure}>C</span></div>
                        </div>
                    </article>
                </li>
            </ul>
        </article>
     );
}

export default HighlightsWeather;