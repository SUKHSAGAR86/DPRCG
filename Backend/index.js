const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());



const getHiGetNewsProcedureData = require("./router/Hi_Getnews_procedure.route");
 const getHiGetMenuProcedure=require("./router/HiGetMenu_procedure.route");


const getFooterMenusRoute = require("./router/GetFooterMenus.route");
const menubar = require("./router/Menubar.route");
const noticesRoute=require("./router/Notices.route");
const postsRoute = require("./router/posts.route");
const banner = require("./router/Banner.route");


const testMenuRoute = require("./router/testMenu.route");

app.use("/api/procedure", getHiGetNewsProcedureData);
app.use("/api/procedure",getHiGetMenuProcedure);


app.use("/api/footermenus", getFooterMenusRoute);
app.use("/api/menubar", menubar);
app.use("/api/notices",noticesRoute);
app.use("/api/posts", postsRoute);
app.use("/api/banners", banner);


app.use("/api", testMenuRoute);




const PORT = 3081;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

