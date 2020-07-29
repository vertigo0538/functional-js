/**
 * 사람(Person) 객체
 * 이 책의 학습용 예제를 위한 도메인 모델 객체
 * 저자: 루이스 아텐시오
 */

class Person {
  _ssn: string;
  _firstname: string;
  _lastname: string;
  _birthYear: number | null;
  _address: object | null;
  constructor(
    ssn: string,
    firstname: string,
    lastname: string,
    birthYear: number | null = null,
    address: object | null = null
  ) {
    this._ssn = ssn;
    this._firstname = firstname;
    this._lastname = lastname;
    this._birthYear = birthYear;
    this._address = address;
  }

  get ssn(): string {
    return this._ssn;
  }

  get firstname(): string {
    return this._firstname;
  }

  set firstname(firstname: string) {
    this._firstname = firstname;
  }

  get lastname(): string {
    return this._lastname;
  }

  get birthYear(): number | null {
    return this._birthYear;
  }

  get address(): object | null {
    return this._address;
  }

  get fullname(): string {
    return `${this._firstname} ${this._lastname}`;
  }
}

export default Person;
