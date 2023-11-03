"use strict";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class School {
    constructor() {
        // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods
        this._areas = [];
        this._lecturers = []; // Name, surname, position, company, experience, courses, contacts
    }

    get areas() {
        return this._areas;
    }

    get lecturers() {
        return this._lecturers;
    }

    addArea(area) {
        this._areas.push(area);
    }

    removeArea(area) {
        this._areas = this._areas.filter((item) => item !== area);
    }

    addLecturer(lecturer) {
        this._lecturers.push(lecturer);
    }

    removeLecturer(lecturer) {
        this._lecturers = this._lecturers.filter((item) => item !== lecturer);
    }
}

class Area {
    constructor(name) {
        // implement getters for fields and 'add/remove level' methods
        this._levels = [];
        this._name = name;
    }

    get levels() {
        return this._levels;
    }

    get name() {
        return this._name;
    }

    addLevel(level) {
        this._levels.push(level);
    }

    removeLevel(level) {
        this._levels = this._levels.filter((item) => item !== level);
    }
}

class Level {
    constructor(name, description) {
        this._groups = [];
        this._name = name;
        this._description = description;
    }

    get description() {
        return this._description;
    }

    get groups() {
        return this._groups;
    }

    get name() {
        return this._name;
    }

    addGroup(group) {
        this._groups.push(group);
    }

    removeGroup(group) {
        this._groups = this._groups.filter((item) => item !== group);
    }
}

var Statuses;
(function (Statuses) {
    Statuses["Start"] = "STARTED";
    Statuses["Finish"] = "FINISHED";
    Statuses["New"] = "NEW";
})(Statuses || (Statuses = {}));

class Group {
    constructor(directionName, levelName, status) {
        this._students = []; // Modify the array so that it has a valid toSorted method*
        this.directionName = directionName;
        this.levelName = levelName;
        this._status = status;
        this._area = new Area(directionName);
    }

    get status() {
        return this._status;
    }

    set status(status) {
        this._status = status;
    }

    get area() {
        return this._area;
    }

    get students() {
        return this._students;
    }

    showPerformance() {
        const newStudents = [...this._students];
        return newStudents.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    }

    addStudent(student) {
        this._students.push(student);
    }

    removeStudent(student) {
        this._students = this._students.filter((item) => item !== student);
    }
}

class Student {
    constructor(firstName, lastName, birthYear) {
        this._grades = {}; // workName: mark
        this._visits = []; // lesson: present
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    get fullName() {
        return `${this._lastName} ${this._firstName}`;
    }

    set fullName(value) {
        [this._lastName, this._firstName] = value.split(" ");
    }

    get age() {
        return new Date().getFullYear() - this._birthYear;
    }

    setGrade(workName, mark) {
        this._grades[workName] = mark;
    }

    setVisit(visit) {
        this._visits.push(visit);
    }

    getPerformanceRating() {
        const gradeValues = Object.values(this._grades);
        if (!gradeValues.length)
            return 0;
        const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage = (this._visits.filter(present => present).length / this._visits.length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    }
}
