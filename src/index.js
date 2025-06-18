import './styles.css';
import { HashMap } from './modules/hashMap';

const hashMap = new HashMap(0.8, 16);

hashMap.set('Alice', 'Thiel');
hashMap.set('Stephane', 'Fedele');
hashMap.set('Luna', 'Tralala');
hashMap.set('Lola', 'Hey');
hashMap.set('Tony', 'Santaniello');
// hashMap.set('Isaac', 'Hihi');
// hashMap.set('Molly', 'Huhu');
// hashMap.set('Lou', 'Miou');
// hashMap.set('Stephane', 'Fafouille');

hashMap.set('apple', 'red');
hashMap.set('banana', 'yellow');
hashMap.set('carrot', 'orange');
hashMap.set('dog', 'brown');
hashMap.set('elephant', 'gray');
hashMap.set('frog', 'green');
hashMap.set('grape', 'purple');
hashMap.set('hat', 'black');
hashMap.set('ice cream', 'white');
hashMap.set('jacket', 'blue');
hashMap.set('kite', 'pink');
hashMap.set('lion', 'golden');

// hashMap.clear();

// hashMap.remove('Alice');
// hashMap.remove('Stephane');
// console.log(hashMap.get('Stephane'));
console.log(hashMap);
// console.log(hashMap.keys());
// console.log(hashMap.values());
// console.log(hashMap.entries());
// console.log(hashMap.length());
// console.log(hashMap.isFilled());
