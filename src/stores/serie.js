// Importamos el ciclo de vida onMounted y ref para los datos de la API
import { onMounted, ref } from "vue";
// Usaremos esto para poder usar el router
import { useRouter } from "vue-router";
// Importamos defineStore para el store
import { defineStore } from "pinia";
// Importamos el servicio
import APIService from "@/services/APIService";

// Siempre que creamos nuestro store, tenemos que nombrarle caso
// Se llamará "serie"
export const useSerieStore = defineStore("serie", () => {
    // Instanciamos "router"
    const router = useRouter();

    // Los valores en VUE se almacenan de la siguiente manera, dependiendo
    // si es un array o un object (En este caso es array)
    const serieData = ref([]);

    // Definimos una variable para almacenar el objeto en caso del GetById
    const serieDataById = ref({});

    // Se crea el metodo que realizará la petición
    async function obtenerSeries() {
        // Destructuramos el dato y accedemos a "series" ya que en nuestra
        // respuesta viene el listado de  series en un arreglo de objetos
        // llamado "series"
        const { data: { series } } = await APIService.obtenerSeries();
        // Se asignan esos valores a serieData con el atributo "value"
        serieData.value = series;
    };

    // Cuando se monta el componente
    onMounted(() => {
        // Se manda el metodo
        obtenerSeries();
    });

    // Función DELETE
    async function deleteSerie(idSerie) {
        const correct = await APIService.deleteSerie(idSerie);

        // Validamos que sea correcto el status de la petición
        if (correct.data.estatus) {
            alert("Se ha eliminado de manera correcta");

            // Llamamos la funcion de GET para actualizar los registros
            obtenerSeries();
        }
        else {
            alert("Ha ocurrido un error al eliminar el registro");
        }
    }

    async function postSerie(dataSerie) {
        const correct = await APIService.postSerie(dataSerie);

        // Validamos que sea correcto
        if (correct.data.estatus) {
            alert("Se ha agregado de manera correcta");
            // Reedirigir a la vista admin
            router.push("/admin");
            // Se obtienenen las series
            obtenerSeries();
        }
        else {
            alert("Ha ocurrido un error al agregar la serie");
        }
    };

    // Funcion GETBYID
    async function getSerieById(idSerie) {
        const { data } = await APIService.getSerieById(idSerie);
        // Asignamos lo que vale nuestro GETBYID
        serieDataById.value = data;
    }

    async function putSerie(idSerie, dataSerie) {
        const correct = await APIService.putSerie(idSerie, dataSerie);

        // Validamos que sea correcto
        if (correct.data.estatus) {
            alert("Se ha actualizado de manera correcta");
            // Reedirigir a la vista admin
            router.push("/admin");
            // Se obtienenen las series
            obtenerSeries();
        }
        else {
            alert("Ha ocurrido un error al actualizar la serie");
        }
    }

    // Retornamos todo lo que realicemos en el store
    return {
        serieData,
        //Exportamos getSerieById
        serieDataById,
        // Exportamos la funcion DELETE
        deleteSerie,
        // Exportamos la funcion POST
        postSerie,
        // Exportamos la funcion GETBYID
        getSerieById,
        // Exportamos la funcion PUT
        putSerie
    }
})