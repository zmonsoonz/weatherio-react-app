
import { useFetch } from "../hooks/useFetch";

const useTodayWeatherService = () => {

    const {request} = useFetch();

    const _apiBase = 'https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/';
    const _apiId = "appid=9651bcc737b51f380d2855123d3ad63a";

    const getCurrentWeather = async () => {
        const res = await request(`${_apiBase}data/2.5/weather?q=London&units=metric&${_apiId}`)
        return {
            weather: res.weather[0].main,
            temp: Math.round(res.main.temp),
            date: res.dt,
            city: res.name,
            country: res.sys.country
        }
    }

    const getWeatherHighlights = async () => {
        const res = await request(`${_apiBase}data/2.5/weather?q=London&units=metric&${_apiId}`)
        return {
            humidity: res.main.humidity,
            pressure: res.main.pressure,
            visibility: Math.floor((res.visibility/1000) * 10) / 10,
            feelsLike: Math.round(res.main.feels_like),
            sunrise: res.sys.sunrise,
            sunset: res.sys.sunset,
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
        const res = await request(`${_apiBase}data/2.5/forecast?q=London&units=metric&cnt=8&${_apiId}`)
        return res.list.map(sortHoursList)
    }

    const sortHoursList = (item:any) => {
        return {
            time: item.dt_text,
            weather: item.weather[0].main,
            temp: item.main.temp
        }
    }

    return {getCurrentWeather, getWeatherHighlights, getWindHighlights, getHourlyWeather}
}

export default useTodayWeatherService;

