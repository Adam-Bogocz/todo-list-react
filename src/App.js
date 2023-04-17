import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Container from "./Container";
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Tasks from "./Tasks";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem(`tasks`)) || [
      { content: "Dodaj zadanie do wykonania", done: false, id: 1 },
    ]
  );

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }

        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
  };

  const addNewTask = (content) => {
    if (content === "") {
      return;
    } else {
      setTasks((tasks) => [
        ...tasks,
        {
          content,
          done: false,
          id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        },
      ]);
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </Container>
  );
}
export default App;
