import * as geolib from 'geolib';

/**
 * @exports Util
 * @class Util
 * @description a class to that defines reusable methods
 * */
class Util {
  static getWithIn3Km(enteredLatitude, enteredLongitude, targetLatitude, targetLongitude) {
    return geolib.isPointWithinRadius(
      { latitude: enteredLatitude, longitude: enteredLongitude },
      { latitude: targetLatitude, longitude: targetLongitude },
      3000,
    );
  }
}
export default Util;
