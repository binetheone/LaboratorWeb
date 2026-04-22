import { useState, useEffect } from 'react';
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3>Ora curenta</h3>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;