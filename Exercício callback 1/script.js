function reduceArray(nums, callback, valorInicial) {
    let vFinal = valorInicial;
    for (let i = 0; i < nums.length; i++) {
        vFinal = callback(vFinal, nums[i]);
    }
    return vFinal;
}

console.log(
    reduceArray([1, 2, 3, 4, 5], (a, b) => a * b, 1)
);

