var _ = require('lodash'),
	assert = require('chai').assert,
	Point = require('./point');

var dirs = 'nesw';

/*
 * Each tile is represented by two characters, and the map is a
 * one-dimensional array or a 'stick' of tiles.
 */
function getTile(map, x, y) {
	var tileSize = 2;
	var tileIdx = (y * map.size * tileSize) + (x * tileSize);
	assert.equal(tileIdx < map.tiles.length, true, 'coordinates out of bounds');
	return map.tiles.substr(tileIdx, tileSize);
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
