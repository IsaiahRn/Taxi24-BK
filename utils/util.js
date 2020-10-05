import geodist from 'geodist';

/**
 * @exports Util
 * @class Util
 * @description a class to that defines reusable methods
 * */
class Util {
  static getWithIn3Km(enteredLatitude, enteredLongitude, targetLatitude, targetLongitude) {
    return geodist(
      { latitude: enteredLatitude, longitude: enteredLongitude },
      { latitude: targetLatitude, longitude: targetLongitude },
      { exact: true, unit: 'km' },
    );
  }
}
export default Util;
