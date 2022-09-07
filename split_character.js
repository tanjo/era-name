const eraname = require('./era-name/duration.json');

(async () => {
  let words = new Set();
  eraname.map((eraName) => eraName.name).forEach((name) => {
    name.split('').forEach((w) => {
      words.add(w);
    });
  });
  console.log([...words].reduce((a, b) => `${a},"${b}"`, ""));
})();