
import DateUtil from "../utils/Date";
import { useFetch } from "../hooks/useFetch";

const useTodayWeatherService = () => {

    const {request} = useFetch();
    const {weekdays, months} = DateUtil();

    const _apiBase = 'https://proxy.cors.sh/https://api.openweathermap.org/';
    const _apiId = "appid=9651bcc737b51f380d2855123d3ad63a";

    const getCurrentWeather = async () => {
        const res = await request(`${_apiBase}data/2.5/weather?q=Moscow&units=metric&${_apiId}`)
        const date = parseDate(res.dt);
        return {
            id: res.weather[0].id,
            weather: res.weather[0].main,
            temp: Math.round(res.main.temp),
            date,
            city: res.name,
            country: res.sys.country
        }
    }
    

    const getWeatherHighlights = async () => {
        const res = await request(`${_apiBase}data/2.5/weather?q=Moscow&units=metric&${_apiId}`)
        return {
            humidity: res.main.humidity,
            pressure: res.main.pressure,
            visibility: Math.floor((res.visibility/1000) * 10) / 10,
            feelsLike: Math.round(res.main.feels_like),
            sunrise: String(new Date(res.sys.sunrise * 1000).toLocaleTimeString().slice(0, -3)),
            sunset: String(new Date(res.sys.sunset * 1000).toLocaleTimeString().slice(0, -3)),
        }
    }

    const getWindHighlights = async () => {
        const res = await request(`${_apiBase}data/2.5/air_pollution?lat=51.50&lon=-0.11&units=metric&${_apiId}`)
        return {
            pm2_5:res.list[0].components.pm2_5,
            so2:res.list[0].components.so2,
            no2:res.list[0].components.no2,
            o3:res.list[0].components.o3,
            index:res.list[0].main.aqi - 1
        }
    }

    const getHourlyWeather = async () => {
        const res = await request(`${_apiBase}data/2.5/forecast?q=Moscow&units=metric&cnt=9&${_apiId}`)
        return res.list.slice(1).map(sortHoursList)
    }

    const sortHoursList = (item:any) => {
        return {
            id: item.dt,
            time: new Date(item.dt_txt).toLocaleTimeString().slice(0, -3),
            weather: item.weather[0].main,
            temp: Math.round(item.main.temp)
        }
    }

    const parseDate = (date:number) => {
        const strDate = new Date(date * 1000);
        return (`${weekdays[strDate.getDay()]} ${strDate.getDate()}, ${months[strDate.getMonth()]}`)
    }

    const getForecast = async () => {
        const res = await request(`${_apiBase}data/2.5/forecast?q=Moscow&units=metric&${_apiId}`)
        console.log(res.list.map(mapForecast))
        return res.list.filter(filterForecast).map(mapForecast)
    }

    const filterForecast = (item: any) => {
        if (new Date(item.dt_txt).getHours() === 12 && new Date(item.dt_txt).getDate() != new Date().getDate()) {
            // const date = new Date(item.dt * 1000)
            // return {
            //     day: date.getDate(),
            //     month: months[date.getMonth()],
            //     weekday: weekdays[date.getDay()],
            //     weather: item.weather[0].main,
            //     temp: Math.round(item.main.temp)
            // }
            return item
        }
    }

    const mapForecast = (item: any) => {
        const date = new Date(item.dt * 1000)
        return {
            day: date.getDate(),
            month: months[date.getMonth()].slice(0, 3),
            weekday: weekdays[date.getDay()],
            weather: item.weather[0].main,
            temp: Math.round(item.main.temp)
        }
    }

    const getLinks = async () => {
        const res = await request(`http://127.0.0.1:8000/links`)
        return res
    }

    return {getCurrentWeather, getWeatherHighlights, getWindHighlights, getHourlyWeather, getForecast, getLinks}
}

export default useTodayWeatherService;

