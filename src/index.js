import ReactDOM from "react-dom";
import MyFoods from "./components/MyFoods";

const rootElement = document.getElementById("root");

const foods = ["Bryani", "Pizza", "Burger"];

ReactDOM.render(<MyFoods foods={foods} />, rootElement);
