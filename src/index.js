import './styles.css';
import { HashMap } from './modules/hashMap';

const hashMap = new HashMap(0.8, 16);

hashMap.set('Alice', 'Thiel');
hashMap.set('Stephane', 'Fedele');
hashMap.set('Luna', 'Tralala');
hashMap.set('Stephane', 'Fafouille');

console.log(hashMap);
console.log(hashMap.has('Alice'));
console.log(hashMap.has('Lina'));
console.log(hashMap.hash('Lina'));
