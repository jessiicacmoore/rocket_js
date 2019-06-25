
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
    // 
  });

  // ...

});
