console.log("u blodyyy idiotttt!!!");
console.log();

var http = require("http");
var url = require("url");
var fs = require("fs");
var formidable = require("formidable");
var mv = require("mv");
var nodemailer = require("nodemailer");

http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var newpath = "c:/saved/" + files.filetoupload.originalFilename;
        mv(oldpath, newpath, (err) => {
          if (err) throw err;
          res.write("File uploaded and moved!");
          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen('https://blackdart01.github.io/file-upload-npm/');
