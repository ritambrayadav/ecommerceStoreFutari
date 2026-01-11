const fs = require("fs");
const path = require("path");

function copyCss(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  for (const file of fs.readdirSync(src)) {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    if (fs.statSync(srcPath).isDirectory()) {
      copyCss(srcPath, destPath);
    } else if (file.endsWith(".css")) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyCss(
  path.resolve(__dirname, "../src"),
  path.resolve(__dirname, "../dist")
);
console.log("CSS files copied successfully.");