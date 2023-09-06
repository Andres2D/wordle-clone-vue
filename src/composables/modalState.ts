import { ref } from 'vue';
import type { Ref } from 'vue';

export const modalRef: Ref<boolean> = ref(false);

export const toggleModal = (newValue: boolean) => {
  modalRef.value = newValue;
};
