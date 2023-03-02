import Buttons from "./Buttons";
import Container from "./Container";
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Tasks from "./Tasks";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: true },
  { id: 2, content: "zjeść kolację", done: false },
];

const hideDone = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
