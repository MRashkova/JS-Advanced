function solution(num) {
    let number = num;
    return function (secondNum) {
        return secondNum + number;
    }
}
