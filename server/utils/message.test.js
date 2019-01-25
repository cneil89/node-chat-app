var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
   it('should generate correct message object', () => {
      var from = 'Colin';
      var text = 'Some Message';
      var message = generateMessage(from, text);

      expect(message.createdAt).toBeA('number');
      expect(message).toInclude({from, text});
   });
});

describe('generateLocationMessage', () => {
   it('should generate correct location object', () => {
      var from = 'Colin';
      var lat = 42.5219173;
      var lng = -83.1359958;
      var url = 'https://www.google.com/maps?q=42.5219173,-83.1359958'
      var message = generateLocationMessage(from, lat, lng);

      expect(message.createdAt).toBeA('number');
      expect(message).toInclude({from, url});
   });
});