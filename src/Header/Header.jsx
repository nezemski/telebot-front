// import { useEffect } from "react";
import Button from "../Button/Button";
import useTelegram from "../hooks/useTelegram";

const Header = () => {
  const { onClose, user } = useTelegram();

  return (
    <div className={"header"}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={"username"}>{user?.userName}</span>
    </div>
  );
};

export default Header;
