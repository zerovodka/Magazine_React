import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import Button from "../Elements/Buttons";

const Header = ({ navigate, is_login }) => {
  const logo = <FontAwesomeIcon icon={faRobot} />;
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        minHeight: "5rem",
        alignItems: "center",
        padding: "0 2rem",
        marginBottom: "2rem",
        background: "#ccb9bc",
      }}
    >
      <div
        className="header-logo"
        style={{ fontSize: "2rem", color: "#fff" }}
        onClick={() => {
          navigate("/");
        }}
      >
        {logo}
      </div>
      <div>
        <Button navigate={navigate} is_login={is_login} />
      </div>
    </div>
  );
};

export default Header;
