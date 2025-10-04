import { useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import useTelegram from "./hooks/useTelegram";
import { Route, Routes } from "react-router-dom";
import ProductList from "./ProductList/ProductList";
import Form from "./Form/Form";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={"form"} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
