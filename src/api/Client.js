/** @format */

import axios from "axios";

const baseURL = "https://api.github.com/users/";
const Client = axios.create({ baseURL });

export default Client;
