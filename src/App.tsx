import { Button } from "./app/components/button";
import { Row } from "./app/components/row";

function App() {

  return (
    <div>
      <Row title="Trending" defaultFocus>
        <Button focusKey="btn-movie-1" label="Movie 1" onSelect={() => alert("Movie 1")} />
        <Button focusKey="btn-movie-2" label="Movie 2" onSelect={() => alert("Movie 2")} />
        <Button focusKey="btn-movie-3" label="Movie 3" onSelect={() => alert("Movie 3")} />
      </Row>

      <Row title="Popular" preferredChildFocusKey="btn-show-1">
        <Button focusKey="btn-show-1" label="Show 1" onSelect={() => alert("Show 1")} />
        <Button focusKey="btn-show-2" label="Show 2" onSelect={() => alert("Show 2")} />
        <Button focusKey="btn-show-3" label="Show 3" onSelect={() => alert("Show 3")} />
      </Row>

      <Row title="Kids" preferredChildFocusKey="btn-cartoon-1">
        <Button focusKey="btn-cartoon-1" label="Cartoon 1" onSelect={() => alert("Cartoon 1")} />
        <Button focusKey="btn-cartoon-2" label="Cartoon 2" onSelect={() => alert("Cartoon 2")} />
        <Button focusKey="btn-cartoon-3" label="Cartoon 3" onSelect={() => alert("Cartoon 3")} />
      </Row>
    </div>
  )
}

export default App
