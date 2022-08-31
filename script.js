function oddOrEven(number) {
    var sum = 0;
    var num = number.toString();
    for (var i = 0; i < num.length; i++) {
        sum += parseInt(num[i]);
    }
    if (sum % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
number = prompt("Enter a number");
console.log(oddOrEven(number));
