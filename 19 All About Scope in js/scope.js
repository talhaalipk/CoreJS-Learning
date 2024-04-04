/*
    * MAIN Scope (Global)
    
        * --> Global / Window  (for var , function)
        * --> Script (For let const)


    * Function Scope

        * >>>> Both (var , let & const) are function scope


    * Block Scope (for , loops , if else , switch)

        * --> var is not block scope
        * --> Let and const are block scope


    * Lexical Scope

    ``
        function outer() {
                let outerVar = "outer";

                function inner() {
                    let innerVar = "inner";
                    console.log(outerVar); // Can access outerVar because of lexical scope
                    console.log(innerVar);
                }

                inner();
            }

            outer();
    ``

    * function scope from its to parent up to global scope
    
*/