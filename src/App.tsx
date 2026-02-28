import UsersInformations from "./components/UsersInformations";

import "./App.css";

const user1 = {
  name: "Safeer Rahaman",
  age: 23,
  isRegister: true,
  language: ["English", "Bangla"],
};

function App() {
  return (
    <>
      <UsersInformations
        user={user1}
      ></UsersInformations>
    </>
  );
}

export default App;
