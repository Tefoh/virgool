<template>
    <div class="mt-8">
        <v-card class="mx-auto">
            <div class="d-flex flex-row">
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img :src="comment.user.profile_src"
                        ></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{ comment.user.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ moment(comment.created_at).fromNow() }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-spacer></v-spacer>
                <v-icon class="pl-5"
                        v-if="canShowDeleteOrUpdate"
                        @click="deleteComment"
                >mdi-delete</v-icon>
                <v-icon class="pl-5"
                        v-if="canShowDeleteOrUpdate"
                        @click="showUpdateTextarea"
                >mdi-file-document-edit</v-icon>
                <v-icon class="pl-5"
                        v-if="$store.state.user.isLoggedIn"
                        @click="showReply = true"
                >mdi-undo</v-icon>
            </div>

            <v-card-text>
                {{ comment.content }}
            </v-card-text>
        </v-card>
        <div class="mt-12" v-if="showReply || showUpdate">
            <p>پاسخ ها</p>
            <v-textarea label="پاسخ خود را بنویسید"
                        outlined
                        filled
                        v-model="reply.content"
            ></v-textarea>
            <div class="d-flex flex-row">
                <v-spacer></v-spacer>
                <v-btn color="info"
                       large
                       rounded
                       @click="cancelReply"
                       class="ml-3"
                >لغو</v-btn>
                <v-btn color="success"
                       large
                       rounded
                       @click="saveComment"
                >ارسال پاسخ</v-btn>
            </div>
        </div>

        <post-comments v-for="commentData in comment.replies"
                       :key="commentData.id"
                       :data="commentData"
                       class="mr-3"
        ></post-comments>
    </div>
</template>

<script>
    import { ref, computed } from '@vue/composition-api';
    import EventBus from "@/Service/EventBus";

    export default {
        name: "PostComments",

        props: {
            data: {
                type: Object
            }
        },

        setup(props, { root }) {
            // state
            const showReply = ref(false);
            const showUpdate = ref(false);
            const reply = ref({
                content: null,
                comment_id: props.data.id
            });
            const comment = ref(props.data);

            const canShowDeleteOrUpdate = computed(() => {
                return root.$store.state.user.isLoggedIn
                    && root.$store.state.user.user.id === comment.value.user_id
            });

            // methods
            const saveComment = () => {
                return showReply.value ? saveReply() : updateComment();
            };
            const saveReply = () => {
                axios.post(`/api/replies/${root.$route.params.slug}`, reply.value)
                    .then(({ data }) => {
                        cancelReply();
                    }).catch(({ response }) => {
                        EventBus.$emit('error', response.data.errors.content[0]);
                    })
            };
            const updateComment = () => {
                axios.patch(`/api/comments/${comment.value.id}`, reply.value)
                    .then(({ data }) => {
                        cancelReply();
                        comment.value.content = data.data.content;
                    }).catch(({ response }) => {
                        EventBus.$emit('error', response.data.errors.content[0]);
                    })
            };
            const cancelReply = () => {
                reply.value.content = null;
                showReply.value = false;
                showUpdate.value = false;
            };
            const deleteComment = () => {
                axios.delete(`/api/comments/${comment.value.id}`)
            };
            const showUpdateTextarea = () => {
                showUpdate.value = true;
                reply.value.content = comment.value.content;
            };

            // created hook
            Echo.channel(`virgool_reply_${props.data.id}`)
                .listen('.reply.created', ({ reply }) => {
                    comment.value.replies.push(reply);
                    EventBus.$emit('comment_created');
                });
            Echo.channel(`virgool_reply_${props.data.id}`)
                .listen('CommentDeletedEvent', (event) => {
                    comment.value.replies = comment.value.replies.filter(c => c.id !== event.comment.id);
                    EventBus.$emit('comment_deleted');
                });

            return {
                showUpdate,
                showReply,
                reply,
                comment,
                saveComment,
                cancelReply,
                moment,
                canShowDeleteOrUpdate,
                deleteComment,
                showUpdateTextarea
            }
        }
    }
</script>

<style scoped>

</style>
