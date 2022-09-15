import * as mysql from 'mysql2/promise';

export async function query({ querys, values = [] } : any) {
    let connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        port:3308,
        database:"my_software_updates"
    });
  try {
    var data;
    await connection.connect()
    .then(() => connection.query(querys))
    .then(([rows, fields]) => {
        // console.log('The solution is: ', rows);
        data = rows;
    });
    await connection.end();
    return data;
  } catch (error: any) {
    throw Error("error");
    return { error };
  }
}