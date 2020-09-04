<template>
    <v-app-bar flat
               :dark="$vuetify.theme.dark"
               app
    >
        <v-container fluid>
            <v-row>
                <v-container>
                    <v-row align="center">
                        <v-col cols="auto" class="d-flex flex-row">
                            <v-app-bar-nav-icon @click="$emit('show-navigation')"
                            ></v-app-bar-nav-icon>
                            <v-img src="/images/logo.png"
                                   alt="website logo"
                                   max-height="50px"
                                   min-width="200px"
                                   max-width="250px"
                            ></v-img>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="auto">
                            <a @click.prevent="logout">خروج</a>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>
        </v-container>

    </v-app-bar>
</template>

<script>
    export default {
        name: "AdminNavbar",

        data() {
            return {
                search: false,
                items: [
                    {
                        text: 'جدیدترین پست‌ها',
                        class: 'white--text'
                    },
                    {
                        text: 'پست‌های دوستان',
                        class: 'white--text'
                    },
                    {
                        text: 'استارتاپ',
                        class: 'text--lighten-4'
                    },
                    {
                        text: 'دلنوشته',
                        class: 'text--lighten-4'
                    },
                    {
                        text: 'زندگی',
                        class: 'text--lighten-4'
                    },
                    {
                        text: 'کتاب',
                        class: 'text--lighten-4'
                    },
                    {
                        text: 'برنامه نویسی',
                        class: 'text--lighten-4'
                    },
                    {
                        text: 'روانشناسی',
                        class: 'text--lighten-4'
                    },
                    {
                        text: 'حال خوبتو',
                        class: 'text--lighten-4'
                    },
                    {
                        text: 'با من تقسیم کن',
                        class: 'text--lighten-4'
                    },
                ]
            }
        },

        methods: {
            logout() {
                this.$store.dispatch('user/logout')
                    .then(res => {
                        this.$router.push({ name: 'home' });
                    });
            }
        }
    }
</script>

<style>
    .v-input__control .v-input__slot::before {
        border-color: white !important;
    }
    .v-menu__content {
        box-shadow: unset;
    }
    .v-menu__content, .v-list {
        border-radius: 0;
    }
</style>
