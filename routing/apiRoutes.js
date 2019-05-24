// Dependencies
// =============================================================
var friends = require("../data/friends.js");

module.exports = function(app) {
    // Routes
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    // Displays a single friend, or returns false
    app.get("/api/friends", function(req, res) {
        var chosen = req.params.friend;

        console.log(chosen);

        for (var i = 0; i < friends.length; i++) {
            if (chosen === friends[i].routeName) {
                return res.json(friends[i]);
            }
        }

        return res.json(false);
    });

    // Create New friends - takes in JSON input
    // =============================================================
    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newfriend = req.body;
        friends.push(newFriend);
        res.send(true);
    });
};