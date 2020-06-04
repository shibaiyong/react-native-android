import axiosInstance from './config.js'

export const getWeather = params => {

    return axiosInstance.get("src/api/data.json").then( res => res.data )

}
