import { atom } from 'recoil';

export const selectedTimes = atom({
  key: 'selectedTimes',
  default: [],
});

export default selectedTimes;
