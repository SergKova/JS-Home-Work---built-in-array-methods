'use strict'

// Task 1
// Даны два массива - [1, 2, 3] и [4, 5, 6]. Объедините их вместе (concat)

const arraynum1 = [1, 2, 3];
const arraynum2 = [4, 5, 6];

const arraynum3 = arraynum1.concat(arraynum2);


// Task 2
// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1](reverse).

const arrayRev = [1, 2, 3];

arrayRev.reverse();
console.log(arrayRev);

// Task 3
// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6

const arrTask3 = [1 ,2, 3];

arrTask3.push(4, 5, 6);
console.log(arrTask3);

// Task 4
// Дан массив [1, 2, 3]. Добавьте ему в начало 7, 8, 9.

const arrayTask4 = [1, 2, 3];

arrayTask4.unshift(7, 8, 9);
console.log(arrayTask4);

// Task5
// Дан массив ['aaa', 'bbb', 'ccc']. Выведите на экран первый элемент и удалите его.

const arrayTask5 = ['aaa', 'bbb', 'ccc'];
console.log(arrayTask5.shift());

// Task6
// Дан массив ['ddd', 'fff', 'eee']. Выведите последний элемент на экран.

const arrayTask6 = ['ddd', 'fff', 'eee'];
console.log(arrayTask6.pop());

// Task7
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый массив элементы с третьего по пятый.

const arrayTask7 = [1, 2, 3, 4, 5];

const newArrayTask7 = arrayTask7.slice(2);
console.log(newArrayTask7);

// Task8
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый массив элементы со второго по четвертый.

const arrayTask8 = [1, 2, 3, 4, 5];

const newArrayTask8 = arrayTask8.slice(1, 4);
console.log(newArrayTask8);

// Task9
// С помощью метода splice из массива [1, 2, 3, 4, 5] сделайте массив [1, 4, 5]
const arrayTask9 = [1, 2, 3, 4, 5];
const newArrayTask9 = arrayTask9.splice(1, 2);
console.log(arrayTask9);


// Task10
// С помощью метода splice из массива [1, 2, 3, 4, 5] запишите в новый массив элементы [2, 3, 4].

const arrayTask10 = [1, 2, 3, 4, 5];
const newArrayTask10 = arrayTask10.splice(1, 3);
console.log(newArrayTask10);


// Task11
// С помощью метода splice из массива [1, 2, 3, 4, 5] сделайте массив [1, 'w', 'tr', 2, 3, 4, 'vv', 5, 'a']

const arrayTask11 = [1, 2, 3, 4, 5];
arrayTask11.splice(1, 0,'w','tr');
arrayTask11.splice(6, 0, 'vv');
arrayTask11.splice(8, 0,'a');
console.log(arrayTask11);

// Task12
// Дан массив [5, 8, 2, 4, 7, 1]. Отсортируйте его по возрастанию.

const arrayTask12 = [5, 8, 2, 4, 7, 1];

arrayTask12.sort();
console.log(arrayTask12);


