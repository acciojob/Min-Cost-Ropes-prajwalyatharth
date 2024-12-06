const heapify = require('heapify'); // To use a priority queue for efficient heap operations

function mincost(arr) {
    // Create a min heap from the array
    heapify(arr);

    let totalCost = 0;

    // Keep combining the smallest two ropes until only one rope remains
    while (arr.length > 1) {
        // Extract the two smallest ropes
        const rope1 = arr.pop();
        const rope2 = arr.pop();

        // Calculate the cost of combining these two ropes
        const cost = rope1 + rope2;
        totalCost += cost;

        // Push the combined rope back into the heap
        arr.push(cost);

        // Reheapify the array to maintain the min-heap property
        heapify(arr);
    }

    // Return the total minimum cost
    return totalCost;
}

module.exports = mincost;
