<script setup>
// Importamos el componente Serie
import Serie from './Serie.vue';
// Importamos el store
import { useSerieStore } from '@/stores/serie';

const serieStore = useSerieStore();
</script>

<template>
    <h1 class="display-1 text-white">Administrar series</h1>

    <div class="my-3">
        <RouterLink :to="{ name: 'form' }" class="btn btn-outline-primary">Agregar serie</RouterLink>
    </div>

    <div class="border border-2 rounded-3 col-md-6 bg-black p-5 w-100 my-3">
        <div class="row gap-3 justify-content-center">
            <!-- Usamos el componente pero ahora con la opción de admin en "true" -->
            <Serie v-for="serieItem in serieStore.serieData" :key="serieItem.id" :serie="serieItem" :admin="true" />
        </div>
        <footer style="color: purple;" class="text-end"><strong>HugoBzn</strong></footer>
    </div>
</template>