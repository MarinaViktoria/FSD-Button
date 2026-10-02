import { Stack } from "./shared/ui/Stack";
import { Button } from "./shared/ui/Button";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Stack direction="column" align="center" justify="center" gap={16}>
        <p>Number: {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
      </Stack>
      <Button color="primary">Отправить</Button>
    </>
  );
}

export default App;
