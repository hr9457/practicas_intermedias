// mysql module
const mysql = require('mysql2');

// //conexion mysql
// module.exports = () =>{
//     return mysql.createConnection({
//         host :'192.168.8.134',
//         user: 'root',
//         password: '123456',
//         database: 'ProyectoPracticas',
//         port:3306
//     }); 
// }

//conexion mysql
module.exports = () =>{
    return mysql.createConnection({
        host :'192.168.49.129',
        user: 'root',
        password: '123456',
        database: 'Practicas',
        port:3306
    }); 
}