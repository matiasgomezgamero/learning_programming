import ask from "./utils.js";

(async () => {
  var n = await ask("what number?");
  console.log(n);
})();
