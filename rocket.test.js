
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      // arrange + act
      let rocket = new Rocket();
      // assert
      expect(typeof rocket.name).toBe('string');
      expect(typeof rocket.colour).toBe('string');
      expect(rocket.flying).toBe(false);
    });

    test("it should set the rocket's name if provided", () => {
      // arrange
      let rocketName = 'Steve';
      // act
      let rocket = new Rocket({name: rocketName});
      // assert 
      expect(rocket.name).toBe(rocketName);
    });

    test("it should set the rocket's colour if provided", () => {
      // arrange
      let rocketColour = 'Hot Pink';
      // act
      let rocket = new Rocket({colour: rocketColour});
      // assert 
      expect(rocket.colour).toBe(rocketColour);
    });

    test("it should set the rocket's flying status if provided", () => {
      // arrange
      let flightStatus = true;
      // act
      let rocket = new Rocket({flying: flightStatus});
      // assert 
      expect(rocket.flying).toBe(flightStatus);
    });
  });

  describe('liftOff', () => {
    test("it should return false if rocket is already flying", () => {
      // arrange
      let flightStatus = true;
      // act
      let rocket = new Rocket({flying: flightStatus});
      // assert
      expect(rocket.liftOff()).toBe(false);
    });

    test("rocket's flying status should remain true if rocket is already flying", () => {
      // arrange
      let flightStatus = true;
      // act
      let rocket = new Rocket({flying: flightStatus});
      rocket.liftOff();
      // assert
      expect(rocket.flying).toBe(true);
    });

    test("it should return true if rocket is not flying", () => {
      // arrange + act
      let rocket = new Rocket();
      // act
      expect(rocket.liftOff()).toBe(true);
    });

    test("rocket's flying status should change to true if rocket is not flying", () => {
      // arrange +act
      let rocket = new Rocket();
      rocket.liftOff();
      // assert
      expect(rocket.flying).toBe(true);
    });
  });

  // ...

});
