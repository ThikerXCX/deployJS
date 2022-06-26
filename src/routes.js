const { addNotesHandler, getAllDataHandler } = require("./handler.js");

const routes = [
    {
        method : 'POST',
        path : '/notes',
        handler: addNotesHandler,
    },
    {
        method : "GET",
        path : '/notes',
        handler : getAllDataHandler,
    }
]

module.exports = routes;