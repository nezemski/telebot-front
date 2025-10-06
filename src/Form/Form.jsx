import { useEffect, useState } from "react";
import "./Form.css";
import useTelegram from "../hooks/useTelegram";

const Form = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("");

  const { tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({ text: "Отправить данные" });
  }, []);

  useEffect(() => {
    if (!street || !city) {
      tg.MainButton.hide();
    } else tg.MainButton.show();
  }, [tg.MainButton, street, city]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e) => {
    console.log(e.target.value);
    setSubject(e.target.value);
  };

  return (
    <div className={"form"}>
      <h3>Введите ваши данные</h3>
      <input
        className={"input"}
        type="text"
        placeholder={"Страна"}
        onChange={onChangeCountry}
        value={country}
      />
      <input
        className={"input"}
        type="text"
        placeholder={"Город"}
        onChange={onChangeCity}
        value={city}
      />
      <input
        className={"input"}
        type="text"
        placeholder={"Улица"}
        onChange={onChangeStreet}
        value={street}
      />
      <select className={"select"} onChange={onChangeSubject} value={subject}>
        <option value={"legal"}>Юр.лицо</option>
        <option value={"physical"}>Физ.лицо</option>
      </select>
    </div>
  );
};

export default Form;
