var basketball = ['bulls','clippers', 'bucks'];
console.log (basketball);
for (let x = 0; x < basketball.length; x++) {
    console.log(x);
    console.log(basketball[x]);
}
basketball.forEach(bas => {
    console.log(bas);
});
var fish = basketball.map(item =>{
    return item + 'hawks';
});
console.log(fish);
var hooks = basketball.filter(item =>{
    return item.length > 2;
});
console.log(hooks);