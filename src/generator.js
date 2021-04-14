class Generator {
    FizzBuzz() {
        let output='';
        for (let i=1; i<=100; i++){
             output += i + '\n';
        }
        return output;
    }
}

module.exports = Generator
