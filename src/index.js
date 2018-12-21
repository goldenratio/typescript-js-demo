/**
 * @type {GameConfig}
 */
const gameConfig = {
  platform: 'SOCIAL',
  gameSkin: '',
  isCascading: false,
  assetPackageType: 'base64'
};

// TSC will throw error (works)
// gameConfig.platform = 'CASH';

// class example
class Foo {

  /**
   * @type {GameConfig}
   * @private
   * @const
   * @readonly
   */
  _gameConfig;

  constructor() {
    this._gameConfig = {
      platform: 'SOCIAL',
      gameSkin: '',
      isCascading: false,
      assetPackageType: 'base64'
    }
  }

  test() {
    // todo: TSC should throw error
    this._gameConfig = {
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

// todo: TSC should throw error
foo.bar();

// todo: TSC should throw error
console.log(foo._gameConfig);
