// Importamos axios
import axios from "axios";

// Creamos una constante la cual contendrá la baseURL de nuestra API
const api = axios.create({
    // Colocamos la baseURL
    // baseURL: "http://localhost:5055"
    baseURL: "http://192.168.0.146"
});

// Exportamos api
export default api;