// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    
    if (Object.hasOwnProperty.call(ob, key)) {
     
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
     
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}
var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers" ;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  InsertOne: function(burger_name, cb) {
    connection.query = "INSERT INTO burger SET ? " , {
      burger_name: burger_name,
      devoured: false,
    }, function (err, res) {
      
      if (err) {
        throw err;
        cb(result);
      }
    }
  },
  UpdateOne: function(burgerID, cb) {
    
      var queryString = "UPDATE " + table;
  
      queryString += "burgers SET ?";
      queryString += objToSql(objColVals);
      queryString += " burgers WHERE ? ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };

    
module.exports = orm;


  