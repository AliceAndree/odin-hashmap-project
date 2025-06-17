import './styles.css';
import { HashMap } from './modules/hashMap';

const hashMap = new HashMap(0.8, 16);

hashMap.set('Alice', 'Thiel');
hashMap.set('Stephane', 'Fedele');
hashMap.set('Luna', 'Tralala');
hashMap.set('Stephane', 'Fafouille');

// hashMap.remove('Alice');
// hashMap.remove('Stephane');

console.log(hashMap);
console.log(hashMap.length());
