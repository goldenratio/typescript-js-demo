/**
 * @typedef {string} PLATFORM
 */

/**
 * @typedef {string} ASSET_PACKAGE_TYPE
 */

/**
 * @typedef {object} GameConfigVO
 * @property {PLATFORM} platform
 * @property {string} gameSkin
 * @property {boolean} isCascading
 * @property {ASSET_PACKAGE_TYPE} assetPackageType
 */

/**
 * @typedef {Readonly<GameConfigVO>} GameConfig
 */


/**
 * @interface
 */
class IFoo {

  /**
   * @return {number}
   */
  test() {
    return 0;
  }

  /**
   * @return {void}
   */
  bark() {
    //
  }
}
