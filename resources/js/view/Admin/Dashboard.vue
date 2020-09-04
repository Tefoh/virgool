<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12" class="mt-10">
                    <p class="headline font-weight-bold mb-8">داشبورد</p>

                    <div class="d-flex flex-row justify-space-between">
                        <div class="d-flex flex-row users-count py-5 px-3">
                            <span class="white--text">تعداد کاربران</span>
                            <v-spacer></v-spacer>
                            <span class="white--text">{{ counts.users_count }}</span>
                        </div>
                        <div class="d-flex flex-row posts-count py-5 px-3">
                            <span class="white--text">تعداد پست ها</span>
                            <v-spacer></v-spacer>
                            <span class="white--text">{{ counts.posts_count }}</span>
                        </div>
                        <div class="d-flex flex-row categories-count py-5 px-3">
                            <span class="white--text">تعداد دسته بندی ها</span>
                            <v-spacer></v-spacer>
                            <span class="white--text">{{ counts.categories_count }}</span>
                        </div>
                        <div class="d-flex flex-row comments-count py-5 px-3">
                            <span class="white--text">تعداد نظرات</span>
                            <v-spacer></v-spacer>
                            <span class="white--text">{{ counts.comments_count }}</span>
                        </div>
                    </div>

                    <v-breadcrumbs :items="breadcrumbs" class="mb-10"></v-breadcrumbs>

                    <p class="headline mb-10">پست های ویژه صفحه اصلی</p>
                    <v-autocomplete
                        v-model="model"
                        :items="items"
                        :loading="isLoading"
                        :search-input.sync="search"
                        @change="sendPost"
                        color="white"
                        hide-no-data
                        hide-selected
                        item-text="title"
                        item-value="slug"
                        label="اضافه کردن به پست های ویژه"
                        placeholder="جستجو در همه عنوان و محتوای پست ها"
                        return-object
                        outlined
                    ></v-autocomplete>

                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-right">عکس نوشته</th>
                                <th class="text-right">عنوان نوشته</th>
                                <th class="text-right">نویسنده</th>
                                <th class="text-right"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="featurePost in posts" :key="featurePost.post.slug">
                                <td><v-img :src="featurePost.post.image"
                                           max-width="80px"
                                           max-height="80px"
                                           class="my-3"
                                ></v-img></td>
                                <td>{{ featurePost.post.title }}</td>
                                <td>{{ featurePost.post.user.name }}</td>
                                <td>
                                    <v-btn @click="deleteFeaturePost(featurePost.post.slug)">
                                        <v-icon class="red--text">mdi-delete</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    export default {
        name: "Dashboard",

        metaInfo: {
            title: 'داشبورد ادمین'
        },

        data() {
            return {
                search: null,
                model: null,
                isLoading: false,
                counts: {},
                items: [],
                breadcrumbs: [
                    {
                        text: 'داشبورد',
                        disabled: true,
                        to: { name: 'admin-dashboard' },
                        exact: true
                    },
                ],
                posts: []
            }
        },

        watch: {
            search(value) {
                if (value.length <= 0) return;

                if (this.isLoading) return;

                this.isLoading = true;

                axios.get(`/api/admin/feature-posts-search?q=${value}`)
                    .then(({ data }) => {
                        this.items = data.data;
                    })
                    .finally(() => this.isLoading = false);
            }
        },

        created() {
            this.fetchFeaturePosts();

            axios.get('/api/admin/dashboard')
                .then(({ data }) => {
                    this.counts = data.data;
                });
        },

        methods: {
            sendPost(event) {
                axios.post(`/api/admin/feature-post/${event.slug}`)
                    .then(() => {
                        this.fetchFeaturePosts();
                        this.model = null;
                        this.search = null;
                    });
            },
            fetchFeaturePosts() {
                axios.get('/api/admin/feature-posts')
                    .then(({ data }) => {
                        this.posts = data.posts;
                    });
            },
            deleteFeaturePost(slug) {
                axios.delete(`/api/admin/feature-post/${slug}`)
                    .then(() => {
                        this.fetchFeaturePosts();
                    });
            }
        }
    }
</script>

<style scoped>
.users-count {
    border-radius: .6rem;
    width: 20%;
    background: #b92b27;
    background: -webkit-linear-gradient(to right, #1565C0, #b92b27);
    background: linear-gradient(to right, #1565C0, #b92b27);
}
.posts-count {
    border-radius: .6rem;
    width: 20%;
    background: #11998e;
    background: -webkit-linear-gradient(to right, #38ef7d, #11998e);
    background: linear-gradient(to right, #38ef7d, #11998e);
}
.categories-count {
    border-radius: .6rem;
    width: 20%;
    background: #fc4a1a;
    background: -webkit-linear-gradient(to right, #f7b733, #fc4a1a);
    background: linear-gradient(to right, #f7b733, #fc4a1a);
}
.comments-count {
    border-radius: .6rem;
    width: 20%;
    background: #43C6AC;
    background: -webkit-linear-gradient(to right, #191654, #43C6AC);
    background: linear-gradient(to right, #191654, #43C6AC);
}
</style>
