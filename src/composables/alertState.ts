import { reactive } from 'vue';
import type { TemporalAlert } from '@/interfaces/interface';

export const alertInfo = reactive<TemporalAlert>({
  show: false,
  message: ''
});

export const displayTemporalAlert = (message: string) => {
  alertInfo.show = true,
  alertInfo.message = message;

  setTimeout(() => {
    alertInfo.show = false,
    alertInfo.message = '';
  }, 1000);
};
