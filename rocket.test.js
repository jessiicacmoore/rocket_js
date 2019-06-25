
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
      let rocket = new Rocket({flying: true});
      // act
      let liftOffResponse = rocket.liftOff();
      // assert
      expect(liftOffResponse).toBe(false);
    });

    test("rocket's flying status should remain true if rocket is already flying", () => {
      // arrange
      let rocket = new Rocket({flying: true});
      rocket.liftOff();
      // act
      let flightStatus = rocket.flying;
      // assert
      expect(flightStatus).toBe(true);
    });

    test("it should return true if rocket is not flying", () => {
      // arrange
      let rocket = new Rocket();
      //act
      let liftOffResponse = rocket.liftOff()
      // act
      expect(liftOffResponse).toBe(true);
    });

    test("rocket's flying status should change to true if rocket is not flying", () => {
      // arrange
      let rocket = new Rocket();
      rocket.liftOff();
      //act
      let flightStatus = rocket.flying
      // assert
      expect(flightStatus).toBe(true);
    });
  });

  describe('land', () => {
    test("it should return false if rocket is not flying", () => {
      // arrange
      let rocket = new Rocket();
      // act
      let landResponse = rocket.land();
      // assert
      expect(landResponse).toBe(false);
    });

    test("rocket's flying status should remain false if rocket is not flying", () => {
     // arrange
     let rocket = new Rocket();
     rocket.land();
     //act
     let flightStatus = rocket.flying;
     // assert
     expect(flightStatus).toBe(false);
    });

    test("it should return true if rocket is flying", () => {
      // arrange
      let rocket = new Rocket({flying: true});
      //act
      let landResponse = rocket.land()
      // act
      expect(landResponse).toBe(true);
    });

    test("rocket's flying status should change to false if rocket is flying", () => {
      // arrange
      let rocket = new Rocket({flying: true});
      rocket.land();
      // act
      let flightStatus = rocket.flying;
      // assert
      expect(flightStatus).toBe(false);
    });
  });

  describe('status', () => {
    test("it should return `Rocket (name) is flying through the sky!` if rocket is flying", () => {
      // arrange 
      let rocket = new Rocket({flying: true});
      // act
      let rocketStatus = rocket.status()
      // assert 
      expect(rocketStatus).toBe(`Rocket ${rocket.name} is flying through the sky!`);
    });

    test("it should return `Rocket (name) is ready for liftoff!` if rocket is not flying", () => {
      // arrange + act
      let rocket = new Rocket();
      // assert
      expect(rocket.status()).toBe(`Rocket ${rocket.name} is ready for liftoff!`);
    });
  });

  describe('sendSignalCode', () => {
    test("it should return a string", () => {
      //arrange
      let rocket = new Rocket();
      // act
      let message = rocket.sendCodedSignal();
      // assert
      expect(typeof message).toBe('string');
    });
    
    test("it should return 'boop' if function is called with no arguments", () => {
      // arrange + act
      let rocket = new Rocket();
      // assert
      expect(rocket.sendCodedSignal()).toBe('boop');
    });

    test("it should return 'beep' if grounded rocket calls function with a number argument < 10", () => {
      // arrange
      let rocket = new Rocket();
      // act
      let message = rocket.sendCodedSignal(5);
      // assert
      expect(message).toBe('beep');
    });

    test("it should return 'beep beep' if flying rocket calls function with a number argument < 10", () => {
      // arrange
      let rocket = new Rocket({flying: true});
      // act
      let message = rocket.sendCodedSignal(5);
      // assert
      expect(message).toBe('beep beep');
    });

    test("it should return 'boop boop boop' if flying rocket calls function with an argument that is not undefined or < 10", () => {
      // arrange
      let rocket = new Rocket({flying: true});
      // act
      let message = rocket.sendCodedSignal(27);
      let message2 = rocket.sendCodedSignal('SOS')
      // assert
      expect(message).toBe('boop boop boop');
      expect(message2).toBe('boop boop boop');
    });

    test("it should return 'boop beep beep' if grounded rocket calls function with an argument that is not undefined or < 10", () => {
      // arrange
      let rocket = new Rocket();
      // act
      let message = rocket.sendCodedSignal(21);
      let message2 = rocket.sendCodedSignal('SOS')
      // assert
      expect(message).toBe('boop beep beep');
      expect(message2).toBe('boop beep beep');
    });
  });

  // ...

});
