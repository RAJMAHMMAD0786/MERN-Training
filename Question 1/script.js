// Write the program to greet a person given their first and last name

let firstName = "Raj"

let secondNmae = "Mahmmad"

console.log("Namaste" + firstName + " " + secondNmae)


// print all the even number in the array

let arr = [10, 20, 30, 40,13,45];
console.log(arr);

for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 == 0) {
        console.log("The even number is :",arr[i])
    }
}


// write a program to print the biggest number in an array

let arr1=[1,2,11,114,20,10,100];

let BiggestNumber=arr1[0];

for(let i=0;i<arr1.length;i++)
{
    if(arr1[i]>BiggestNumber)
    {
        BiggestNumber=arr1[i];
    }
}

console.log("The Biggest Number in the Array is :->",BiggestNumber);


// write a program and reverse the given array
let arr2=[1,2,3,4,5];

let n=arr2.length;

console.log("Before Reverse the Array is :")
console.log(arr2);


console.log("After Reverse the Array is :");

let start=n;
let end=n-1;

for(let i=n;i<n-1;i++)
{
    swap(n[start],n[end])
    start++;
    end--;
}

