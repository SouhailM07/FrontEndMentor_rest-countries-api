// style
import "./mycontainer.css";
// components
import { Navbar, SearchBar } from "../../components";
//
export default function MyContainer() {
  return (
    <div className="border-2 border-red-500">
      <Navbar />
      <SearchBar />
    </div>
  );
}
