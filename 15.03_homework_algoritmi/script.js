/*1 уровень сложности: Составить блок схему следующей задачи:

Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.


Массив 1 - 100 112 256 349 770
Массив 2 - 72 86 113 119 265 445 892
к = 7
Вывод : 256
*/
let A = [100, 112, 256, 349, 770];
let B = [72, 86, 113, 119, 265, 445, 892];
let k = 7;


function findKthElement(A, B, k) {
    let i = 0, j = 0, count = 0, value;

    while (count < k) {
        if (i < A.length && (j >= B.length || A[i] <= B[j])) {
            value = A[i];
            i++;
        } else {
            value = B[j];
            j++;
        }
        count++;
    }

    return value;
}



console.log(findKthElement(A, B, k));  // Вывод: 256