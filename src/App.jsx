import { useState } from 'react';
import Card from './Card';
import QuickNote from './QuickNote';
import TodoList from './TodoList';
import ContactForm from './ContactForm';
import Clock from './Clock';

function App() {
  const [count, setCount] = useState(0);

  const projects = [
    { title: "Proiect 1", description: "Pagina personala" },
    { title: "Proiect 2", description: "Calculator buget" },
    { title: "Proiect 3", description: "Dashboard React" },
  ];

  return (
    <div>
      <h1>Dashboard</h1>

      {projects.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}

      <p>Ai apasat de {count} ori</p>

      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <QuickNote />
      <TodoList />
      <ContactForm />
      <Clock />
    </div>
  );
}

export default App;