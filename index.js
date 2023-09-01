const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// Calculate totalBatteries using reduce()
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

// Export the totalBatteries variable so it's accessible in other parts of your code
console.log(totalBatteries);

