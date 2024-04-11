import exe from '@angablue/exe';

const build = exe({
    entry: './bin/chhex.js',
    out: "./build/My Cool App.exe",
    pkg: ["-C", "GZip", '--debug'], // Specify extra pkg arguments
    version: "2.4.2",
    target: "latest-win-x64",
    properties: {
      FileDescription: "My Cool App",
      ProductName: "My Cool App",
      LegalCopyright: "AngaBlue https://anga.blue",
      OriginalFilename: "My Cool App.exe",
    }, 
});

build
  .then(() => console.log("Build completed!"))
  .catch((err) => console.log(err));
