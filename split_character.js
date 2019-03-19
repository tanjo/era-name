const eraname = require('./era-name/duration.json');

(async () => {
  let words = new Set();
  eraname.map((era-name) => era-name.name).forEach((name) => {
    name.split('').forEach((w) => {
      words.add(w);
    });
  });
  console.log([...words].reduce((a, b) => `${a},"${b}"`, ""));
})();