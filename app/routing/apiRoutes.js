

var matches = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(matches);
  });

  
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
          var userScores = req.body.scores;
          var bestMatch = {};
          var difference = 0;
          var lowestDifference = 40;
          var compareCurrent = [];
          var parsedUserScores = [];

          console.log(matches);
          //console.log(userScores);
          
        for (i=0; i<userScores.length; i++) {
            parsedUserScores.push(parseInt(userScores[i]));
            console.log(parsedUserScores);
        }


      
        for (i=0; i < matches.length; i++) {
        
        compareCurrent = matches[i].scores;
        //compareCurrent.push(1);
        console.log("current scores from data to compare: " + compareCurrent);
        console.log("user submitted scores: " + parsedUserScores);
        console.log("works!");
        
        for (x=0; x<compareCurrent.length; x++){
          difference += Math.abs(compareCurrent[x] - parsedUserScores[x]);

          console.log("Running difference: " + difference);
          
          };
          
          if(difference < lowestDifference) {
              bestMatch = matches[i].name;
              lowestDifference = difference;

          }

          
        
        console.log("Lowest Difference: " + lowestDifference);
        console.log("Best Match: " + bestMatch); 
        difference = 0;
        };
      

       
        
      });
     
      
  };

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  


