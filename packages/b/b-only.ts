import { API } from '@lib/a/api'
import b1 from './b-only1';

const b: API = () => 'Hello from only b'
export const c = () => b1;
export default b
