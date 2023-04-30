export class Lib {
    public name: any;
    constructor(name: any) {
        this.name = name;
    }

    getName = () => {
        return this.name;
    }
}