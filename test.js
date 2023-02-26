const can1 = {
    flavor: 'grapefruit',
    ounces: 12,
};
const can2 = {
    flavor: 'grapefruit',
    ounces: 12,
};

console.log(can1 === can2);
// eslint-disable-next-line eqeqeq
console.log(can1 == can2);

console.log(Object.is(null, null));
console.log(undefined === undefined);
