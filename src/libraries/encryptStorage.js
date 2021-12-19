import {EncryptStorage} from 'encrypt-storage';
import {SECRET_KEY} from '~/constants/variable';

// eslint-disable-next-line new-cap
export const encryptStorage = new EncryptStorage(SECRET_KEY);
