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
