const user = {
  id: 506,
  name: "Ahsan Habib",
  address: { thana: "Bhurungamari", zila: "Kurigram" },
  wears: ["lungi", "t-shirt"],
  isActive: true,
};
const stringified = JSON.stringify(user);
const obj = JSON.parse(stringified);
console.log(stringified);
console.log(obj);
