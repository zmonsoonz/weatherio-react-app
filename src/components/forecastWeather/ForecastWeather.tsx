import { CloudRain } from "lucide-react";
import styles from "./forecastWeather.module.scss";
import useTodayWeatherService from "../../services/TodayWeatherService";
import { useState, useEffect} from "react";

function ForecastWeather() {

    const [forecast, setForecast] = useState<any>();

    const {getForecast} = useTodayWeatherService();

    useEffect(() => {
        getForecast().then((res) => setForecast(res))
    }, [])

    const renderForecast = (list:any) => {
        return list.map((item: any, i:number) => {
            const {day, month, weekday, weather, temp} = item
            return (
                <li className={styles.block__day} key={i}>
                    <div className={styles.block__weather}>
                        <CloudRain size={40}/>
                        <span className={styles.block__weather__temp}>{temp}&deg;</span>
                    </div>
                    <h4>{day} {month}</h4>
                    <h4>{weekday}</h4>
                </li>
            )
        })
    }

    return ( 
        <div className={styles.block}>
            <h2 className={styles.block__title}>Прогноз на 5 дней</h2>
            <div className={styles.block__forecast}>
                <ul className={styles.block__days}>
                    {forecast ? renderForecast(forecast) : null}
                    {/* <li className={styles.block__day}>
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
                    </li> */}
                </ul>
            </div>
        </div>
    );
}

export default ForecastWeather;