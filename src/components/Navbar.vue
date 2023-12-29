<script setup>
// Propiedades computadas
import { computed } from "vue";
// Importamos el RouterLink
import { RouterLink, useRoute } from "vue-router";
const route = useRoute();

// Checamos el nombre de la ruta para estilos dinámicos
const textColorHome = computed(() => route.name === 'home');
const textColorAdmin = computed(() => route.name === 'admin');
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-black">
        <div class="container-fluid">
            <!-- Usamos Routerlink como si fuera una etiqueta anchor -->
            <!-- Le tenemos que pasar el "name" que le hemos dado en el archivo router -->
            <RouterLink :to="{ name: 'home' }" class="navbar-brand text-success"><strong>VUE</strong> 💚</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon bg-white rounded-1"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'home' }" active-class="text-success" :class="{'text-white': textColorAdmin}" class="nav-link">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'admin' }" active-class="text-success" :class="{'text-white': textColorHome}" class="nav-link">Admin</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>