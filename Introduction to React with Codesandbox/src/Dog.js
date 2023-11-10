// Alternative way of exporting
// export default function Dog() {
//   return (<p>Doog</p>);
// }

function Add(x, y) {
  return x + y;
}

function Dog() {
  const pet = "pupy";
  return (<p> {1 + 2} and {pet} said Woof!</p>);
}

// Named export to export multiple things
// Names should be exact match in the import side
export { Dog, Add };