/**
 * @type {GameConfig}
 */
const gameConfig = {
  platform: 'SOCIAL',
  gameSkin: '',
  isCascading: false,
  assetPackageType: 'base64'
};

// cannot write on readonly property, TSC will throw error
gameConfig.platform = 'CASH';

/**
 * @type {GameConfig}
 */
const gameTempConfig = {
  platform: 'ASDADAD', // invalid enum, TSC will throw error
  gameSkin: '',
  isCascading: true,
  assetPackageType: 'asd' // invalid enum, TSC will throw error
};

// todo: Foo doesn't implement IFoo properly, TSC should throw error
/**
 * Foo Class
 * @class
 * @implements {IFoo}
 */
class Foo {

  /**
   * @private
   * @readonly
   * @const
   * @type {GameConfig}
   */
  _gameConfig;

  /**
   * Create Foo
   */
  constructor() {
    this._gameConfig = {
      platform: 'SOCIAL',
      gameSkin: '',
      isCascading: false,
      assetPackageType: 'base64'
    };
  }

  /**
   * @return {string}
   */
  test() {
    console.log('calling a public function');

    // todo: `_gameConfig` is readonly and const. TSC should throw error
    this._gameConfig = {
      platform: 'SOCIAL',
      gameSkin: '',
      isCascading: false,
      assetPackageType: 'base64'
    };

    // todo: return type doesn't match interface, TSC should throw error
    return '100';
  }

  /**
   * @private
   */
  bar() {
    console.log('calling a private function');
  }
}

const foo = new Foo();
foo.test();

// todo: calling private function, TSC should throw error
foo.bar();

// todo: calling private member, TSC should throw error
console.log(foo._gameConfig);
