import { atom } from 'recoil';

export const tmpBookedDate = atom({
  key: 'tmpBookedDate',
  default: new Date(),
});

export default tmpBookedDate;
