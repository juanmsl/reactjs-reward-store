import axios from 'axios';


export default class API {
    static apiURL = process.env.REACT_APP_API_URL;
    static timeout = 15000;

    static commonHeaders = () => {
        return {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: process.env.REACT_APP_API_TOKEN
        };
    };

    static defaultCB = () => {
    };

    static getUser = (success, error = API.defaultCB, always = API.defaultCB) => {
        axios({
            url: `/user/me`,
            method: "GET",
            baseURL: API.apiURL,
            timeout: API.timeout,
            headers: API.commonHeaders(),
            credentials: 'same-origin'
        }).then((response) => success(response))
            .catch((response) => error(response))
            .then(always());
    };

    static addPoints = (amount, success, error = API.defaultCB, always = API.defaultCB) => {
        axios({
            url: `/user/points`,
            method: "POST",
            baseURL: API.apiURL,
            timeout: API.timeout,
            headers: API.commonHeaders(),
            credentials: 'same-origin',
            data: {
                amount
            }
        }).then((response) => success(response))
            .catch((response) => error(response))
            .then(always());
    };

    static getHistory = (success, error = API.defaultCB, always = API.defaultCB) => {
        axios({
            url: `/user/history`,
            method: "GET",
            baseURL: API.apiURL,
            timeout: API.timeout,
            headers: API.commonHeaders(),
            credentials: 'same-origin'
        }).then((response) => success(response))
            .catch((response) => error(response))
            .then(always());
    };

    static redeem = (productId, success, error = API.defaultCB, always = API.defaultCB) => {
        axios({
            url: `/redeem`,
            method: "POST",
            baseURL: API.apiURL,
            timeout: API.timeout,
            headers: API.commonHeaders(),
            credentials: 'same-origin',
            data: {
                productId
            }
        }).then((response) => success(response))
            .catch((response) => error(response))
            .then(always());
    };

    static getProducts = (success, error = API.defaultCB, always = API.defaultCB) => {
        axios({
            url: `/products`,
            method: "GET",
            baseURL: API.apiURL,
            timeout: API.timeout,
            headers: API.commonHeaders(),
            credentials: 'same-origin'
        }).then((response) => success(response))
            .catch((response) => error(response))
            .then(always());
    };
}