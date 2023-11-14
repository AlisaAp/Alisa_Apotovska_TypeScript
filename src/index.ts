interface IShape {
    name: string;
    color: string;

    calculateArea(): number;
}

interface IPrintShape {
    print(): string;
}

abstract class Shape implements IShape {
    protected constructor(readonly color: string, readonly name: string) {
        this.name = name;
        this.color = color;
    }

    abstract calculateArea(): number
}

class Circle extends Shape {
    public radius: number;

    constructor(name: string, color: string, radius: number) {
        super(name, color);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Rectangle extends Shape implements IPrintShape {
    public width: number;
    public height: number;

    constructor(name: string, color: string, width: number, height: number) {
        super(name, color);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return (this.height * this.width);
    }

    print(): string {
        return `Area: ${this.height} * ${this.width} = ${this.height * this.width}`;
    }
}

class Square extends Shape implements IPrintShape {
    public width: number;

    constructor(name: string, color: string, width: number) {
        super(name, color);
        this.width = width;
    }

    calculateArea(): number {
        return (Math.pow(this.width, 2));
    }

    print(): string {
        return `Area: ${this.width} * ${this.width} = ${Math.pow(this.width, 2)}`;
    }
}

class Triangle extends Shape {
    public width: number;
    public height: number;

    constructor(name: string, color: string, width: number, height: number) {
        super(name, color);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return (this.width * this.height) / 2;
    }
}
