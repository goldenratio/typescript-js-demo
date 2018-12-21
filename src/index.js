/**
 * @type {GameConfig}
 * @readonly
 */
const gameConfig = {
  platform: 'SOCIAL',
  gameSkin: '',
  isCascading: false,
  assetPackageType: 'base64'
};

gameConfig.platform = 'CASH';
console.log(gameConfig);


// class example
class Foo {

  constructor() {

    /**
     * @type {GameConfig}
     * @const
     */
    this.gameConfig = {
      platform: 'SOCIAL',
      gameSkin: '',
      isCascading: false,
      assetPackageType: 'base64'
    }
  }

  test() {
    this.gameConfig = {
      platform: 'SOCIAL',
      gameSkin: '',
      isCascading: false,
      assetPackageType: 'base64'
    }
  }

  /**
   * @private
   */
  bar() {
    //
  }
}

const foo = new Foo();
foo.test();
foo.bar();
