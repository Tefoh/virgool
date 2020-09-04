<template>
    <v-dialog v-model="imageModal"
              max-width="360px"
    >
        <v-card>
            <v-card-title>عکس خود را اپلود کنین</v-card-title>

            <vue-dropzone id="dropzone"
                          ref="dropzone"
                          :options="dropzoneOptions"
                          @vdropzone-success="upload"
            ></vue-dropzone>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="imageModal = false"
                >
                    بستن
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import VueDropzone from "vue2-dropzone";
    import { ref } from '@vue/composition-api';

    export default {
        name: "DropzoneModal",
        components: {
            VueDropzone
        },
        setup(props, { emit }) {
            // state
            const dropzone = ref(null);
            const imageModal = ref(false);
            const imageCommand = ref(false);
            const dropzoneOptions = ref({
                url: '/api/upload-post-image',
                maxFiles: 1,
                headers: {
                    'X-CSRF-TOKEN': window.csrf_token
                }
            });

            // methods
            const showModal = (command) => {
                imageModal.value = true;
                imageCommand.value = command
            };
            const upload = (file, response) => {
                const data = {
                    imageCommand: imageCommand.value,
                    attrs: {
                        src: response.data
                    }
                };
                emit('image', data);
                imageModal.value = false;
                imageCommand.value = null;

                dropzone.value.removeFile(file);
            };

            return {
                imageCommand,
                imageModal,
                dropzoneOptions,
                showModal,
                upload,
                dropzone
            }
        }
    }
</script>

<style scoped>

</style>
