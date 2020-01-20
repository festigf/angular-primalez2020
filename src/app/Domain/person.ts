export class Person {
  first_name: string;
  last_name: string;
  age: number;

  constructor(first_name: string, last_name: string, age: number) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }
  greet() {
    console.log("Hello", this.first_name);
    return "Hello " + this.first_name;
  }
  ageInYears(years: number): number {
    return this.age + years;
  }
}
