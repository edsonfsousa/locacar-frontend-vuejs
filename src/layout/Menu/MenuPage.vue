<template>
    <v-navigation-drawer :mini-variant="mini" permanent>
        <v-list>
            <v-list-item>
                <v-img v-if="!mini" src="@/assets/wda.png" height="10.25em"></v-img>
                <v-img v-if="mini" src="@/assets/logo.svg" height="1.5em"></v-img>
            </v-list-item>
            <v-list-item-title class="menu-title my-3">
                <div :class="mini ? 'hidden-menu-text ml-4' : 'textMenu ml-4'">
                    <h3 style="font-size: 1.25em">Menu</h3>
                </div>
                <div class="mr-3 menu-icon">
                    <v-btn icon @click.stop="mini = !mini">
                        <v-icon :style="mini ? 'transform: rotate(180deg)' : ''">mdi-menu-open</v-icon>
                    </v-btn>
                </div>
            </v-list-item-title>

            <v-list-item-group v-model="selectedItem" mandatory>
                <v-list-item v-for="(item, i) in items" :key="i" :color="item.color" :to="item.to">
                    <v-list-item-icon>
                        <v-icon v-text="item.icon" :color="item.color"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text" style="font-size: 0.875em"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    data: () => ({
        textMenu: true,
        mini: false,
        menuMini: false,
        selectedItem: 0,
        items: []
    }),
    created() {
        if (window.innerWidth <= 900) {
            this.mini = true;
            this.menuMini = true;
        } else {
            this.menuMini = false;
        }
        this.function;
    },
    computed: {
        function() {
            this.items = [
                { text: 'Dashboard', icon: 'mdi-chart-areaspline', color: '#11CDEF', to: '/' },
                { text: 'Clientes', icon: 'mdi-account-multiple', color: '#11CDEF', to: '/clientes' },
                { text: 'Carros', icon: 'mdi-car', color: '#11CDEF', to: '/carros' },
                { text: 'Marcas', icon: 'mdi-car-brake-hold', color: '#11CDEF', to: '/marcas' },
                { text: 'Aluguel', icon: 'mdi-key', color: '#11CDEF', to: '/aluguel' }
            ];
        }
    }
};
</script>
<style src="./style/menu-style.scss" lang="scss" scoped></style>
