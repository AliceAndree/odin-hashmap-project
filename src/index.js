import './styles.css';
import { HashMap } from './modules/hashMap';

const hashMap = new HashMap(0.8, 16);

console.log(hashMap.hash('Stephane'));
console.log(hashMap.set('Stephane', 'Fedele'));
console.log(hashMap.set('Alice', 'Thiel'));
