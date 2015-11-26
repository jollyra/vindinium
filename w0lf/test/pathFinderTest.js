var assert = require('assert'),
	bot = require('../bot'),
	Point = require('../point');

describe('#pathFind', function() {
	it('should find path from p0 to p1', function () {
		var map = "##      ####      ##    ##  ####      []";
		var p1 = new Point(5,5);
		var p0 = new Point(0,1);
		assert.ok(bot.pathFind(map, p1, p0));
	});
});
