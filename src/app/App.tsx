import CurrentWeather from "../components/currentWeather/CurrentWeather";
import ForecastWeather from "../components/forecastWeather/ForecastWeather";
import Header from "../components/header/Header";
import HighlightsWeather from "../components/highlightsWeather/highlightsWeather";
import TodayWeather from "../components/todayWeather/TodayWeather";
import './app.scss';

const App = () => {
    return (
        <div className="container">
            <Header/>
            <section className="section">
                <section className="flex">
                    <CurrentWeather/>
                    <ForecastWeather/>
                </section> 
                <section className="flex">
                    <HighlightsWeather/>
                    <TodayWeather/>
                </section>              
            </section>
        </div>
    )
}

export default App;