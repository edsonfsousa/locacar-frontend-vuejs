<template>
    <v-navigation-drawer :mini-variant="mini" permanent>
        <v-list>
            <v-list-item>
                <v-img v-if="!mini" src="@/assets/images/Logo-Superare.png" height="10.25em"></v-img>
                <v-img v-if="mini" src="@/assets/images/Logo-Superare-Simbolo.png" height="1.5em"></v-img>
            </v-list-item>
            <v-list-item-title class="titleMenu my-3">
                <div :class="mini ? 'textMenuHidden ml-4' : 'textMenu ml-4'">
                    <h3 style="font-size: 1.25em">Menu</h3>
                </div>
                <div class="mr-3" id="iconMenu">
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
            if (localStorage.getItem('role') == 'ROLE_ADMIN') {
                this.items = [
                    { text: 'Painel Principal', icon: 'mdi-home-outline', color: '#7764E4', to: '/' },
                    { text: 'Calendário', icon: 'mdi-calendar-blank-outline', color: '#F53C56', to: '/calendario' },
                    { text: 'Atendimento', icon: 'mdi-file-document-outline', color: '#FB6340', to: '/atendimento' },
                    { text: 'Paciente', icon: 'mdi-account-outline', color: '#11CDEF', to: '/paciente' },
                    { text: 'Lembrete', icon: 'mdi-comment-outline', color: '#FEB969', to: '/lembrete' },
                    {
                        text: 'Relatório',
                        icon: 'mdi-file-document-multiple-outline',
                        color: '#00659F',
                        to: '/relatorio'
                    },
                    { text: 'Gerenciar', icon: 'mdi-cog-outline', color: '#585858', to: '/gerencia' }
                ];
            }
            if (localStorage.getItem('role') == 'ROLE_PROFESSIONAL') {
                this.items = [
                    { text: 'Painel Principal', icon: 'mdi-home-outline', color: '#7764E4', to: '/home' },
                    { text: 'Agenda', icon: 'mdi-calendar-blank-outline', color: '#F53C56', to: '/agenda' },
                    { text: 'Consultas', icon: 'mdi-file-document-outline', color: '#FB6340', to: '/consultas' },
                    {
                        text: 'Pacientes',
                        icon: 'mdi-account-outline',
                        color: '#11CDEF',
                        to: '/profissionais/pacientes'
                    },
                    { text: 'Perfil', icon: 'mdi-cog-outline', color: '#585858', to: '/perfil' }
                ];
            }
        }
    }
};
</script>
<style src="./style/menu-style.scss" lang="scss" scoped></style>
