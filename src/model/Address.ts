/**
 * 주소(Address) 객체
 * 이 책의 학습용 예제를 위한 도메인 모델 객체
 * 저자: 루이스 아텐시오
 */
class Address {
  _country: string;
  _state: string | null;
  _city: string | null;
  _zip: object | null;
  _street: string | null;
  constructor(
    country: string,
    state: string | null = null,
    city: string | null = null,
    zip: object | null = null,
    street: string | null = null
  ) {
    this._country = country;
    this._state = state;
    this._city = city;
    this._zip = zip;
    this._street = street;
  }

  get street(): string | null {
    return this._street;
  }

  get city(): string | null {
    return this._city;
  }

  get state(): string | null {
    return this._state;
  }

  get zip(): object | null {
    return this._zip;
  }

  get country(): string {
    return this._country;
  }

  set country(country: string) {
    this._country = country;
  }
}
export default Address;
