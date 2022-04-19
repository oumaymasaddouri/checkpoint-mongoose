import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import ContactList from "./Components/ContactList";
import AddContact from "./Components/AddContact";

import EditContact from "./Components/EditContact";
import Notfound from "./Components/Notfound";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/Contacts" element={<ContactList></ContactList>} />
        <Route path="/addcontact" element={<AddContact></AddContact>} />
        <Route path="/edit/:id" element={<EditContact></EditContact>} />
        <Route path="/*" element={<Notfound></Notfound>} />
      </Routes>
    </div>
  );
}

export default App;
