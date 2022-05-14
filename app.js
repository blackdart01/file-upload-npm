console.log("u blodyyy idiotttt!!!");
console.log();

var http = require("http");
var url = require("url");
var fs = require("fs");
var formidable = require("formidable");
var mv = require("mv");
var nodemailer = require("nodemailer");
// const { listenerCount } = require("process");
// http
//   .createServer((req, res) => {
//     res.write("Hello\n");
//     // let q = url.parse(req.url, true).query;
//     let q = url.parse(req.url, true).query;
//     let txt = "year: " + q.year + " month: " + q.month;
//     console.log("njn" + txt);
//     res.end(txt);
//   })
//   .listen(8080);

// http
//   .createServer((req, res) => {
//     fs.readFile("index.htm", (err, data) => {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       if (err) {
//         // res.write(err);
//         throw err;
//       } else {
//         res.write(data);
//       }
//       return res.end();
//     });
//     fs.appendFile("inddex.txt", "chal bhaag ", (err) => {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       if (err) {
//         throw err;
//       } else {
//         console.log("saved");
//       }
//       return res.end();
//     });
//   })
//   .listen(8080);

// http
//   .createServer((req, res) => {
//     let q = url.parse(req.url, true);
//     let fileName = `.${q.pathname}`;
//     fs.readFile(fileName, (e, d) => {
//       if (e) {
//         res.writeHead(400, { "Content-Type": "text/html" });
//         return res.end(e + "<br> 404 Error Not Found");
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" }); //(e, d) => {
//         res.write(d);
//         return res.end();
//       }
//     });
//   })
//   .listen(8080);

// http
//   .createServer((req, res) => {
//     if (req.url == "/fileUpload") {
//       let form = new formidable.IncomingForm();
//       form.parse(req, (err, fields, files) => {
//         if (err) {
//           res.writeHead(err.httpCode || 400, { "Content-Type": "text/plain" });
//           return res.end(String(err));
//         }
//         // if (!files) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         // return res.end("file not found");
//         // } else {
//         if (files.filetoupload.size == 0) {
//           res.write("sala fileich ni hai<br>");
//           res.end(JSON.stringify(files));
//         } else {
//           // res.write(
//           //   "file uploaded<br />" +
//           //     JSON.stringify({ fields }) +
//           //     "<br>" +
//           //     JSON.stringify({ files })
//           // );
//           let oldPath = files.filetoupload.originalFilename;
//           let newPath =
//             "E:Projects/nodejs/saved files/" +
//             files.filetoupload.originalFilename;
//           res.write(newPath + " " + "file uploaded<br />");
//           fs.rename(oldPath, newPath, (err) => {
//             if (err) throw err;
//             else {
//               res.write("file Saved");
//               res.end();
//             }
//           });
//           res.end();
//         }
//       });
//     } else {
//       fs.readFile("index.htm", (e, d) => {
//         if (e) {
//           res.writeHead(400, { "Content-Type": "text/html" });
//           return res.end("404 error not found");
//         } else {
//           res.write(d);
//           return res.end();
//         }
//       });
//     }
//   })
//   .listen(8080);

http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var newpath = "c:/saved/" + files.filetoupload.originalFilename;
        // fs.rename(oldpath, newpath, function (err) {
        //   if (err) throw err;
        //   res.write("File uploaded and moved!");
        //   res.end();
        // });
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
  .listen(8080);

/***************************************** */
// http
//   .createServer((req, res) => {
//     if (req.url == "/fileupload") {
//       let form = new formidable.IncomingForm();
//       form.parse(req, (err, field, files) => {
//         let oldLoc = files.filetoupload.filepath;
//         let newLoc = "saved/";
//         fs.readFile(oldLoc, (err, data) => {
//           if (err) throw err;
//           console.log("files reading");
//           fs.writeFile(newLoc, data, (err) => {
//             if (err) throw err;
//             res.write("file moved");
//             res.end();
//           });
//           fs.unlink(oldLoc, (err) => {
//             if (err) throw err;
//             res.write("old file deleted");
//             res.end();
//           });
//         });
//       });
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(
//         '<form action="fileupload" method="post" enctype="multipart/form-data">'
//       );
//       res.write('<input type="file" name="filetoupload"><br>');
//       res.write('<input type="submit">');
//       res.write("</form>");
//       return res.end();
//     }
//   })
//   .listen(8080);
/****************************** */

// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "bitnbyte06@gmail.com",
//     pass: "9876543210srijan",
//   },
// });

// let mailOption = {
//   from: "bitnbyte06@gmail.com",
//   to: "srijanagrawal421@gmail.com",
//   subject: "checking nodemailer",
//   text: "hello jii nodemailer is working fine",
// };

// transporter.sendMail(mailOption, (err, info) => {
//   if (err) console.log(err);
//   else console.log("mail send " + info.response);
// });
