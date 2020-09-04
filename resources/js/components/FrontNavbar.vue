<template>
    <v-app-bar
               flat
               :dark="$vuetify.theme.dark"
               :height="$vuetify.breakpoint.smAndDown ? 80 : 160"
    >
        <v-container fluid>
            <v-row>
                <v-container>
                    <v-row align="center">
                        <v-col cols="auto" class="d-flex flex-row">
                            <v-app-bar-nav-icon class="hidden-md-and-up"
                                                @click="$emit('show-navigation')"
                            ></v-app-bar-nav-icon>
                            <router-link :to="{ name: 'home' }">
                                <v-img src="/images/logo.png"
                                       alt="website logo"
                                       max-height="50px"
                                       min-width="100px"
                                       max-width="150px"
                                ></v-img>
                            </router-link>
                            <router-link :to="{ name: 'create-posts' }"
                                         class="mt-3 mr-3 hidden-sm-and-down"
                            >
                                ساخت پست جدید
                            </router-link>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="auto">
                            <v-menu v-model="search"
                                    :close-on-content-click="false"
                                    absolute
                                    top
                                    min-width="100%"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-btn text @click="search = true">
                                        <v-icon>mdi-magnify</v-icon>
                                    </v-btn>
                                </template>
                                <v-list class="d-flex flex-row align-center">
                                    <v-text-field class="mr-10"
                                                  placeholder="در بین مقالات، نویسندگان و… جستجو کنید"
                                                  v-model="form"
                                                  @keyup.enter="pushToSearch"
                                    ></v-text-field>
                                    <v-btn class="ml-10 title"
                                           text
                                           large
                                           @click="search = false"
                                    >x</v-btn>
                                </v-list>
                            </v-menu>
                            <template v-if="! auth">
                                <v-btn :to="{ name: 'login' }"
                                       text
                                       small
                                       color="primary"
                                >ورود</v-btn>
                                <span>/</span>
                                <v-btn :to="{ name: 'register' }"
                                       text
                                       small
                                       color="primary"
                                >ثبت نام</v-btn>
                            </template>
                            <template v-else>
                                <v-btn @click="$emit('show-notification')"
                                       text
                                >
                                    <v-icon>mdi-bell</v-icon>
                                </v-btn>
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on }">
                                        <v-btn v-on="on"
                                               text
                                               fab
                                        >
                                            <v-avatar>
                                                <v-img :src="$store.state.user.user.profile_src"
                                                       max-width="40px"
                                                       max-height="40px"
                                                ></v-img>
                                            </v-avatar>
                                        </v-btn>
                                    </template>
                                    <v-list width="250px">
                                        <v-list-item class="body-2"
                                                     two-line
                                                     :to="{ name: 'profile' }"
                                        >
                                            <v-list-item-content>
                                                <v-list-item-title>{{ name }}</v-list-item-title>
                                                <v-list-item-subtitle>پروفایل من</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item class="body-2"
                                                     :to="{ name: 'my-posts' }"
                                        >
                                            <v-list-item-content>
                                                <v-list-item-title>نوشته های من</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item class="body-2"
                                                     :to="{ name: 'liked-posts' }"
                                        >
                                            <v-list-item-content>
                                                <v-list-item-title>نوشته های مورد پسند من</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item class="body-2"
                                                     :to="{ name: 'bookmarked-posts' }"
                                        >
                                            <v-list-item-content>
                                                <v-list-item-title>نوشته های ذخیره شده من</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item @click.prevent="logout"
                                                     class="body-2"
                                        >
                                            خروج از حساب کاربری
                                        </v-list-item>
                                        <v-divider></v-divider>
                                        <v-list-item @click.prevent="nightMode"
                                                     class="body-2"
                                        >
                                            حالت {{ isDark ? 'روز' : 'شب' }}
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </template>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>
            <v-row class="blue darken-2" v-if="$vuetify.breakpoint.mdAndUp">
                <v-col cols="12">
                    <v-container class="py-0">
                        <v-row>
                            <v-col cols="12" class="py-1">
                                <v-hover v-for="category in $store.state.category.categories"
                                         :key="category.id"
                                         v-slot:default="{ hover }"
                                >
                                    <router-link class="body-2 pl-3"
                                                :class="hover ? 'white--text' : 'blue--text text--lighten-4'"
                                                 :to="{ name: 'post-category', params: { slug: category.slug } }"
                                    >
                                        {{ category.title }}
                                    </router-link>
                                </v-hover>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>

    </v-app-bar>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: "FrontNavbar",

        data() {
            return {
                search: false,
                form: null,
            }
        },

        computed: {
            ...mapState({
                auth: state => state.user.isLoggedIn,
                name: state => state.user.user.name
            }),
            isDark() {
                return this.$vuetify.theme.dark;
            }
        },

        created() {
            this.$store.dispatch('category/getNavbarCategories');
        },

        methods: {
            logout() {
                this.$store.dispatch('user/logout')
                    .then(() => {
                        this.$router.push({ name: 'home' })
                    })
            },
            nightMode() {
                this.$vuetify.theme.dark = ! this.isDark;
                this.isDark ? localStorage.setItem('isDark', 1): localStorage.removeItem('isDark');
            },
            pushToSearch() {
                this.$router.push({
                    name: 'search',
                    params: { type: 'posts' },
                    query: { q: this.form }
                })
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
