const path = require('path')

console.log(path.join('./a', './b', './c', './d'));
console.log(path.join('/a', '/b', '/c', '/d'));
console.log(path.join('a', 'b', 'c', 'd'));
console.log(path.join('a', 'b', 'c', '../../d'));


console.log(path.basename('a/b/c/index.html'));
console.log(path.basename('a/b/c/index.html', '.html'));


console.log(path.extname('a/b/c/index.js'));
console.log(path.basename('a/b/c/index.html', path.extname('a/b/c/index.html')));