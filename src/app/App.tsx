import CurrentWeather from "../components/currentWeather/CurrentWeather";
import Header from "../components/header/Header";
import './app.scss';

const App = () => {
    return (
        <div className="container">
            <Header/>
            <CurrentWeather/>
        </div>
    )
}

export default App;