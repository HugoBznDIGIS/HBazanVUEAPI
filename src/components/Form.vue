<script setup>
// Importamos lo propio de VUE
import { ref, reactive, onMounted, watch } from 'vue';
// Importamos el STORE
import { useSerieStore } from "@/stores/serie";
// Instanciamos el STORE
const serieStore = useSerieStore();
// Importamos useRoute para poder acceder a la URL
import { useRoute } from 'vue-router';
// Definimos una varible que use este "useRoute"
const route = useRoute();
// Guardamos el ID en una variable
const idSerie = ref(route.params.id);

onMounted(() => {
    if (idSerie.value > 0) {
        // Recuperar campos
        serieStore.getSerieById(idSerie.value);
    }
});

// Utilizamos watch para reaccionar a cambios en serieStore.serieDataById
watch(() => serieStore.serieDataById, (newSerieData) => {
    // Formatear las fechas antes de asignarlas a dataSerie
    newSerieData.fechaInicio = new Date(newSerieData.fechaInicio).toISOString().substring(0, 10);
    newSerieData.fechaFin = new Date(newSerieData.fechaFin).toISOString().substring(0, 10);

    // Asignar los valores al objeto dataSerie
    Object.assign(dataSerie, newSerieData);
});


const dataSerie = reactive({
    titulo: "",
    temporadas: 0,
    sinopsis: "",
    genero: {
        id: 0
    },
    tipoPublico: {
        id: 0
    },
    fechaInicio: "",
    fechaFin: "",
    estatus: {
        id: 0
    },
    imagen: "",
    videoYT: ""
});

const submitForm = () => {
    if (idSerie.value > 0) {
        // PUT
        serieStore.putSerie(idSerie.value, dataSerie);
    }
    else {
        // POST
        serieStore.postSerie(dataSerie);
    }
};
</script>

<template>
    <h1 class="display-1 text-white">{{ idSerie ? "Editar serie" : "Agregar serie" }}</h1>

    <div class="border border-2 rounded-3 p-5 bg-black mt-3">
        <form class="row text-white justify-content-center" @submit.prevent="submitForm">
            <div class="col-6">
                <label for="title">Titulo</label>
                <div class="input-group flex-nowrap">
                    <div class="input-group-text">
                        <span>💚</span>
                    </div>
                    <input id="title" v-model="dataSerie.titulo" type="text" class="form-control" placeholder="Titulo"
                        required />
                </div>
            </div>

            <div class="col-6">
                <label for="seasons">Temporadas</label>
                <div class="input-group flex-nowrap">
                    <div class="input-group-text">
                        <span>💚</span>
                    </div>
                    <input id="seasons" v-model="dataSerie.temporadas" type="number" class="form-control"
                        placeholder="Temporadas" min="1" required />
                </div>
            </div>

            <div class="col-6">
                <label for="synopsis">Sinopsis</label>
                <div class="input-group flex-nowrap">
                    <div class="input-group-text">
                        <span>💚</span>
                    </div>
                    <textarea id="synopsis" v-model="dataSerie.sinopsis" rows="2" class="form-control"
                        placeholder="Sinopsis"></textarea>
                </div>
            </div>

            <div class="col-6">
                <label for="genre">Genero</label>
                <div class="input-group flex-nowrap">
                    <div class="input-group-text">
                        <span>💚</span>
                    </div>
                    <select id="genre" v-model="dataSerie.genero.id" class="form-control">
                        <option value="" disabled>Selecciona una opcion</option>
                        <option value="1">Suspenso</option>
                        <option value="2">Misterio</option>
                        <option value="3">Ciencia ficcion</option>
                        <option value="4">Terror</option>
                        <option value="5">Romance</option>
                        <option value="6">Comedia</option>
                        <option value="7">Fantasia</option>
                    </select>
                </div>
            </div>

            <div class="col-6">
                <label for="publicType">Tipo publico</label>
                <div class="input-group flex-nowrap">
                    <div class="input-group-text">
                        <span>💚</span>
                    </div>
                    <select id="publicType" v-model="dataSerie.tipoPublico.id" class="form-control">
                        <option value="" disabled>Selecciona una opcion</option>
                        <option value="1">AA - Todo publico infantil</option>
                        <option value="2">A - Todo publico</option>
                        <option value="3">B - +12 Adolescentes</option>
                        <option value="4">B15 - +15 Adolescentes</option>
                        <option value="5">C - +18 Adultos</option>
                        <option value="6">D - +18 Adultos (Contenido delicado)</option>
                    </select>
                </div>
            </div>

            <div class="col-6">
                <label for="beginDate">Fecha inicio</label>
                <div class="input-group flex-nowrap">
                    <div class="input-group-text">
                        <span>💚</span>
                    </div>
                    <input type="date" id="beginDate" v-model="dataSerie.fechaInicio" class="form-control" required />
                </div>
            </div>

            <div class="col-6">
                <label for="endDate">Fecha final</label>
                <div class="input-group flex-nowrap">
                    <div class="input-group-text">
                        <span>💚</span>
                    </div>
                    <input type="date" id="endDate" v-model="dataSerie.fechaFin" class="form-control" required />
                </div>
            </div>

            <div class="col-6">
                <label for="status">Estatus</label>
                <div class="input-group flex-nowrap">
                    <div class="input-group-text">
                        <span>💚</span>
                    </div>
                    <select id="status" v-model="dataSerie.estatus.id" class="form-control">
                        <option value="" disabled>Selecciona una opcion</option>
                        <option value="1">Emision</option>
                        <option value="2">Terminado</option>
                        <option value="3">Cancelado</option>
                        <option value="4">Pausa</option>
                    </select>
                </div>
            </div>

            <div class="col-6">
                <label for="image">URL Imagen</label>
                <div class="input-group flex-nowrap">
                    <div class="input-group-text">
                        <span>💚</span>
                    </div>
                    <input type="text" id="image" v-model="dataSerie.imagen" class="form-control" placeholder="URL"
                        required />
                </div>
            </div>

            <div class="col-6">
                <label for="videoYT">Video YT</label>
                <div class="input-group flex-nowrap">
                    <div class="input-group-text">
                        <span>💚</span>
                    </div>
                    <input type="text" id="videoYT" v-model="dataSerie.videoYT" class="form-control" placeholder="ID Video"
                        required />
                </div>
            </div>

            <div class="col-12 mt-3">
                <button type="submit" class="btn btn-outline-primary">{{ idSerie ? 'Actualizar' : 'Agregar' }}</button>
                <RouterLink :to="{ name: 'admin' }" class="btn btn-outline-danger mx-3">Regresar</RouterLink>
            </div>
        </form>
    </div>
</template>