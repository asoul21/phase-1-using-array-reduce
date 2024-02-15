const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const intialBatteries = 0;
const totalBatteries = batteryBatches.reduce(
    (accumulator, current) => accumulator + current, intialBatteries,
);
