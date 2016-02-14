var _ = require('lodash'),
	assert = require('chai').assert,
	Tiles = require('tile-stick');

var dirs = 'nesw';

function bot(state, callback) {
	console.log(state);
	parseMap(state.board);
	var i = Math.floor(Math.random() * 4);
	var dir = dirs[i];
	callback(null, dir);
};

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
