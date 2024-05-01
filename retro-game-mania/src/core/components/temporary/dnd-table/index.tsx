import { useEffect, useRef, useState } from "react";
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

const TestPiece = () => {
  const ref = useRef(null);
  const [dragging, setDragging] = useState<boolean>(false); 

  useEffect(() => {
    const el = ref.current;

    return draggable({
      element: el!,
      onDragStart: () => setDragging(true), 
      onDrop: () => setDragging(false), 
    });
  }, []);

  return (<img style={({
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gridTemplateRows: 'repeat(8, 1fr)',
    width: '500px',
    height: '500px',
    border: '3px solid lightgrey',
  })} src={'https://fastly.picsum.photos/id/675/200/200.jpg?hmac=9STfESSQ22nwjFi-38ZsER3DM6mArzbYkLPEgq3cHXg'} alt={'alt'} ref={ref} />);
}

export default function Piece() {
  return (
    <div>
      <TestPiece></TestPiece>
    </div>
  )
}
