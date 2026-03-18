function calculator(a, b, oprator){


if (oprator == "+") {
    return a + b;
}
if (oprator == "-") {
    return a - b;
}
if (oprator == "*") {
    return a * b;
}
if (oprator == "/") {
    return a / b;
}
}
console.log(calculator(5, 10, "+"));
console.log(calculator(5, 10, "-"));
console.log(calculator(5, 10, "*"));
console.log(calculator(6, 4, "/"));
