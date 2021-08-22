const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const md5 = require("md5");

exports.sharpFile = (filename, px, pz) => {
  try {
    let compressedFile = path.join(
      __dirname,
      "../public/uploads/",
      md5(new Date().getTime()) + ".jpg"
    );
    let sharpcha = path.join(
      path.dirname(__dirname) + `/public/uploads/${filename}`
    );
    const file = sharp(sharpcha)
      .resize(px, pz)
      .jpeg({
        quality: 100,
      })
      .png({
        quality: 100,
      })
      .toFile(compressedFile, (err) => {
        if (err) {
          throw err;
        }
        fs.unlink(sharpcha, (error) => {
          if (error) {
            throw err;
          }
        });
      });
    return "/public/uploads/" + path.basename(compressedFile);
  } catch (error) {
    throw error;
  }
};