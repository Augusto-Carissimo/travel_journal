import "../css/Header.css"
import earth from "../images/Fill 213.png"

function Header() {
  return(
    <header>
      <img src={earth} />
      <h1> my travel journal. </h1>
    </header>
  )
}

export default Header