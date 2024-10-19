import { useEffect, useState } from 'react';
import { useIsOnline } from './hooks/useIsOnline';
import DebounceApp from './usehook/DebounceApp';
import './App.css';

interface userInfo {
  firstname: string;
  lastname: string;
  email: string;
  age: number;
}

interface TodoProps extends userInfo {
  title: string;
  description: string;
  done: boolean;
}

function ShowStatus(){
  const isOnline = useIsOnline();
  if(isOnline){
    return "🟢You are online Yay!";
  }
  return "🔴Oops! No internet connection";
}

function RenderTodo(props: TodoProps) {
  useEffect(() => {
    console.log("RenderTodo Mounted!");

    return () => {
      console.log("RenderTodo Unmounted!");
    };
  }, []);

  return (
    <>
      <ShowStatus/>
      <DebounceApp/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>Assigned to: {props.firstname} {props.lastname}</p>
      <p>Email: {props.email}</p>
      <p>Age: {props.age}</p>
      {props.done ? <h1>Done</h1> : <h1>Pending</h1>}
    </>
  );
}

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRender(render => !render);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  const user: userInfo = {
    firstname: 'John',
    lastname: 'Doe',
    email: 'johndoe@gmail.com',
    age: 30
  };

  return (
    <>
      {render ? (
        <RenderTodo
          title="First Task"
          description="I am starting my first task"
          done={false}
          firstname={user.firstname}
          lastname={user.lastname}
          email={user.email}
          age={user.age}
        />
      ) : (
        <div><ShowStatus/><div>Component Unmounted</div></div>
      )}
    </>
  );
}

export default App;


//! Always use 'swr' library for data fetching from the backend, there are multiple features of it either it is pagination and many more visit this site below: 
// Link: (https://refine.dev/blog/data-fetching-next-js-useswr/#:~:text=SWR%20is%20an%20acronym%20for,%2C%20pagination%2C%20and%20many%20others.)