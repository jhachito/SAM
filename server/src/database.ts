import mysql from 'mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection((err, connection) => { if (err) throw err; 
    connection.release();
    console.log('DB is connected')
});

/*
pool.then((r: any) => r.getConnection().then((connection:any)=>{
    r.releaseConnection(connection);
    console.log('Conexion exitosa.')
}));*/

/* pool.getConnection()
    .then((connection: any) => {
        pool.releaseConnection(connection);
        console.log('DB is connected');
    }); */

export default pool;