import { Calendar, Cloudy, MapPin } from "lucide-react";
import styles from "./currentWeather.module.scss";

function CurrentWeather() {
    return ( 
        <article className={styles.card}>
            <div className={styles.card__current}>
                <div className={styles.card__text}>
                    <h2>Now</h2>
                    <div className={styles.card__weather}>
                        5°C
                    </div>
                    <h3 className={styles.card__conditions}>
                        Clouds
                    </h3>
                </div>
                <Cloudy size={120}/>
            </div>
            <div className={styles.card__date}>
                <Calendar/>
                <span>Tuesday 1, Mar</span>
            </div>
            <div className={styles.card__location}>
                <MapPin/>
                <span>London, GB</span>
            </div>
        </article>
    );
}

export default CurrentWeather;