var express = require("express");
const path = require("path");
const app = express();

// app.enable("strict routing");

// app.get("/apps/:name", (req, res) => {
//   let fPath = path.resolve(
//     __dirname,
//     `./apps/${req.params.name}/dist/index.html`
//   );
//   res.sendFile(fPath);
// });

app.use("/", express.static("./"));

// app.use(express.static("images"));

app.use("/", express.static(path.join(__dirname, "dist/")));

// app.use("/apps", express.static(path.join(__dirname, 'apps/demos')))

app.use((req, res, next) => {
  const fileToSend = path.join(__dirname, "dist/index.html");
  res.sendFile(fileToSend);
});

var server = app.listen(process.env.PORT || 8080, () =>
  console.log(`listening`)
);
