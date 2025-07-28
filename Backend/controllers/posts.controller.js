const { pool,poolConnect,sql } = require('../database/dbConfig');

//Get All Posts
const getAllPosts = async (req, res) => {
    try {
        await poolConnect;
        const result = await pool.request().query("SELECT * FROM posts");
        res.status(200).json(result.recordset);
     } catch (error) {
        console.error('Error fatching posts table:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports ={ getAllPosts };