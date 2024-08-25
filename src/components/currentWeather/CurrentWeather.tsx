import { Calendar, CloudLightning, Cloudy, MapPin } from "lucide-react";
import styles from "./currentWeather.module.scss";
import useTodayWeatherService from "../../services/TodayWeatherService";
import { useEffect, useState } from "react";
import { LucideIcon } from "lucide-react";
function CurrentWeather() {

    interface IData {
        id: number,
        weather: string,
        temp: number,
        date: string,
        city: string,
        country: string
    }
    const {getCurrentWeather} = useTodayWeatherService();

    const [data, setData] = useState<IData>({
        id: 0,
        weather: '',
        temp: 0,
        date: '',
        city: '',
        country: ''
    })

    // const [icon, setIcon] = useState<LucideIcon>()
    
    // const changeIcon = (id:number) => {
    //     // switch (Math.floor(id/100)) {
    //     //     case 8: setIcon(CloudLightning)
    //     // }
    //     setIcon(CloudLightning)
    // }

    useEffect (() => {
        getCurrentWeather().then(res => setData(res));
    }, [])

    return ( 
        <article className={styles.card}>
            <div className={styles.card__current}>
                <h2>Сейчас</h2>
                <div className={styles.card__weather}>
                    {data.temp}&deg;с
                </div>
                <h3 className={styles.card__conditions}>
                    {data.weather}
                </h3>
                <Cloudy size={100} className={styles.card__image}/>
            </div>
            <div className={styles.card__info}>
                <Calendar/>
                <h4>{data.date}</h4>
            </div>
            <div className={styles.card__info}>
                <MapPin/>
                <h4>{data.city}, {data.country}</h4>
            </div>
        </article>
    );
}

export default CurrentWeather;