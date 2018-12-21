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

console.log('gameConfig: ', gameConfig);

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
   * @return void
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
