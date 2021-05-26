var temp = 0;

for (var i = 0; i < arr.length; i++) {
    temp = arr[i];
    if (arr[i]=arr[0]) {
        arr[i]=arr[arr.length-1];
    }
    arr[arr.length-1] = temp;
}