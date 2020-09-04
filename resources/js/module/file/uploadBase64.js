import { ref } from "@vue/composition-api";

export default function uploadBase64(event) {
    const file = event.target.files[0];

    const reader = new FileReader();

    const data = ref(null);
    reader.onload = (image) => {
        data.value = image.target.result;
    };

    reader.readAsDataURL(file);

    return data;
}
