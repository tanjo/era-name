const nengo = require('./era-name/duration.json');

(async () => {
  let words = new Set();
  nengo.map((nengo) => nengo.name).forEach((name) => {
    name.split('').forEach((w) => {
      words.add(w);
    });
  });
  console.log([...words].reduce((a, b) => `${a},"${b}"`, ""));
})();