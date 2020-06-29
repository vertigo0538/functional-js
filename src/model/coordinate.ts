export interface coordinate {
  latitude(): number;
  longitude(): number;
  translate(dx: number, dy: number): Object;
  toString(): string;
}
export function coordinate(lat: number, long: number) {
  let _lat: number = lat;
  let _long: number = long;

  return {
    latitude: () => {
      return _lat;
    },
    longitude: () => {
      return _long;
    },
    translate: (dx: number, dy: number) => {
      return coordinate(_lat + dx, _long + dy);
    },
    toString: () => {
      return "(" + _lat + "," + _long + ")";
    },
  };
}
