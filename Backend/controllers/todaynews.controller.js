//=========================Working Fine====================================

const { pool,poolConnect,sql } = require('../database/dbConfig');

//Get All Posts
const getTodayAllPosts = async (req, res) => {
    try {
        await poolConnect;
        const result = await pool
          .request()
          .query(
            `select * FROM posts where is_hidden IN('0','N') order by publish_date DESC`
          );

        res.status(200).json(result.recordset);
     } catch (error) {
        console.error('Error fatching posts table:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports ={ getTodayAllPosts };


 //=====================================================================


