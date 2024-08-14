import CurrentWeather from "../components/currentWeather/CurrentWeather";
import Header from "../components/header/Header";
import HighlightsWeather from "../components/highlightsWeather/highlightsWeather";
import './app.scss';

const App = () => {
    return (
        <div className="container">
            <Header/>
            <section className="section">
                <CurrentWeather/>
                <HighlightsWeather/>
            </section>
        </div>
    )
}

export default App;