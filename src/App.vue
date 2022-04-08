<template>
    <v-app>
    <div class="d-flex">
        <div class="menuWidth">
            <Menu />
        </div>
        <div class="viewWidth">
                <v-main>
                    <v-scroll-y-transition hide-on-leave>
                        <router-view />
                    </v-scroll-y-transition>
                </v-main>
        </div>
    </div>
    </v-app>
</template>

<script>
import Menu from '@/layout/Menu/MenuPage.vue';
export default {
    name: 'App',
    components: { Menu }
};
</script>
<style src="@/styles/app-style.scss" lang="scss" />
