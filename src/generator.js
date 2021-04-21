class Generator {
    FizzBuzz() {
        let output='';
        for (let i=1; i<=100; i++){
             output += i + '\n';
        }
        return output;
    }

    FizzBuzz2() {
        let output='';
        for (let i=1; i<=100; i++){
            if (i % 3 === 0)
                output += "Fizz" + '\n';
            else
                output += i + '\n';
        }
        return output;
    }

    FizzBuzz3() {
        let output='';
        for (let i=1; i<=100; i++){
            if (i % 5 === 0)
                output += "Buzz" + '\n';
            else
                output += i + '\n';
        }
        return output;
    }

    FizzBuzz4() {
        let output='';
        for (let i=1; i<=100; i++){
            if ((i % 3 === 0) && (i % 5 === 0))
                output += "FizzBuzz" + '\n';
            else
                output += i + '\n';
        }
        return output;
    }

    FizzBuzz5(){
        let output='';
        for (let i=1; i<=100; i++){
            if (i % 3 === 0)
                output += "Fizz" + '\n';
            else
                output += i + '\n';
        }
        return output;

    }
}

module.exports = Generator
