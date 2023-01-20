import Calculator from "./pages/calculator";
import RoutesApplication from "./routes";
import Global from "./styles/Global";
import axios from "axios";

function App() {
  axios
    .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", {
      amout: 15000,
      installments: 3,
      mdr: 4,
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  return (
    <div className="App">
      <Global />
      <RoutesApplication />
    </div>
  );
}

export default App;
