// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix

// is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  

// The left-to-right diagonal =
// . The right to left diagonal = . Their absolute difference is

// .

// Function description

// Complete the

// function in the editor below. It must return an integer representing the absolute diagonal difference.

// diagonalDifference takes the following parameter:

//     arr: an array of integers .

// Input Format

// The first line contains a single integer,
// , the number of rows and columns in the matrix .
// Each of the next lines describes a row, , and consists of space-separated integers

// .

// Constraints

// Output Format

// Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12

// Sample Output

// 15

// Explanation

// The primary diagonal is:

// 11
//    5
//      -12

// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10

// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

// Note: |x| is the absolute value of x


/* Complete the 'diagonalDifference' function below.
*
* The function is expected to return an INTEGER.
* The function accepts 2D_INTEGER_ARRAY arr as parameter.
*/

function diagonalDifference(arr) {
   // Write your code here
   let primary = 0;
   let secondary = 0;
   // we know the 2d matrix is a square so the length of the array
   // is also the length of the inside arrays
   const {length} = arr
   let x = 0; // beginning of array
   let y = length - 1; // end of array
   for (let i = 0; i < length; i++) {
       primary += arr[i][x+i]
       secondary += arr[i][y-i]
   }

   return Math.abs(primary - secondary)
}