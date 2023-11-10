// export default function LoginForm () {
//   return (
//     /* We can only return ONE TOP LEVEL ELEMENT! */
//     <form>
//       <input type="input"/>
//       <input type="password"/>
//       <button>Send</button>
//     </form>
//   );
// }

export default function LoginForm() {
  return (
    /* This won't result any actualy element
    So we can use this react fragment syntax */
    <>
      <input type="input" />
      <input type="password" />
      <button>Send</button>
    </>
  );
}
