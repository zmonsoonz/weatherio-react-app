import { Cloudy } from "lucide-react";
import styles from "./todayWeather.module.scss";

function TodayWeather() {
    return ( 
        <div className={styles.block}>
            <h2 className={styles.block__title}>Today at</h2>
            <ul className={styles.block__cards}>
                <li className={styles.block__card}>
                    <article className={styles.block__article}>
                        <h3 className={styles.block__article__time}>3 AM</h3>
                        <Cloudy size={44}/>
                        <h3 className={styles.block__article__temp}>-40&deg;</h3>
                    </article>
                </li>
                <li className={styles.block__card}>
                    <article className={styles.block__article}>
                        <h3 className={styles.block__article__time}>6 AM</h3>
                        <Cloudy size={44}/>
                        <h3 className={styles.block__article__temp}>-40&deg;</h3>
                    </article>
                </li>
                <li className={styles.block__card}>
                    <article className={styles.block__article}>
                        <h3 className={styles.block__article__time}>9 AM</h3>
                        <Cloudy size={44}/>
                        <h3 className={styles.block__article__temp}>-40&deg;</h3>
                    </article>
                </li>
                <li className={styles.block__card}>
                    <article className={styles.block__article}>
                        <h3 className={styles.block__article__time}>12 PM</h3>
                        <Cloudy size={44}/>
                        <h3 className={styles.block__article__temp}>-40&deg;</h3>
                    </article>
                </li>
                <li className={styles.block__card}>
                    <article className={styles.block__article}>
                        <h3 className={styles.block__article__time}>3 PM</h3>
                        <Cloudy size={44}/>
                        <h3 className={styles.block__article__temp}>-40&deg;</h3>
                    </article>
                </li>
                <li className={styles.block__card}>
                    <article className={styles.block__article}>
                        <h3 className={styles.block__article__time}>6 PM</h3>
                        <Cloudy size={44}/>
                        <h3 className={styles.block__article__temp}>-40&deg;</h3>
                    </article>
                </li>
                <li className={styles.block__card}>
                    <article className={styles.block__article}>
                        <h3 className={styles.block__article__time}>9 PM</h3>
                        <Cloudy size={44}/>
                        <h3 className={styles.block__article__temp}>-40&deg;</h3>
                    </article>
                </li>
                <li className={styles.block__card}>
                    <article className={styles.block__article}>
                        <h3 className={styles.block__article__time}>12 AM</h3>
                        <Cloudy size={44}/>
                        <h3 className={styles.block__article__temp}>-40&deg;</h3>
                    </article>
                </li>
            </ul>
        </div>
     );
}

export default TodayWeather;