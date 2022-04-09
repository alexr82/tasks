// Реализуйте возможность используя прототип, чтобы у каждого массива был новый метод, позволяющий удваивать значение каждого элемента с учетом типа данных таким образом, чтобы:
// 1. Для чисел это возведение в квадрат
// 2. Для строк это удваивание строки

// Пример:
// [1, 2, 3] => [1, 4, 9]
// [5, 'Hello', 6] => [25, 'HelloHello', 36]

let numArray = [1,2,3]

Array.prototype.double = function(){
    let result = this.map(function(item){
        if(typeof item === 'number'){
            return item *= item;
        }
        else if(typeof item === 'string'){
            return item += item;
        }
    })
    console.log('result: ', result)
}