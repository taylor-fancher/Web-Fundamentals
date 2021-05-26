// function a(){
//     return 35;
// }
// console.log(a())

//Prediciton: No output, function is not called.
//Output: 35

//function a(){
//    return 4;
//}
//console.log(a()+a());

//Prediciton: 8
//Output: 8

// function a(b){
//     return b;
// }
// console.log(a(2)+a(4));

//Prediciton: 6
//Output: 6

// function a(b){
//         console.log(b);
//         return b*3;
//     }
//     console.log(a(3));

//Prediciton: 3, 9
//Output: 3, 9

// function a(b){
//     return b*4;
//     console.log(b);
// }
// console.log(a(10));

//Prediciton: 40, 10
//Output: 40

// function a(b){
//     if(b<10) {
//         return 2;
//     }
//     else     {
//         return 4;
//     }
//     console.log(b);
// }
// console.log(a(15));

//Prediciton: 4
//Output: 4

// function a(b,c){
//     return b*c;
// }
// console.log(10,3);
// console.log( a(3,10) );

//Prediciton: 30
//Output: 10, 3, 30

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

//Prediciton: 30
//Output: 10, 3, 30