//array methods
let arr = [12, 23, 34, 66];

console.log(arr.length);
arr[2] = 18;

console.log(arr);
arr[5] = 100;

console.log(arr);

let str3 = arr.toString();
console.log(str3);

let joining = arr.join("-");
console.log(joining);

let r = arr.pop();
console.log(r, arr);

let az = arr.shift(); // Removes first element from array
console.log(az);

let un = arr.unshift(47);
console.log(un);
console.log(arr); //Insert the element at the begining of the original array

for (arr1 = 0; arr1 < arr.length; arr1++) {
    console.log(arr1);
}
console.log("-----------------------------------------");
let arr2 = [14, 48, 5, 9, 6, 5, 2, 78, 6, 3];
let arr3 = [14, 52, 5, 9, 6, 5, 2, 78, 6, 3];

console.log(arr2);
console.log(arr2.length);
delete arr2[5]; // this will delete the array element but the length of the element will not change
console.log(arr2);
console.log(arr2.length);
//
// let arr4 = arr2.concat(arr3)
// console.log(arr4)

console.log(arr3.sort());

let arr5 = [2, 4, 5, 6, 7];
arr5.splice(1, 2, 52, 4700);
console.log(arr5);
let num4 = arr5.slice(2);
console.log(num4);
console.log(
    "--------------------------------------------------------------------"
);

//Looping through array
let arr6 = [1, 2, 3, 4, 5, 6];

//for-each loop
arr6.forEach((elements) => {
    console.log(elements * elements);
});

//array from
let arr7 = "Pratik";
let conversion = Array.from(arr7);
console.log(conversion);

//for of loop
let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i of arr9) {
    console.log(i);
}

//for in loop

for (let items in arr9) {
    console.log(items);
}
console.log(
    "--------------------------------------------------------------------"
);


//Higher Order Array Method

// Map
let array1 = [45, 23, 45, 67];
let array2 = array1.map((value, index, array) => {
    console.log(value, index);
    return value * value;
});
console.log(array2);
console.log(
    "-------------------Map-------------------------------------------------"
);

//Filter Method
let array3 = [10, 2, 30, 450, 56, 67, 80];
let array4 = array3.filter((array4) => {
    return array4 % 10 == 0;
});
console.log(array4);
console.log(
    "-----------------------------Divisible by 10 filter method---------------------------------------"
);

//Reduce Method
let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array6 = array5.reduce((h1, h2) => {
    return h1 * h2;
});
console.log(array6);
console.log();
"-----------------------------Reduce Factorial---------------------------------------"


//explain by nitin sir
const json = {
    columns: [
        {
            type: "LINK",
            rows: [
                {
                    title: "Shop By Style",
                },
            ],
        },
        {
            type: "LINK",
            rows: [
                {
                    title: "Shop By Shape",
                },
            ],
        },
        {
            type: "LINK",
            rows: [
                {
                    title: "Shop By Stone Type",
                },
            ],
        },
        {
            type: "LINK",
            rows: [
                {
                    title: "Design Your Own",
                },
                {
                    title: "Featured",
                },
            ],
        },
        {
            type: "IMAGE",
            rows: [
                {
                    title: null,
                },
            ],
        },
    ],
};

const countries = [
    {
        id: 1,
        abbrivation: "IN",
        name: " India",
        status: 1,
    },
    {
        id: 2,
        abbrivation: "US",
        name: "USA",
        status: 1,
    },
    {
        id: 3,
        abbrivation: "CA",
        name: "Canada",
        status: 1,
    },
];

let result = json.columns.map((column) => column.type);
let options = countries.map((country) => {
    return {
        label: country.name,
        value: country.abbrivation,
    };
});

console.log(
    countries,
    options.filter((option) => ["US", "IN"].includes(option.value))
);
