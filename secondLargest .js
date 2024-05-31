function secondLargest(arr) {
    // Sort array in descending order
    arr.sort(function(a, b) {
        return b - a;
    });

    // Return the second element
    return arr[1];
}

// Contoh penggunaan:
console.log(secondLargest([10, 5, 20, 8])); // Output: 10
console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4
