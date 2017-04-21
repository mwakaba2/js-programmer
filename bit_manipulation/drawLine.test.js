/*jshint esversion: 6 */
var { expect } = require('chai');
var { drawLine } = require('./drawLine');

describe('drawLine', function() {
    let screen;
    beforeEach(function() {
      screen = new Array(16).fill(0);
    });
    it('should be a function', function() {
      expect(drawLine).to.be.a('function');
    });
    it('should draw a line from the start byte to the dest byte', function() {
      let outputScreen = new Array(16).fill(0);
      outputScreen[0] = 0xFF;
      outputScreen[1] = 0xFF;
      outputScreen[2] = 0xFF;
      let result = drawLine(screen, 32, 0, 23, 0);
      expect(screen).to.eql(outputScreen);
    });
    it('should draw a line starting from within a byte to within the dest byte', function() {
      let outputScreen = new Array(16).fill(0);
      outputScreen[0] = 63;
      outputScreen[1] = 0xFF;
      outputScreen[2] = -2;
      let result = drawLine(screen, 32, 2, 22, 0);
      expect(screen).to.eql(outputScreen);
    });
    it('should draw a line within a byte', function() {
      let outputScreen = new Array(16).fill(0);
      outputScreen[0] = 60;
      let result = drawLine(screen, 32, 2, 5, 0);
      expect(screen).to.eql(outputScreen);
    });
});