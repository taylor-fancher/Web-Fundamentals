var max = arr[0];
var min = arr[0];
var sum = 0;

for ( var i = 1; i < arr.length; i++) {
    if ( arr[i] < min) {
        min = arr[i];
    }
    else if ( arr[i] > max) {
        max = arr[i];
    }
    else {
        sum = sum + arr[i];
    }
    console.log(max);
    console.log(min);

    var avg = sum / arr.length;

    console.log(arr);
}