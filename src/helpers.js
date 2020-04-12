function choice(arr, color) {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * arr.length);
    } while (color === arr[randomIndex])
    return arr[randomIndex];
}

export { choice };