var expect = require('chai').expect,
	bot = require('../bot'),
	Point = require('../point');

describe('#bot', function() {
	describe('#pathFind', function() {
		xit('should find path from p0 to p1', function () {
			var map = "##      ####      ##    ##  ####      []";
			var p1 = new Point(5,5);
			var p0 = new Point(0,1);
			var path = bot.pathFind(map, p1, p0);
			expect(path).to.equal("something"); // TODO
		});
	});

	describe('#getTile', function() {

		var map = {
			tiles: "00112233",
			size: 2,
		};

		it('should get the last tile from a stick of tiles', function () {
			var actual = bot.getTile(map, 1, 1);
			expect(actual).to.equal("33");
		});

		it('should get the last tile from a stick of tiles', function () {
			var actual = bot.getTile(map, 0, 0);
			expect(actual).to.equal("00");
		});
	});
});
