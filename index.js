const chokidar = require('chokidar');

// Watch the schema file for changes
const watcher = chokidar.watch(path.join(__dirname, 'schemas', 'schema.graphql'));

watcher.on('change', () => {
  updateSchema();
});
