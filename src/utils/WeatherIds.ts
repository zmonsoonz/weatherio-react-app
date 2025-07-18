import { Cloud, Cloudy } from "lucide-react";

const Weather = (id:number) => {
    switch (id) {
        case (801 || 802):
            return Cloud
        case (803 || 804):
            return Cloudy
    }
}

export default Weather;