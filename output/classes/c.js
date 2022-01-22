export class player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    // constructor(n: string, a: number, c: string) {
    //   (this.name = n), (this.age = a);
    //   this.country = c;
    // }
    play() {
        console.log(`${this.name} from  ${this.country} is playing`);
    }
}
