import { top } from "./stores.js";
import axios from "axios";

export const getData = async (type, page = 1) => {
    top.set([]);
    axios.get(`https://api.jikan.moe/v3/top/anime/${page}/${type}`)
        .then(function (res) {
            let response = res['data'];
            top.set(response['top']);
        })
        .catch(function (err) {
            console.log(err);
        });
}