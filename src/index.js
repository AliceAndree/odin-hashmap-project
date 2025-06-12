import './styles.css';
import { HashMap } from './modules/hashMap';

const hashMap = new HashMap(0.8, 16);

console.log(hashMap.hash('Stephane'));
console.log(hashMap.hash('Luna'));
console.log(hashMap.set('Stephane', 'Fedele'));
console.log(hashMap.set('Alice', 'Thiel'));
console.log(hashMap.set('Luna', 'Tralala'));

console.log(hashMap.has('Lea'));
console.log(hashMap.has('Stephane'));
console.log(hashMap.has('Luna'));
console.log(hashMap.has('Marion'));
