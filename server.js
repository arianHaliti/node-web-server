const express = require("express");
const hbs = require("hbs");

var app = express();

hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});
hbs.registerHelper("screamIt", txt => {
  return txt.toUpperCase();
});
app.set("view engine", "hbs");

app.use((req, res, next) => {
  res.render("maintenance.hbs", {
    title: "Maintenance"
  });
  next();
});

app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    year: new Date().getFullYear(),
    welcome: "Welcome to this page!"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    title: "About",
    year: new Date().getFullYear()
  });
});

app.get("/bad", (req, res) => {
  res.send({
    erorrMessage: "Bad Gateway"
  });
});
app.listen(3000, () => {
  console.log("Server startet at port 3000");
});
