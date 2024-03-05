function outerfun(){
    let a=10;
    console.log(" i am outer function")
    function innerfun(){
        let b=20;
        console.log("i am inner function")
        return a+b;
    }
    return innerfun()
}
console.log(outerfun())