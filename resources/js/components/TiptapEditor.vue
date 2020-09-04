<template>
    <div>
        <editor-floating-menu :editor="editor"
                              v-slot="{ commands, menu, isActive }"
        >
            <div class="editor__floating-menu"
                 :class="{ 'is-active': menu.isActive }"
                 :style="`top: ${menu.top}px`"
            >
                <v-tooltip top v-for="button in floatingMenuButtons" :key="button.icon">
                    <template v-slot:activator="{ on }">
                        <v-btn class="menubar__button"
                               :class="{ 'is-active': isActive[button.active](button.context) }"
                               @click="commands[button.command](button.context)"
                               small
                               text
                               v-on="on"
                        >
                            <v-icon>mdi-{{ button.icon }}</v-icon>
                        </v-btn>
                    </template>
                    <span>{{ button.tooltip }}</span>
                </v-tooltip>
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn class="menubar__button"
                               :class="{ 'is-active': isActive.image() }"
                               @click.stop="openModal(commands.image)"
                               small
                               text
                               v-on="on"
                        >
                            <v-icon>mdi-image</v-icon>
                        </v-btn>
                    </template>
                    <span>اپلود عکس</span>
                </v-tooltip>
            </div>
        </editor-floating-menu>
        <editor-menu-bubble :editor="editor"
                            v-slot="{ commands, menu, isActive }"
                            :keep-in-bounds="true"
        >
            <div class="menububble"
                 :class="{ 'is-active': menu.isActive }"
                 :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
            >
                <v-btn class="menububble__button"
                       :class="{ 'is-active': isActive[button.active](button.context) }"
                       @click="commands[button.command](button.context)"
                       small
                       text
                       dark
                       v-for="button in bubbleMenuButtons"
                       :key="button.icon"
                >
                    <v-icon>mdi-{{ button.icon }}</v-icon>
                </v-btn>
            </div>
        </editor-menu-bubble>
        <editor-content :editor="editor">
        </editor-content>

        <dropzone-modal ref="dropzone"
                        @image="uploadImage"
        ></dropzone-modal>
    </div>
</template>

<script>
    import {Editor, EditorFloatingMenu, EditorContent, EditorMenuBubble} from 'tiptap'
    import {
        Blockquote,
        CodeBlock,
        HardBreak,
        Heading,
        HorizontalRule,
        OrderedList,
        BulletList,
        ListItem,
        TodoItem,
        TodoList,
        Bold,
        Code,
        Image,
        Italic,
        Link,
        Strike,
        Underline,
        History,
        Placeholder
    } from 'tiptap-extensions'
    import DropzoneModal from "./DropzoneModal";
    import {ref, onUnmounted} from '@vue/composition-api'

    export default {
        name: "TiptapEditor",
        components: {
            DropzoneModal,
            EditorFloatingMenu,
            EditorContent,
            EditorMenuBubble,
        },
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        setup(props, {emit}) {
            // state
            const dropzone = ref(null);
            const bubbleMenuButtons = ref([
                {
                    active: 'italic',
                    command: 'italic',
                    icon: 'format-italic',
                    tooltip: 'ایتالیک',
                    context: {}
                },
                {
                    active: 'bold',
                    command: 'bold',
                    icon: 'format-bold',
                    tooltip: 'درشت',
                    context: {}
                }
            ]);
            const floatingMenuButtons = ref([
                {
                    active: 'heading',
                    command: 'heading',
                    icon: 'format-header-1',
                    tooltip: 'هدر 1',
                    context: {level: 1}
                },
                {
                    active: 'heading',
                    command: 'heading',
                    icon: 'format-header-2',
                    tooltip: 'هدر 2',
                    context: {level: 2}
                },
                {
                    active: 'heading',
                    command: 'heading',
                    icon: 'format-header-3',
                    tooltip: 'هدر 3',
                    context: {level: 3}
                },
            ]);
            const editor = ref(new Editor({
                extensions: [
                    new Blockquote(),
                    new CodeBlock(),
                    new HardBreak(),
                    new HorizontalRule(),
                    new OrderedList(),
                    new BulletList(),
                    new ListItem(),
                    new TodoItem(),
                    new TodoList(),
                    new Bold(),
                    new Code(),
                    new Image(),
                    new Italic(),
                    new Link(),
                    new Strike(),
                    new Underline(),
                    new History(),
                    new Heading({level: [1, 2, 3]}),
                    new Placeholder({
                        emptyEditorClass: 'is-editor-empty',
                        emptyNodeClass: 'is-empty',
                        emptyNodeText: 'هرچیزی که میخای بنویس ...',
                        showOnlyWhenEditable: true,
                        showOnlyCurrent: true,
                    })
                ],
                content: props.value,
                onUpdate: ({getHTML}) => {
                    emit('input', getHTML());
                }
            }));


            // methods
            const openModal = (imageCommand) => {
                dropzone.value.showModal(imageCommand);
            };
            const uploadImage = (data) => {
                data.imageCommand(data.attrs);
            };

            // before destroy
            onUnmounted(() => {
                editor.value.destroy();
            });

            return {
                editor,
                bubbleMenuButtons,
                floatingMenuButtons,
                dropzone,
                uploadImage,
                openModal
            }
        }
    }
</script>

<style scoped>

</style>
