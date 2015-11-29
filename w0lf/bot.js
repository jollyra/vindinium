var _ = require('lodash'),
	assert = require('chai').assert,
	Point = require('./point');

var dirs = 'nesw';

function getTile(map, x, y) {
	assert.equal(tileIdx < map.tiles.length, true, 'coordinates out of bounds');
}

function pathFind(map, p1, p0) {
	var p = p0;
	while (!p1.eql(p)) {
	}
}

module.exports = {
	bot: bot,
	// Exported for unit testing
	pathFind: pathFind,
	getTile: getTile,
};

if (require.main === module)
	require('vindinium-client').cli(bot);
