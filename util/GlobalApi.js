import axios from "axios";


const getNearByPlace = (category, lat, lng) => axios.get('/api/google-nearby?category=' + category + "&lat=" + lat + "&lng=" + lng);


const searchPlace = (searchtext, lat, lng) => axios.get('/api/google-search?searchtext=' + searchtext + "&lat=" + lat + "&lng=" + lng);


export default {
    getNearByPlace,
    searchPlace
}