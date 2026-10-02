import { Stack } from "./shared/ui/Stack";
import { Button } from "./shared/ui/Button";
import "./App.css";

function App() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <Stack direction="row" gap={16}>
        <Button onClick={handleClick} color="primary">
          Send
        </Button>
        <Button color="secondary">Send</Button>
        <Button color="outline">Send</Button>
        <Button color="transparent">Send</Button>
        <Button color="disabled">Send</Button>
      </Stack>
    </>
  );
}
export default App;
