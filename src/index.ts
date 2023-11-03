type Lecturer = {
    name: string,
    surname: string,
    position: string,
    company: string,
    experience: string,
    courses: string,
    contacts: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class School {
    // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

    _areas: Area[] = [];
    _lecturers: Lecturer[] = []; // Name, surname, position, company, experience, courses, contacts

    get areas(): Area[] {
        return this._areas;
    }

    get lecturers(): Lecturer[] {
        return this._lecturers;
    }

    addArea(area: Area): void {
        this._areas.push(area);
    }

    removeArea(area: Area): void {
        this._areas = this._areas.filter((item) => item !== area);
    }

    addLecturer(lecturer: Lecturer): void {
        this._lecturers.push(lecturer);
    }

    removeLecturer(lecturer: Lecturer): void {
        this._lecturers = this._lecturers.filter((item) => item !== lecturer);
    }
}

class Area {
    // implement getters for fields and 'add/remove level' methods
    _levels: Level[] = [];
    _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get levels(): Level[] {
        return this._levels;
    }

    get name(): string {
        return this._name;
    }

    addLevel(level: Level): void {
        this._levels.push(level);
    }

    removeLevel(level: Level): void {
        this._levels = this._levels.filter((item) => item !== level);
    }

}

class Level {
    // implement getters for fields and 'add/remove group' methods
    _description: string;
    _groups: Group[] = [];
    _name: string;

    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
    }

    get description(): string {
        return this._description;
    }

    get groups(): Group[] {
        return this._groups;
    }

    get name(): string {
        return this._name;
    }

    addGroup(group: Group): void {
        this._groups.push(group);
    }

    removeGroup(group: Group): void {
        this._groups = this._groups.filter((item) => item !== group);
    }
}

enum Statuses {
    Start = "STARTED",
    Finish = "FINISHED",
    New = "NEW"
}

class Group {
    // implement getters for fields and 'add/remove student' and 'set status' methods
    directionName: string;
    levelName: string;
    _area: Area;
    _status: Statuses;
    _students: Student[] = []; // Modify the array so that it has a valid toSorted method*

    constructor(directionName: string, levelName: string, status: Statuses) {
        this.directionName = directionName;
        this.levelName = levelName;
        this._status = status;
        this._area = new Area(directionName);
    }

    get status(): Statuses {
        return this._status;
    }

    set status(status: Statuses) {
        this._status = status;
    }

    get area(): Area {
        return this._area;
    }

    get students(): Student[] {
        return this._students;
    }

    showPerformance(): Student[] {
        const newStudents: Student[] = [...this._students];
        return newStudents.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());

    }

    addStudent(student: Student): void {
        this._students.push(student);
    }

    removeStudent(student: Student): void {
        this._students = this._students.filter((item) => item !== student);
    }
}

type Grade = {
    [workName: string]: number,
}


class Student {
    // implement 'set grade' and 'set visit' methods

    _firstName: string;
    _lastName: string;
    _birthYear: number;
    _grades: Grade = {}; // workName: mark
    _visits: boolean[] = []; // lesson: present

    constructor(firstName: string, lastName: string, birthYear: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    get fullName(): string {
        return `${this._lastName} ${this._firstName}`;
    }

    set fullName(value: string) {
        [this._lastName, this._firstName] = value.split(" ");
    }

    get age(): number {
        return new Date().getFullYear() - this._birthYear;
    }

    setGrade(workName: string, mark: number): void {
        this._grades[workName] = mark;
    }

    setVisit(visit: boolean): void {
        this._visits.push(visit);
    }

    getPerformanceRating(): number {
        const gradeValues: number[] = Object.values(this._grades);

        if (!gradeValues.length) return 0;

        const averageGrade: number = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage: number = (this._visits.filter(present => present).length / this._visits.length) * 100;

        return (averageGrade + attendancePercentage) / 2;
    }
}