var _ = require('lodash'),
	assert = require('assert'),
	Point = require('point');

var dirs = 'nesw';

function getTile(map, x, y) {
	var size = map.size;
	var tiles = map.tiles;
	assert.strictEqual(x < size && y < size, true, 'coordinates out of bounds');
	return tiles[y * size + x];
}

function pathFind(map, p1, p0) {
	var p = p0;
	while (!p1.eql(p)) {
		// BFS for p1 from p0
	}
}

function bot(state, callback) {
	console.log(state);
	parseMap(state.board);
	var i = Math.floor(Math.random() * 4);
	var dir = dirs[i];
	callback(null, dir);
};

module.exports = bot;
if (require.main === module)
	require('vindinium-client').cli(bot);
