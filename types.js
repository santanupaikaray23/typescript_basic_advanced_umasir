// let myString: string="Hello World";
// let myNum: number
// let mybool:boolean
// myNum = 10;
// mybool=true
var employee = [1, "Santanu"];
console.log(employee);
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
var Week;
(function (Week) {
    Week["Monday"] = "1";
    Week["Tuesday"] = "2";
    Week["Wednesday"] = "3";
    Week["Thursday"] = "4";
    Week["Friday"] = "5";
    Week["Saturday"] = "6";
})(Week || (Week = {}));
console.log(Week);
