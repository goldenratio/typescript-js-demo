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

/**
 * Foo Class
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
   * @return {number}
   */
  test() {
    console.log('calling a public function');
    // todo: TSC should throw error
    this._gameConfig = {
      platform: 'SOCIAL',
      gameSkin: '',
      isCascading: false,
      assetPackageType: 'base64'
    };
    return 100;
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

// todo: TSC should throw error
foo.bar();

// todo: TSC should throw error
console.log(foo._gameConfig);
