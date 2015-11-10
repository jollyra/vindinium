var _ = require('lodash'),
	assert = require('assert');

var dirs = 'nesw';

function bot(state, callback) {
	var i = Math.floor(Math.random() * 4);
	var dir = dirs[i];
	callback(null, dir);
};

function getTile(map, x, y) {
	var size = map.size;
	var tiles = map.tiles;
	assert.strictEqual(x < size && y < size, true, 'coordinates out of bounds');
	return tiles[y * size + x];
}

module.exports = bot;
if (require.main === module)
	require('vindinium-client').cli(bot);
