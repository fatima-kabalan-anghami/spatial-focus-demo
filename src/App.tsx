import './App.css'
import { Button } from './app/components/button'
import { GridElements } from './app/components/grid-elements'
import { Row } from './app/components/row'

function App() {

  return (
    // <div className="app">
      // {/* <Button label={'Click'}/> */}
      // {/* <GridElements /> */}

    <div>
      <Row title="Trending">
        <Button label="Movie 1" />
        <Button label="Movie 2" />
        <Button label="Movie 3" />
      </Row>

      <Row title="Popular">
        <Button label="Show 1" />
        <Button label="Show 2" />
        <Button label="Show 3" />
      </Row>

      <Row title="Kids">
        <Button label="Cartoon 1" />
        <Button label="Cartoon 2" />
        <Button label="Cartoon 3" />
      </Row>
    </div>
  )
}

export default App
