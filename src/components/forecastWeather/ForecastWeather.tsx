import { CloudRain } from "lucide-react";
import styles from "./forecastWeather.module.scss";
function ForecastWeather() {
    return ( 
        <div className={styles.block}>
            <h2 className={styles.block__title}>Прогноз на 5 дней</h2>
            <div className={styles.block__forecast}>
                <ul className={styles.block__days}>
                    <li className={styles.block__day}>
                        <div className={styles.block__weather}>
                            <CloudRain size={40}/>
                            <span className={styles.block__weather__temp}>-40&deg;</span>
                        </div>
                        <h4>2 Mar</h4>
                        <h4>Thursday</h4>
                    </li>
                    <li className={styles.block__day}>
                        <div className={styles.block__weather}>
                            <CloudRain size={40}/>
                            <span className={styles.block__weather__temp}>-40&deg;</span>
                        </div>
                        <h4>2 Mar</h4>
                        <h4>Thursday</h4>
                    </li>
                    <li className={styles.block__day}>
                        <div className={styles.block__weather}>
                            <CloudRain size={40}/>
                            <span className={styles.block__weather__temp}>-40&deg;</span>
                        </div>
                        <h4>2 Mar</h4>
                        <h4>Thursday</h4>
                    </li>
                    <li className={styles.block__day}>
                        <div className={styles.block__weather}>
                            <CloudRain size={40}/>
                            <span className={styles.block__weather__temp}>-40&deg;</span>
                        </div>
                        <h4>2 Mar</h4>
                        <h4>Thursday</h4>
                    </li>
                    <li className={styles.block__day}>
                        <div className={styles.block__weather}>
                            <CloudRain size={40}/>
                            <span className={styles.block__weather__temp}>-40&deg;</span>
                        </div>
                        <h4>2 Mar</h4>
                        <h4>Thursday</h4>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ForecastWeather;