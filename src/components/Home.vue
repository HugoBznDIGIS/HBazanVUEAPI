<script setup>
// Importamos el componente Serie
import Serie from '@/components/Serie.vue';
// Importamos el STORE de Series
import { useSerieStore } from '@/stores/serie';
// Lo declaramos en una variable
const serieStore = useSerieStore();
</script>

<template>
    <h1 class="display-1 text-white">Bienvenido a <span class="text-success">VUE</span>💚</h1>

    <div class="border border-2 rounded-3 col-md-6 bg-black p-5 w-100 my-3">
        <div class="row gap-3 justify-content-center">
            <!-- Traemos el nuevo componente y le pasamos los datos como props -->
            <!-- VUE al igual que React, cada elemento de un v-for debe contener un "key" -->
            <!-- El cual en este caso es el ID de la serie -->
            <Serie v-for="itemSerie in serieStore.serieData" :key="itemSerie.id" :serie="itemSerie" :admin="false"/>
            <!-- Este es un comentario para mostrar el COMMIT de GIT -->
        </div>
    </div>
</template>