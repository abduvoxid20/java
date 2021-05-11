const users = Object.assign({}, cartObj());
console.log(users);
let sum = 0,
    list = '';
for (let key in users) {
    sum += users[key].price;
    list += `${key} ${users[key].info}, `
}

console.log(`Sizning buyurtmalaringiz: ${list} |
 yetqazib berish xizmati bilan bo'lgan narx ${sum + 9000} yetqazib berish narxi(9000)`);

























