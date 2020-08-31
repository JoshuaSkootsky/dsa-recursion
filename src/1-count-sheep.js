// I need some sleep
// You can't go home like this
// I try counting sheep
// But there's one I always miss
function sheep(n) {
    if (n < 0) return;
    if (n === 0) console.log('All sheep jumped over the fence');
    else {
        const sheepString = `${n}: Another sheep jumps over the fence`
        console.log(sheepString);
        sheep(n-1);
    }
}

sheep(3);