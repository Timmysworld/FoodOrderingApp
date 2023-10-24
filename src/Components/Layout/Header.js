import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/mealsHeader.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Island Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meals in two groups" />
      </div>
    </Fragment>
  );
};

export default Header;
