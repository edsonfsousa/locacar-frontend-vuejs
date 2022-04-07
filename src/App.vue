<template>
    <v-app>
        <HomePage />
    </v-app>
</template>

<script>
import Menu from '@/layout/Menu/MenuPage.vue';
import HomePage from '@/pages/HomePage.vue';
export default {
    name: 'App',
    components: { Menu, HomePage },
};
</script>
<style src="@/styles/app-style.scss" lang="scss"/>
