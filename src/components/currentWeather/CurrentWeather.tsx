import { Calendar, Cloudy, MapPin } from "lucide-react";
import styles from "./currentWeather.module.scss";

function CurrentWeather() {
    return ( 
        <article className={styles.card}>
            <div className={styles.card__current}>
                <h2>Now</h2>
                <div className={styles.card__weather}>
                    5&deg;с
                </div>
                <h3 className={styles.card__conditions}>
                    Clouds
                </h3>
                <Cloudy size={100} className={styles.card__image}/>
            </div>
            <div className={styles.card__info}>
                <Calendar/>
                <h4>Tuesday 1, Mar</h4>
            </div>
            <div className={styles.card__info}>
                <MapPin/>
                <h4>London, GB</h4>
            </div>
        </article>
    );
}

export default CurrentWeather;