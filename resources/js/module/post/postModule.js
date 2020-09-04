import { computed, reactive, toRefs } from "@vue/composition-api";
import store from '@/store';

export default function postModule() {
    // state
    const data = reactive({
        deletablePost: {},
        deleteDialogPost: false,
        posts: computed(() => store.state.post.posts),
        posts_count: computed(() => store.state.post.posts_count),
    });

    // methods
    const openDeletePostDialog = (index, slug) => {
        data.deleteDialogPost = true;
        data.deletablePost = { index, slug };
    };
    const cancelDeletePost = () => {
        data.deleteDialogPost = false;
        data.deletablePost = {};
    };
    const deletePost = () => {
        store.dispatch('post/deletePost', data.deletablePost);
        data.deleteDialogPost = false;
        data.deletablePost = {};
    };
    const fetchAllPosts = () => store.dispatch('post/fetchAllPosts');

    return {
        ...toRefs(data),
        openDeletePostDialog,
        cancelDeletePost,
        deletePost,
        fetchAllPosts,
    }
}
