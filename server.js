// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
var express = require("express");

// Tells node that we are creating an "express" server
var app = express();

//Listening event 
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// API and HTML routes
// ================================================================================
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});