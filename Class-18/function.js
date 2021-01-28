// nums = [3, 44, 55, 77, 93, 1099, 266];

// for (let i = 0; i < nums.length; i++) {

//     const num = nums[i];
//     //console.log(num);

//     //onsole.log(num*3);  //if you want see make every number are double then us this code :  console.log(num*3);
//     //...now you want make out from this numbers which  one are Odd Numbers and witch Numbers are EVen numbers:
//     if (num % 2 == 0) {

//         console.log(num, 'It is Even Number');
//     }
//     else {

//         /** Make  now all odd numbers are Even Number 
//         console.log(num, 'It is Odd Number');
//      */
//         console.log(num * 2, 'It is Odd Number');
//     }
// }

// //  output come: 

// // $ node function.js
// // 3 It is Odd Number
// // 44 It is Even Number
// // 55 It is Odd Number
// // 77 It is Odd Number
// // 93 It is Odd Number
// // 1099 It is Odd Number
// // 266 It is Even Number
// //=======================================================================

// // Friends age count which one are even age and which one are Odd number age  : 


// age = [10, 33, 55, 66, 23, 99, 41, 34];
// for (let i = 0; i < age.length; i++) {

//     const friendsage = age[i];
//     if (friendsage % 2 == 0) {

//         console.log(friendsage, ' This is Even number Age')
//     }
//     else {
//         console.log(friendsage, ' This is Odd number Age')

//     }
// }
//Above two process we can declare under the one function
function evenify(num) {  

    if (num % 2 == 0) {

        console.log(num, 'It is Even Number');
    }
    else {

        /** Make  now all odd numbers are Even Number 
        console.log(num, 'It is Odd Number');
     */
        console.log(num * 2, 'It is Odd Number');
    }
}
    nums = [3, 44, 55, 77, 93, 1099, 266];

    for (let i = 0; i < nums.length; i++) {

        const num = nums[i]
       
        evenify(num)

    }
//Out Put work : 
// It is Odd Number
// 44 It is Even Number
// 110 It is Odd Number
// 154 It is Odd Number
// 186 It is Odd Number
// 2198 It is Odd Number
// 266 It is Even Number 
    

