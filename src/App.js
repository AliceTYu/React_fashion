import Arrivals from "./components/arrivals/Arrivals";
import Brands from "./components/brands/Brands";
import Favourite from "./components/favourite/Favourite";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Sale from "./components/sale/Sale";
import Send from "./components/send/Send";


function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Sale />
      <Favourite />
      <Send />
      <Footer />
    </div>
  );
}

export default App;
