import axios from 'axios';


export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer VwEygBeo-kBK9tggQgSeAgzTDTJOxoFuh37UQYXHjIt5jxetOxC0qPPj362MATbjYCU89K6JQXLJ5BpaW6oa6l8dJig3iLlY084hldHxTbCCciT5QXCXoo4E9RNcXnYx'
    }
});