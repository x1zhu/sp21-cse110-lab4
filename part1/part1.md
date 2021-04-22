# Part1a
var declaration
1. 20
2. 20
   
let declaration
1. 20
2. It returns an error, because "let" can only be accessed within the block.
   
const declaration
1. Both 1 and 2 will return an error, because we set the result to a const, so we can't change it later.
2. Both 1 and 2 will return an error, because we set the result to a const, so we can't change it later.

# Part1b
1. The output is 3, what we return is i, i is the iteration times, and we can see that the iteration times is the length of the prices, and we have three prices in total, thus the output is 3.
2. The output is 150, what we return this time is discountedPrice, our last price is 300, and after the discount which is half of the original price, thus it is 150.
3. The output is 150, after we know the discounted price is 150, we end the iteration, then we push the discounted price to our final price, so these two prices are the same which is 150.
4. The output is empty, what we did in our code don't have any operations on discounted, and we initialize it to an empty list at the beginning, so when we return it, it still be an empty list.
5. It causes an error, because we are using let here, we define the i inside the {}, thus we will get the error.
6. Same as above, we define it using let here, so outside the {}, we will get the error.
7. The output is 150, since we explain in the previous question, we know the final price shold be 150, but why it will work here? Because although we declare it using let, but as you can see, we didn't do it inside the {} this time, they are outside, so it will work and won't return any error.
8. Same as before, it will return an empty list, because we declare it outside, thus we won't get the error.
9. It will return an error, because we are using let to declare the i and it is inside the {}, thus it will output the error.
10. This will output 3, we declare length as a const at the beginning, and its value is the length of the prices, so it will output 3.
11. We declare this using const and set it as an empty list, so the output will give us an empty list as well.


Data Types

12. 
- A: console.log(student.name);
- B: console.log(student['Grad Year']);
- C: student.greeting();
- D: console.log(student['Favorite Teacher'].name);
- E: console.log(student.courseLoad[0]); 

Basic Operators & Type Conversion

13. Arithmetic
- A: 32; Because the first 3 is with the '', so the compiler treat it as a string, and this will return the combination of the string.
- B: 1; This time, system treat it as a number, so the result will return 3 - 2 which is 1.
- C: 3; Null here will be treated as 0, so the result will return the value of 3 + 0.
- D: 3null; Here, both 3 and null will be treated as string, and after we add them together, we will get 3null.
- E: 4; True here will be treated as '1', so the result will return their sum.
- F: 0; Both of them will be treated as integer 0, so the sum of two 0 will still be 0.
- G: 3undefined; Both of them here will be treated as string, so the result will return the combination of stirng.
- H: NaN; Two different types cannot substract each other, so the result will return 'not a number'.

14. Comparison
- A: true; Here '2' will be treat as a number 2, and 2 is obviously greater than 1, thus will return true.
- B: false; Dictionary comparison, first char 2 is greater than 1, so will return false.
- C: true; Here I think both of them will be treated as number, then they are equal to each other.
- D: false; Because we are using strict comparison here, they don't have the same type, thus will return false.
- E: false; True will be assign to 1 here, so they are different, thus retuern false.
- F: true; Bollean(2) will return true, thus they have the same type, so it will return true.

15. === is the strict comparison, == is the normal one, difference between them is === will also compare the type, == won't compare the type. For example, '2' and 2, if we use ==, it will return true because in this case == will ignore the type. But if we use ===, then it will return false, because they have the difference type, string and int.

Loops

16. See part1b-question16.js file