const Queue = require('./queue')

function hotPotato(elementsList, num) {
    const queue = new Queue()
    const elimitatedList = []

    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i])
    };

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }

        elimitatedList.push(queue.dequeue())
    }

    return {
        elimitated: elimitatedList,
        winner: queue.dequeue()
    }
}

const names = ['rafael', 'andressa', 'julio', 'ingrid', 'jorge']
const result = hotPotato(names, 7)

result.elimitated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game`)
});

console.log(`The winner is: ${result.winner}`)