import React from "react";
import "./styles/App.css";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Lista de Usuários</h1>
      </header>
      <UserList />
    </div>
  );
}

export default App;
