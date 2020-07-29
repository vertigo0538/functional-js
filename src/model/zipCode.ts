interface zipCode {
  code(): string;
  location(): string;
  fromString(str: string): void;
  toString(): string;
}
export function zipCode(code: string, location: string) {
  let _code: string = code;
  let _location: string = location || "";

  return {
    code: () => {
      return _code;
    },
    location: () => {
      return _location;
    },
    fromString: (str: string) => {
      let parts = str.split("-");
      return zipCode(parts[0], parts[1]);
    },
    toString: () => {
      return _code + "-" + _location;
    },
  };
}
