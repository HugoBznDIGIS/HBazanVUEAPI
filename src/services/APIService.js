// Importamos api
import api from "@/lib/axios";

export default {
    // GET
    obtenerSeries() {
        return api("/SerieGetByTitle");
    },
    // DELETE
    deleteSerie(idSerie) {
        return api.delete(`/SerieDelete/${idSerie}`);
    },
    // POST
    postSerie(dataSerie) {
        return api.post("/SerieAdd", dataSerie);
    },
    // GETBYID
    getSerieById(idSerie) {
        return api(`SerieGetById/${idSerie}`);
    },
    // PUT
    putSerie(idSerie, dataSerie) {
        return api.put(`/SerieUpdate/${idSerie}`, dataSerie);
    }
}