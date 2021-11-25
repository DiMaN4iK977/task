function someFn(str) {
    str = str[0].toUpperCase() + str.toLowerCase().slice(1)
    console.log(str)
}

someFn('пиТеР')
someFn("javaScript")

function sayHello(str) {
    if(str === 'Mark') {
        console.log("Hi, Mark!")
    } else {
        console.log(`Hello, ${str}`)
    }
}

sayHello("Oleg")
sayHello("Viktor")
sayHello("Mark")


function filterStrings(arr, length) {
    let result = []
    arr.forEach(elem => {
        if(elem.length <= length) {
            result.push(elem)
        }
    })
    console.log(result)
}

filterStrings(['I love JS', 'some very long string', 'hell'], 9)