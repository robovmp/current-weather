import axios from "axios"
import searchImg from '../../assets/imgs/Search.svg'
import max from '../../assets/imgs/arrow-up.svg'
import min from '../../assets/imgs/arrow-down.svg'
import sense from '../../assets/imgs/temperature.svg'
import wind from '../../assets/imgs/wind.svg'
import drop from '../../assets/imgs/drop.svg'
import close from '../../assets/imgs/close.svg'

import {ref} from 'vue'


export default {

    setup() {
        
        const city = ref('')
        const weather = ref('')
        

        const getWeatherCity = async () => {
            try {

                let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=dc991e89dda91a7a134ad6ef0b33c95a&lang=pt`)
                weather.value = response.data
                city.value = ''
                console.log(response.data)
                
            } catch (error) {
                console.log(error)
            }
        }

        const closeWeather = () => {
            weather.value = ''
        }

        const kelvinToCelsius = (value) => {
            let tempFormted = Math.trunc(value - 273.15) 
            return tempFormted
        }

        const metersToKilometer = (value) => {
            let kilometer = Math.trunc(value * 3.6)  
            return kilometer
        }

        return {
            searchImg,
            max,
            min,
            sense,
            wind,
            drop,
            close,
            city,
            weather,
            getWeatherCity,
            closeWeather,
            kelvinToCelsius,
            metersToKilometer
        }
    }
}