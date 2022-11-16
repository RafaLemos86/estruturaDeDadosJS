const Deque = require('./deque')

function palindromeCheker(aString) {
    if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
        return false;
    };

    const deque = new Deque();
    const lowerString = aString.toLocaleLowerCase().split(' ').join('');
    let isEqual = true;
    let firstChar, lastChar;

    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i))
    }

    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()

        if (firstChar !== lastChar) {
            isEqual = false
        }
    }

    return isEqual
}

console.log('Was it a car or a cat I saw', palindromeCheker('Was it a car or a cat I saw'))