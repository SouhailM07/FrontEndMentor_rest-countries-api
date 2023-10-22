// style
import "./mycontainer.css";
// components
import { Navbar, SearchBar, CountriesContainer } from "../../components";
//
export default function MyContainer() {
  return (
    <div className="">
      <Navbar />
      <SearchBar />
      <CountriesContainer />
    </div>
  );
}
