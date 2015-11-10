var assert = require('assert');
var Point = require('../point');

describe('Point', function() {
	describe('#eql()', function () {
		it('should return true when the points are equal', function () {
			var p1 = new Point(1, 1);
			var p2 = new Point(1, 1);
			assert.equal(p1.eql(p2), true);
		});

		it('should return false when the points are equal', function () {
			var p1 = new Point(1, 1);
			var p2 = new Point(1, 3);
			assert.equal(p1.eql(p2), false);
		});
	});
});
