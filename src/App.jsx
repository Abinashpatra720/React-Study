import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me"),
//     React.createElement(Pet, {
//       animal: "Dog",
//       name: "Luna",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       animal: "Bird",
//       name: "Pepper",
//       breed: "Cocket",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name ="Luna"animal= "Dog" breed = "Havanese"></Pet>
      <Pet name ="Pepper"animal= "Bird" breed = "Cocket"></Pet>
    </div>
  );
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
