import { Button } from "./app/components/button";
import { Row } from "./app/components/row";

function App() {

  return (
    <div>
      <Row title="Trending" defaultFocus>
        <Button label="Movie 1" onSelect={() => alert("Movie 1")} />
        <Button label="Movie 2" onSelect={() => alert("Movie 2")} />
        <Button label="Movie 3" onSelect={() => alert("Movie 3")} />
      </Row>

      <Row title="Popular">
        <Button label="Show 1" onSelect={() => alert("Show 1")} />
        <Button label="Show 2" onSelect={() => alert("Show 2")} />
        <Button label="Show 3" onSelect={() => alert("Show 3")} />
      </Row>

      <Row title="Kids">
        <Button label="Cartoon 1" onSelect={() => alert("Cartoon 1")} />
        <Button label="Cartoon 2" onSelect={() => alert("Cartoon 2")} />
        <Button label="Cartoon 3" onSelect={() => alert("Cartoon 3")} />
      </Row>
    </div>
  )
}

export default App
