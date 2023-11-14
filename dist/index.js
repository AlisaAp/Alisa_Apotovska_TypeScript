"use strict";

class Shape {
    constructor(color, name) {
        this.color = color;
        this.name = name;
        this.name = name;
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(name, color, radius) {
        super(name, color);
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Rectangle extends Shape {
    constructor(name, color, width, height) {
        super(name, color);
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return (this.height * this.width);
    }

    print() {
        return `Area: ${this.height} * ${this.width} = ${this.height * this.width}`;
    }
}

class Square extends Shape {
    constructor(name, color, width) {
        super(name, color);
        this.width = width;
    }

    calculateArea() {
        return (Math.pow(this.width, 2));
    }

    print() {
        return `Area: ${this.width} * ${this.width} = ${Math.pow(this.width, 2)}`;
    }
}

class Triangle extends Shape {
    constructor(name, color, width, height) {
        super(name, color);
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return (this.width * this.height) / 2;
    }
}
