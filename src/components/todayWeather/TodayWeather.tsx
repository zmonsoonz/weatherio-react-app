import { Cloudy } from "lucide-react";
import styles from "./todayWeather.module.scss";
import { useEffect, useState } from "react";
import useTodayWeatherService from "../../services/TodayWeatherService";

function TodayWeather() {

    const {getHourlyWeather} = useTodayWeatherService();

    const [weather, setWeather] = useState<IHourlyWeather[]>([{
        id: 0,
        time: '',
        weather: '',
        temp: 0
    }])

    interface IHourlyWeather {
        id: number
        time: string,
        weather: string,
        temp: number
    }

    const renderWeather = (list: IHourlyWeather[]) => {
        const items =  list.map(item => {
            const {time, weather, temp, id} = item
            return (
                <li className={styles.block__card} key={id}>
                    <article className={styles.block__article}>
                        <h3 className={styles.block__article__time}>{time}</h3>
                        <Cloudy size={44}/>
                        <h3 className={styles.block__article__temp}>{temp}&deg;</h3>
                    </article>
                </li>
            )
        })

        return items
    }

    useEffect (() => {
        getHourlyWeather().then(res => setWeather(res));
    }, [])

    return ( 
        <div className={styles.block}>
            <h2 className={styles.block__title}>Сегодня в</h2>
            <ul className={styles.block__cards}>
                {renderWeather(weather)}
            </ul>
        </div>
     );
}

export default TodayWeather;