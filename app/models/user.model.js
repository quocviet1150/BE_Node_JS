const { poolPromise } = require('../../config/database')

exports.create = async (date) => {
    const pool = await poolPromise;

    const rs = await pool
        .request()
        .query(`INSERT INTO users (name)
                VALUES ('${date.name}')`)

    return rs.rowsAffected;
}

exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT *
                FROM users`)

    return rs.recordset;
}

exports.update = async (id, date) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`UPDATE users SET
                name = '${date[0].name}'                    
                WHERE id = ${id}`);

    return rs.rowsAffected;
}

exports.delete = async (id) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`DELETE FROM users
                WHERE id = ${id}`)

    return rs.rowsAffected;
}

exports.readById = async(id) =>{
    const pool = await poolPromise;
    const rs = await pool
            .request()
            .query(`SELECT *
                    FROM users 
                    WHERE id = ${id} `);
    
            return rs.recordset;
}
