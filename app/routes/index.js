// import noteRoutes from './note_routes';
const noteRoutes = require('./note_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);
  // Other route groups could go here, in the future
};