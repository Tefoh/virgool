import { reactive, computed, toRefs } from '@vue/composition-api';
import store from '@/store'

export default function draftModule() {
    // state
    const data = reactive({
        deletableDraft: {},
        deleteDialogDraft: false,
        drafts: computed(() => store.state.draft.drafts),
        drafts_count: computed(() => store.state.draft.drafts_count),
    });

    // methods
    const openDeleteDraftDialog = (index, link) => {
        data.deleteDialogDraft = true;
        data.deletableDraft = { index, link };
    };
    const cancelDeleteDraft = () => {
        data.deleteDialogDraft = false;
        data.deletableDraft = {};
    };
    const deleteDraft = () => {
        store.dispatch('draft/deleteDraft', data.deletableDraft);
        data.deleteDialogDraft = false;
        data.deletableDraft = {};
    };
    const fetchAllDrafts = () => store.dispatch('draft/fetchAllDrafts');

    return {
        ...toRefs(data),
        openDeleteDraftDialog,
        cancelDeleteDraft,
        deleteDraft,
        fetchAllDrafts,
    }
}
