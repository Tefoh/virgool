<template>
    <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items.data"
        :server-items-length="total"
        @update:options="updateOptions"
        :loading="loading"
        loading-text="دریافت اطلاعات..."
        :footer-props="footerProps"
        :options.sync="options"
        :single-select="singleSelect"
        no-data-text="هیچ رکوردی یافت نشد!!!"
        :item-key="itemKey"
        show-select
        class="elevation-1"
    >
        <template v-slot:top>
            <div class="d-flex flex-row pt-5 px-5">
                <p class="headline font-weight-bold">{{ titleText }}</p>
                <v-spacer></v-spacer>
                <v-text-field label="جستجو"
                              v-model="search"
                              @keyup="searchItems"
                              class="ml-3"
                ></v-text-field>
                <v-btn color="info"
                       :to="{ name: createItemRoute }"
                       class="ml-3"
                       v-if="createItemRoute"
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-btn @click="deleteItems"
                       :disabled="! selected.length"
                       v-if="deleteUrl"
                >
                    <v-icon class="red--text">mdi-delete</v-icon>
                </v-btn>
            </div>
        </template>
        <template v-slot:item.created_at="{ item }">
            {{ moment(item.created_at).format('jYY-jM-jD') }}
        </template>
        <template v-slot:item.image="{ item }">
            <v-img :src="item.image"
                   max-width="100px"
                   max-height="100px"
                   class="my-3"
            ></v-img>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-btn color="info"
                   :to="{ name: editRoute, params: { id: item.id }  }"
                   v-if="editRoute"
            >
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
        </template>
        <template v-slot:item.link="{ item }">
            <v-btn :to="{ name: showRoute, params: { [itemKey]: item[itemKey] }  }"
                   v-if="showRoute"
            >
                <v-icon>mdi-eye</v-icon>
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
    import moment from "moment-jalaali";
    import { debounce } from "lodash";

    export default {
        name: "BaseDataTable",

        props: {
            fetchUrl: {
                type: String,
                required: true
            },
            routeName: {
                type: String,
                required: true
            },
            titleText: {
                type: String,
                required: true
            },
            itemKey: {
                type: String,
                default: 'id'
            },
            deleteUrl: {
                type: String,
                required: false
            },
            createItemRoute: {
                type: String,
                required: false
            },
            editRoute: {
                type: String,
                required: false
            },
            showRoute: {
                type: String,
                required: false
            },
        },

        data() {
            return {
                moment,
                search: this.$route.query.search,
                singleSelect: false,
                selected: [],
                headers: [],
                items: [],
                total: null,
                loading: false,
                footerProps: {
                    'items-per-page-options': [5, 10, 25, 50],
                    'items-per-page-text': 'تعداد رکورد در هر صفحه:',
                    'page-text': ''
                },
                options: {
                    page: this.$route.query.page ?? 1,
                    itemsPerPage: this.$route.query.per_page ?? 10,
                    sortBy: this.$route.query.sort_by ? [this.$route.query.sort_by] : ['id'],
                    sortDesc: this.$route.query.sort_type === 'desc' ? [true] : [false],
                    groupBy: [],
                    groupDesc: [],
                    multiSort: false,
                    mustSort: false,
                }
            }
        },

        computed: {
            selectedIds() {
                return this.selected.map(item => item.id);
            }
        },

        created() {
            this.fetchItems();
        },

        methods: {
            deleteItems() {
                axios.post(this.deleteUrl, { items: this.selectedIds })
                    .then(() => {
                        this.items.data = this.items.data.filter(item => ! this.selected.includes(item));
                    }).finally(() => this.selected = [])
            },
            updateOptions(options) {
                const params = this.createQuery(options);

                this.$router.push({ name: this.routeName, query: params }, () => {});
            },
            fetchItems() {
                const params = this.createQuery(this.options);

                this.loading = true;
                axios.get(this.fetchUrl, { params })
                    .then(({ data }) => {
                        this.headers = data.headers;
                        this.items = data.items;
                        this.total = data.items.total;
                        this.options.page = data.items.current_page;
                        this.options.itemsPerPage = Number(data.items.per_page);
                        this.footerProps['page-text'] = `${this.items.from}-${this.items.to} از ${this.items.total}`;
                    }).finally(() => this.loading = false);
            },
            searchItems: debounce(function () {
                this.options.page = 1;
                this.updateOptions(this.options);
            }, 500),
            createQuery(options) {
                return {
                    page: options.page,
                    per_page: options.itemsPerPage,
                    sort_by: options.sortBy[0],
                    sort_type: options.sortDesc[0] === true ? 'desc' : 'asc',
                    search: this.search
                };
            }
        }
    }
</script>

<style scoped>

</style>
