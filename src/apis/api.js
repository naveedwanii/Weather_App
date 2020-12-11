import Axios from 'axios'

export default Axios.get({
    baseURL: 'https://api.weatherbit.io/v2.0/forecast',
})