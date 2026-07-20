function App(){
  const officeSpaces = [
    {
      name:"DBS",
      rent:50000,
      address:"Chennai"
    },
    {
      name:"Regus",
      rent:75000,
      address:"Banglore"
    },
    {
      name:"WeWork",
      rent:65000,
      address:"Hyderabad"
    }
  ];

  return (
    <div style = {{ margin: "30px"}}>

      <h1>Office space,At Affordable range</h1>
      <img
      src = "/office.png"
      alt = "Office Space"
      width="250"
      />
      <br /><br />
      {officeSpaces.map((officeSpaces,index) => (
        <div key = {index} style={{ marginBottom: "25px" }}>
          <h2>Name: {officeSpaces.name}</h2>
          <h3
          style={{
            color:
            officeSpaces.rent < 60000 ? "red" : "green"
          }}
          >
            Rent: Rs. {officeSpaces.rent}
          </h3>
          <h3>Address: {officeSpaces.address}</h3>

    </div>
      ))}
        </div>
  );
}
export default App;