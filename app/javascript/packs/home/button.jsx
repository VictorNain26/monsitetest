import React, { useState, useEffect } from 'react'

export const Button = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `tu as cliqué ${count} fois`
  }, [count])
  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}
