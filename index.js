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


