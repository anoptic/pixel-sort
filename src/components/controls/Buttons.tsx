const Buttons = () => { 
  // console.log(props);
  
  const handleSort = () => {
    console.log('<Sort>', 'btn pressed');
  }
  const handleSave = () => {
    console.log('<Save>', 'btn pressed');
  }
  const handleReset = () => {
    console.log('<Reset>', 'btn pressed');
  }
  const handleRefresh = () => {
    console.log('<Refresh>', 'btn pressed');
  }

  return ( 
    <div className="btns">
      <button className="ctrl-btn" onClick={handleSort}>Sort</button>
      <button className="ctrl-btn" onClick={handleSave}>Save</button>
      <button className="ctrl-btn" onClick={handleReset}>Reset</button>
      <button className="ctrl-btn" onClick={handleRefresh}>Refresh</button>
    </div>
  );
}

export default Buttons;