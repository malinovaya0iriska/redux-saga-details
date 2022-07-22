function* counter() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const g = counter();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
