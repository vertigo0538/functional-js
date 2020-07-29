/**
 * 사람(Person) 객체
 * 이 책의 학습용 예제를 위한 도메인 모델 객체
 * 저자: 루이스 아텐시오
 */

class PersonLens {
  ssn: string;
  firstname: string;
  lastname: string;
  birthYear: string | null;
  address: object | null;
  constructor(
    firstname: string,
    lastname: string,
    ssn: string,
    birthYear = null,
    address = null
  ) {
    this.ssn = ssn;
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthYear = birthYear;
    this.address = address;
  }
}

export default PersonLens;
