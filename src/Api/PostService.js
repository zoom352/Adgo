import axios from 'axios'


// http://localhost:5000/api/v1/statistics?groupBy=day&from=2019-01-01&to=2019-12-31&browsers[]=1&operatingSystems[]=1



// https://example.com/?name=Jonathan&age=18


// let params = new URLSearchParams('https://example.com/?name=Jonathan&age=18');

// let name = params.get("name"); // is the string "Jonathan"
// let age = parseInt(params.get("age")); // is the number 18
// console.log(name)
// console.log(age)



// сделать общую функцию
export default class PostService {
    static async getAll() {
        return axios.get('http://localhost:5000/api/v1/statistics?groupBy=day&from=2019-01-01&to=2019-12-31')
    }
    static async getBrowserChromeMobile(browsers, operatingSystems) {
        return axios.get(`http://localhost:5000/api/v1/statistics?groupBy=day&from=2019-01-01&to=2019-12-31&browsers[]=${browsers}&operatingSystems[]=${operatingSystems}`)
    }





    static async getBrowserFirefox () {
        return axios.get('http://localhost:5000/api/v1/statistics?groupBy=day&from=2019-01-01&to=2019-12-31&browsers[]=2')
    }
    static async getBrowserChrome() {
        return axios.get('http://localhost:5000/api/v1/statistics?groupBy=day&from=2019-01-01&to=2019-12-31&browsers[]=1')
    }
    static async getWindows() {
        return axios.get('http://localhost:5000/api/v1/statistics?groupBy=day&from=2019-01-01&to=2019-12-31&browsers[]=1&operatingSystems[]=1')
    }
    static async getPlatform(platforms) {
        return axios.get(`http://localhost:5000/api/v1/${platforms}`)
    }
}

// http://localhost:5000/api/v1/platforms

// 'http://localhost:5000//api/v1/browsers'

// const paramsString = 'q=URLUtils.searchParams&topic=api';
// let searchParams = new URLSearchParams(paramsString);

// //Iterate the search parameters.
// for (let p of searchParams) {
//   console.log(p);
// }

// searchParams.has('topic') === true;      // true
// searchParams.get('topic') === "api";     // true
// searchParams.getAll('topic');            // ["api"]




// http://localhost:5000/api/v1/statistics?groupBy=day&from=2019-07-01&to=2019-08-12