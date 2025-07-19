import CurrentWeather from "../components/currentWeather/CurrentWeather";
import Footer from "../components/footer/Footer";
import ForecastWeather from "../components/forecastWeather/ForecastWeather";
import Header from "../components/header/Header";
import HighlightsWeather from "../components/highlightsWeather/highlightsWeather";
import TodayWeather from "../components/todayWeather/TodayWeather";
import './app.scss';

const App = () => {


    return (
        <div className="container">
            <Header/>
            <section className="main">
                <section className="main__left">
                    <CurrentWeather/>
                    <ForecastWeather/>
                </section> 
                <section className="main__right">
                    <HighlightsWeather/>
                    <TodayWeather/>
                </section>            
            </section>
            <Footer/>
        </div>
    )
}

export default App;