import {Dimensions, PixelRatio} from 'react-native';
import * as React from 'react';

class Utils {
  static width = Dimensions.get('window').width;
  static height = Dimensions.get('window').height;
  static navigationRef = React.createRef();
  static scrollRef = React.createRef();

  /**
   * Navigate screen
   * @param {String} name
   * @param {Object} params
   */
  static navigate(name, params) {
    this.navigationRef.current?.navigate(name, params);
  }

  /**
   * Height screen
   * @param {number} h
   * @returns
   */
  static rH(h) {
    return (this.height / 736) * h;
  }

  /**
   * Width screen
   * @param {number} w
   * @returns
   */
  static rW(w) {
    return (this.width / 414) * w;
  }

  /**
   * Font size screen
   * @param {number} s
   * @returns
   */
  static rFs(s) {
    const size = (this.width / 414) * s;
    return Math.round(PixelRatio.roundToNearestPixel(size));
  }

  /**
   * Clone object
   * @param {object} object
   * @returns
   */
  static cloneObject(object) {
    return JSON.parse(JSON.stringify(object));
  }
  /**
   * Check is number
   * @param {any} n
   * @returns
   */
  static isNumber(n) {
    return Number(n) === n;
  }
}

export default Utils;
