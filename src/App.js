
import ColorCards from "./components/ColorCards";
function App() {
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    fontFamily: 'Arial, Helvetica, sans-serif'
  }
  return (
    <div style={style}>
      <ColorCards colorName='PINK' colorCode='#FF6663' />
      <ColorCards colorName='GRAY' colorCode='#333333' />
      <ColorCards colorName='BLACK' colorCode='#000000' />
      <ColorCards colorName='GREEN' colorCode='#38BB14' />
      <ColorCards colorName='RED' colorCode='#390B0B' />
      <ColorCards colorName='ORANGE' colorCode='#FF8000' />
      <ColorCards colorName='YELLOW' colorCode='#FFF500' />
      <ColorCards colorName='LIGHT GRAY' colorCode='#CCCCCC' />
      <ColorCards colorName='PURPLE' colorCode='#7E41A2' />
      <ColorCards colorName='BROWN' colorCode='#C14911' />
    </div>
  );
}

export default App;
