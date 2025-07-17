import { makeAutoObservable } from 'mobx';

export default class CounterStore {
    title = 'Counter Store';
    count = 42;
    events: string[] = [
        `Initial count is ${this.count}`
    ]

    constructor() {
        makeAutoObservable(this)
    }

    increment = (amount = 1) => {
        this.count += amount;
        this.events.push(`Incremented by ${amount} and count is now ${this.count}`);
    }

    decrement = (amount = 1) => {
        this.count -= amount;
        this.events.push(`Decremented by ${amount} and count is now ${this.count}`);
    }

    get eventCount(){
        return this.events.length;
    }
}


//for note only
// import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
//  title = 'Counter Store';
//     count = 42;

//     constructor(){
//         makeObservable(this, {
//             title: observable,
//             count: observable,
//             increment: action,
//             decrement: action
//         })
//     }

//     increment = (amount = 1) => {
//         this.count += amount
//     }

//     decrement = (amount = 1) => {
//         this.count -= amount;
//     }