/**
 * Person에서 파생된 Student 타입
 * 저자: 루이스 아텐시오
 */
import Person from "./Person";
class Student extends Person {
  _school: string;
  constructor(
    ssn: string,
    firstname: string,
    lastname: string,
    school: string,
    birthYear = null,
    address = null
  ) {
    super(ssn, firstname, lastname, birthYear, address);
    this._school = school;
  }

  get school() {
    return this._school;
  }
}
export default Student;
