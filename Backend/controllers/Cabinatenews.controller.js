const { pool, poolConnect } = require("../database/dbConfig");

const getCabinateNewsPosts = async (req, res) => {
  try {
    await poolConnect;

    const tagResult = await pool
      .request()
      .query(`SELECT * FROM tags WHERE id='410' AND status = '1'`); //

    const cabinatetags = tagResult.recordset;

    if (cabinatetags.length === 0) {
      return res.status(404).json({ message: "No tag found " });
    }

    //  Extract tag ID(s)
    const tagIds = cabinatetags.map((tag) => `'${tag.id}'`).join(",");

    //  Get published posts matching those tag IDs
    const CabinateNewsResult = await pool.request().query(
      `SELECT * FROM posts 
                 WHERE tags_hindi IN (${tagIds}) 
                 AND is_publish IN ('1', 'Y')` //is_hidden IN ('0', 'N')`
    );

    const cabinatenews = CabinateNewsResult.recordset;

    // Merge tags with their related news
    const navigation_record = cabinatetags.map((tagObj) => {
      const relatedCmnews = cabinatenews.filter(
        (news) => news.tags_hindi === String(tagObj.id)
      );

      return {
        tag: tagObj.tag,
        cabinatenews: relatedCmnews.map((news) => ({
          title_hindi: news.title_hindi,
          featured_photo_hindi: news.featured_photo_hindi,
          publish_date: news.publish_date,
        })),
      };
    });

    // Final response
    res.status(200).json({ data: navigation_record });
  } catch (error) {
    console.error("Error fetching posts or tags:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getCabinateNewsPosts };
