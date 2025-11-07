
function Button() {

   const button = {
        backgroundColor: "blue",
        color: "white",
        padding: "9px 20px",
        margin: "2px",
        border: "none",
        cursor: "pointer",
     }

   const handleClick = (e) => e.target.textContent = "OUCH";

   const handleClick2 = (name) => alert(`${name} stop clciking me`)
     
    return(
    <>
      <button onClick={ () => handleClick2("Bro")} style={button}>Click me</button>
      <button onClick={(e) => handleClick(e)} style={button}>Click me </button>
    </>
   )
}

export default Button