<script setup>
// Importamos el store
import { useSerieStore } from '@/stores/serie';
// Lo inicializamos
const serieStore = useSerieStore();

// Definimos el dato que este va a recibir
defineProps({
    // La palabra serie nos permitirá entrar a cada elemento de la respuesta API
    serie: {
        // Definimos que es un objeto
        type: Object
    },
    // En caso de que sea la vista admin
    admin: {
        type: Boolean
    }
})
</script>

<template>
    <div class="col-md-6 col-lg-3 border border-2 rounded-3 mt-2">
        <div class="card bg-black text-white">
            <!-- Validamos si es admin y que se muestre la imagen -->
            <div v-if="admin">
                <img :src="serie.imagen" :alt="'Serie ' + serie.titulo" class="card-img-top rounded-3 mt-3" height="250rem" />
            </div>
            <!-- Caso contrario, mostraremos el video -->
            <div v-else> 
                <!-- Ya con la palabra "serie" entramos al elemento "videoYT" -->
                <iframe class="w-100 p-2" :src="'https://www.youtube.com/embed/' + serie.videoYT"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
            <div class="card-body">
                <!-- Al igual que con todas las demás -->
                <h5 class="card-title">{{ serie.titulo }}</h5>
                <p class="card-text">Sinopsis: {{ serie.sinopsis }}</p>
                <p class="card-text">Genero: {{ serie.genero.nombre }}</p>
                <p class="card-text">Publico: {{ serie.tipoPublico.nombre }}</p>
                <p class="card-text">Estatus: {{ serie.estatus.nombre }}</p>
            </div>

            <!-- Validamos y en caso de que sea verdadero, que muestre los botones de editar y eliminar -->
            <div class="card-footer" v-if="admin">
                <RouterLink :to="{ path: '/form/' + serie.id }" class="btn btn-outline-primary">Editar</RouterLink>
                <button @click="serieStore.deleteSerie(serie.id)"  class="btn btn-outline-danger m-2">Eliminar</button>
            </div>
        </div>
    </div>
</template>