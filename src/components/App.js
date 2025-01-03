
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(time+1), 1000)
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div>
        <p>You\'ve been on this page for {time} seconds.</p>
    </div>
  )
}

export default App;
