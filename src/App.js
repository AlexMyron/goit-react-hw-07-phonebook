import "./App.css";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";
import { Wrapper } from "./App.styled";

const App = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Wrapper>
  );
};

export default App;
