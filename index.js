        //Objects // Non primitive data type
        // console.log("JS file loaded!");

        // let person = {
        //     age: 20,
        //     name: "Patrick",
        //     lastName: "Iradukunda",


        // };
        // person.name="James"; This change the name to James instead of being Patrick by using dot notation
        // console.log(person);
        // console.log(person.age); This is to referencing the value of age


        // Arrays// Non premitive data type
        // let fruits = ["Mango", "Banana", "Apple"];
        // console.log(fruits);
        // console.log(fruits[2])
        // fruits.pop("Mango");
        // console.log(fruits)

        // Functions
        // function old (age) {
        //     // console.log("My name is Patrick and I'm " + " " + age + " " + "years old" )
        // }
        // old(20)
        function greet (name, lastName){
            console.log("Hello" + " " + name + " " + lastName)
            console.log("Hello, My name is" + " " + name + " " + lastName )
        }
        greet("Patrick", "Iradukunda");

        //Calculate a value using a function and retrun keyword//

        function calculateAge (age1){
            let age2= 1995
            return(age1-age2);
        }

        console.log(calculateAge(2002));

        // Defining a function with expression and without expression

        //Without expression

        function sayMyName(){
        console.log("Hey, Patrick")
        }

        sayMyName();

        //Declaring a function with expression
        let sum= function(number1, number2){
            console.log(number1 + number2)
        }
        sum(10, 15);

        //Declaring a function and execute the codes with "return keyword" which is going to serve as console.log

        const calc = function(a, b){
            
            console.log(a*b)
        }

        calc(4, 5);

        //Default parameters: This is the way of assigning specific value to the parameter so incase
        //Codes executed return something valuable instead of returning NaN value.

        // const add= function (x, y){
        //     console.log(x*y)
        //     return x*y;
        // }
        // add(2);

        //When the above code is run, it will return a NaN which is not a number value.
        //So, to fix this issue we use default parameters method.

        const add= function (x, y=0){
            console.log(2*(x+y))
            return x*y;
        }
        add(2);
        //The above code will return a valid value by using default parameter whereby
        //we assumed that the second parameter would be at least equalized with specific value.

        //Rest parameter: this is the method by which a function is capable of holding two parameters
        //but exceptionally the second one will hold array values"bunch of values".
        //1.Rest parameter must be only
        //2.|Rest parameter must be the last one.

        const collectItems = function(x, ...y){
            console.log(x)
            console.log(y)
        }
        collectItems(19, 2,3,6,7,8);
        //The above parameters specifically for the second one is the rest parameter with three dots
        //those dots allow the function to hold as many values as you want but it will represent them
        //as an array in the browser.

        //Arrow function:

        const multiply = (x, y) => {
            console.log(x*y)
            return x*y;
        }
        multiply(2, 4);

        //Other way when the definition or statement in the function body "argument" is made of only one line.

        const multiplication = (x, y) => x*y;
        
        multiplication(2,3);
        

        //Nested functions
        //This is the way of dealing a function within another function.
        //Example

        function subtract(x, y){
            console.log(x - y);
            function subtract2(x, y){
                console.log(x - y)
            }
            subtract2(4, 5);
        }
        subtract(8, 5);

        


