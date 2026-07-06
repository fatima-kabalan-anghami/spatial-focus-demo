import { useState } from "react";
import { Button } from "./app/components/button";
import { Row } from "./app/components/row";
import { Modal } from "./app/components/modal";

function App() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div>
      <Row title="Trending" defaultFocus>
        <Button
          focusKey="btn-movie-1" label="Movie 1" isFirst
          onSelect={() => setSelectedItem("Movie 1")}
        />
        <Button
          focusKey="btn-movie-2" label="Movie 2"
          onSelect={() => setSelectedItem("Movie 2")}
        />
        <Button
          focusKey="btn-movie-3" label="Movie 3" isLast
          onSelect={() => setSelectedItem("Movie 3")}
        />
      </Row>

      <Row title="Popular" preferredChildFocusKey="btn-show-1">
        <Button
          focusKey="btn-show-1" label="Show 1" isFirst
          onSelect={() => setSelectedItem("Show 1")}
        />
        <Button
          focusKey="btn-show-2" label="Show 2"
          onSelect={() => setSelectedItem("Show 2")}
        />
        <Button
          focusKey="btn-show-3" label="Show 3" isLast
          onSelect={() => setSelectedItem("Show 3")}
        />
      </Row>

      <Row title="Kids" preferredChildFocusKey="btn-cartoon-1">
        <Button
          focusKey="btn-cartoon-1" label="Cartoon 1" isFirst
          onSelect={() => setSelectedItem("Cartoon 1")}
        />
        <Button
          focusKey="btn-cartoon-2" label="Cartoon 2"
          onSelect={() => setSelectedItem("Cartoon 2")}
        />
        <Button
          focusKey="btn-cartoon-3" label="Cartoon 3" isLast
          onSelect={() => setSelectedItem("Cartoon 3")}
        />
      </Row>

      {selectedItem && (
        <Modal
          title={selectedItem}
          message="Are you sure you want to play this?"
          onConfirm={() => { alert(`Playing ${selectedItem}`); setSelectedItem(null); }}
          onCancel={() => setSelectedItem(null)}
        />
      )}
    </div>
  )
}

export default App
