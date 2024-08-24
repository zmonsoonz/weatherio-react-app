import { Droplet, Eye, Sunrise, Sunset, Thermometer, Waves, Wind } from "lucide-react";
import styles from "./highlightsWeather.module.scss";
import useTodayWeatherService from "../../services/TodayWeatherService";
import { useState, useEffect } from "react";
function HighlightsWeather() {

    const {getWeatherHighlights, getWindHighlights} = useTodayWeatherService();

    interface IWeather {
        humidity: number,
        pressure: number,
        visibility: number,
        feelsLike: number,
        sunrise: number,
        sunset: number
    }

    interface IWind {
        pm2_5: number,
        so2: number,
        no2: number,
        o3: number,
        index: number
    }

    const [weather, setWeather] = useState<IWeather>({
        humidity: 0,
        pressure: 0,
        visibility: 0,
        feelsLike: 0,
        sunrise: 0,
        sunset: 0,
    })

    const [wind, setWind] = useState<IWind>({
        pm2_5: 0,
        so2: 0,
        no2: 0,
        o3: 0,
        index: 0
    })
    
    useEffect (() => {
        getWeatherHighlights().then(res => setWeather(res));
        getWindHighlights().then(res => setWind(res));
    }, [])

    const airQuality = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];

    return ( 
        <article className={styles.card}>
            <h2 className={styles.card__title}>Todays Highlights</h2>
            <ul className={styles.articles}>
                <li className={[styles.articles__item, styles.wind].join(' ')}>
                    <article className={styles.article__wind}>
                        <div className={styles.wind__title}>
                            <h3 className={styles.article__title}>Air Quality Index</h3>
                            <div className={styles.wind__index}>{airQuality[wind.index]}</div>
                        </div>
                        <div className={styles.wind__description}>
                            <Wind size={48} style={{alignSelf: "center"}}/>
                            <div className={styles.wind__info}>
                                <h4>PM2.5</h4>
                                <h4>SO2</h4>
                                <h4>NO2</h4>
                                <h4>O3</h4>
                                <div className={styles.article__number}>{wind.pm2_5}</div>
                                <div className={styles.article__number}>{wind.so2}</div>
                                <div className={styles.article__number}>{wind.no2}</div>
                                <div className={styles.article__number}>{wind.o3}</div>
                            </div>
                        </div>
                    </article>
                </li>
                <li className={[styles.articles__item, styles.sun].join(' ')}>
                    <article className={styles.article}>
                        <h3 className={styles.article__title}>Sunrise & Sunset</h3>
                        <div className={[styles.article__description, styles.center_mobile].join(' ')}>
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
                <li className={styles.articles__item}>
                    <article className={styles.article}>
                        <h3 className={styles.article__title}>Humidity</h3>
                        <div className={styles.article__description}>
                            <Droplet size={42}/>
                            <div className={styles.article__number}>{weather.humidity}<span className={styles.article__measure}>%</span></div>
                        </div>
                    </article>
                </li>
                <li className={styles.articles__item}>
                    <article className={styles.article}>
                        <h3 className={styles.article__title}>Pressure</h3>
                        <div className={styles.article__description}>
                            <Waves size={42}/>
                            <div className={styles.article__number}>{weather.pressure}<span className={styles.article__measure}>hPa</span></div>
                        </div>
                    </article>
                </li>
                <li className={styles.articles__item}>
                    <article className={styles.article}>
                        <h3 className={styles.article__title}>Visibility</h3>
                        <div className={styles.article__description}>
                            <Eye size={42}/>
                            <div className={styles.article__number}>{weather.visibility}<span className={styles.article__measure}>km</span></div>
                        </div>
                    </article>
                </li>
                <li className={styles.articles__item}>
                    <article className={styles.article}>
                        <h3 className={styles.article__title}>Feels like</h3>
                        <div className={styles.article__description}>
                            <Thermometer size={42} className={styles.thermometer}/>
                            <div className={styles.article__number}>{weather.feelsLike}&deg;<span className={styles.article__measure}>C</span></div>
                        </div>
                    </article>
                </li>
            </ul>
        </article>
     );
}

export default HighlightsWeather;