const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());





const getFooterMenusRoute = require("./router/GetFooterMenus.route");
const menubar = require("./router/Menubar.route");

const todaynewsRoute = require("./router/todaynews.route");
const banner = require("./router/Banner.route");

const Districts=require("./router/District.route");
const pagesRoute = require("./router/pages.route");


const cmnews=require("./router/CmNews.route");


const cabinatenews=require("./router/Cabinatenews.route");
 

const photoAlbum= require("./router/PhotoAlbum.route");

const videoAlbum=require("./router/VideoAlbum.route");
const notice=require("./router/Notice.route");
const tenders=require("./router/Tenders.route");
const publication=require("./router/Publication.route");










app.use("/api/footermenus", getFooterMenusRoute);
app.use("/api/menubar", menubar);


// app.use("/api/notices",noticesRoute);
app.use("/api/todaynews", todaynewsRoute);
app.use("/api/banners", banner);
// app.use("/api/submenus", Submenus);
app.use("/api/districts", Districts);
app.use("/api/pages", pagesRoute);

app.use("/api/cmnews",cmnews);
app.use("/api/cabinatenews",cabinatenews);
app.use("/api/photoalbum",photoAlbum);
app.use("/api/videoalbum",videoAlbum);
app.use("/api/notice",notice);
app.use("/api/tenders",tenders);
app.use("/api/publication",publication);



const PORT = 3081;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


