const Path = require("../utils/pathUtils");
const sqlite3 = require("sqlite3").verbose();
const query = require("./query");

class AppDao {
  constructor() {
    console.log("app dai constructor", Path.dbFile);
    this.db = new sqlite3.Database(
      Path.dbFile, // my root folder if in dev mode
      (err) => {
        if (err) {
          console.log(`Database Error: ${err}`);
        } else {
          console.log("Database Loaded");
        }
      }
    );
    this.query = { ...query };
  }
  all(sqlQuery, params) {
    console.log("app dai alll", sqlQuery);
    return new Promise((resolve, reject) => {
      this.db.all(sqlQuery, params, (err, rows) => {
        this.db.close((error) => {
          if (error) {
            console.log(`Database close error: ${error}`);
          } else {
            console.log("Database closed");
          }
        });

        if (err) {
          // case error
          reject(err);
        }
        resolve(rows);
      });
    });
  }
}
module.exports = AppDao;
// module.exports = {
//   allAsync: (query, params) => {
//     return new Promise((resolve, reject) => {
//       const dBase = new sqlite3.Database(
//         Path.dbFile, // my root folder if in dev mode
//         (err) => {
//           if (err) {
//             console.log(`Database Error: ${err}`);
//           } else {
//             console.log("Database Loaded");
//           }
//         }
//       );
//       dBase.all(query, params, (err, rows) => {
//         dBase.close((error) => {
//           if (error) {
//             console.log(`Database close error: ${error}`);
//           } else {
//             console.log("Database closed");
//           }
//         });
//         if (err) {
//           // case error
//           reject(err);
//         }
//         resolve(rows);
//       });
//     });
//   },
// };
