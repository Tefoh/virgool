<template>
    <v-navigation-drawer right
                         app
                         temporary
                         :value="value"
                         @input="changeDrawer"
    >
        <v-list>
            <v-list-item>
                <v-list-item-content>
                    <router-link :to="{ name: 'create-posts' }">
                        ساخت پست جدید
                    </router-link>
                </v-list-item-content>
            </v-list-item>
            <v-list-item v-for="category in $store.state.category.categories"
                         :key="category.slug"
            >
                <v-list-item-content>
                    <router-link :to="{ name: 'post-category', params: { slug: category.slug } }">
                        {{ category.title }}
                    </router-link>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "FrontNavigationDrawer",

        props: ['value'],
        methods: {
            changeDrawer(event) {
                this.$emit('input', event)
            }
        }
    }
</script>

<style scoped>

</style>
