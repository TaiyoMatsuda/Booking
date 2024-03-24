import { atom } from 'recoil';

const signInStatus = atom({
  key: 'signInState',
  default: false,
});

export default signInStatus;
