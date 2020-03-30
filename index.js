const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function accum(total, init) {
    return total + init
}

let totalBatteries = batteryBatches.reduce(accum, 0)