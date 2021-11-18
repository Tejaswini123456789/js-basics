//problem 1
//code for how many times character will occur in the sentence

//test 1
function findFreq(str, char) {

    const b = str.match(/m/gi);
    return b;

}
console.log(findFreq("i like mountains ,Mounteverst,mysore"));

//test 2
function fFreq(str, char) {

    const c = str.match(/e/gi);
    return c;
}
console.log(fFreq("i like mountains ,Mounteverst,mysore"));

//problem 2
//test 1

function areAllEqual(arr) {
    for (var i = 1; i <= arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            return true;
        } else {
            return false;

        }
    }

}
console.log(areAllEqual(['test', 'test', 'test']));

//test 2
function AllEqual(arr) {
    for (var i = 1; i <= arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            return true;
        } else {
            return false;

        }
    }

}
console.log(AllEqual([1, 1, 5, 6]));

//problem 3
//test 1
function subArray(arr, n) {
    const array = arr.splice(n + 1);
    return array;


}
console.log(subArray([1, 2, 3, 4, 5], 2))

//test 2

function subArray1(arr, n) {
    const array1 = arr.splice(-n);
    return array1;


}
console.log(subArray1([1, 2, 3], 6))