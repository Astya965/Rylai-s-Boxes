import React from "react";

const Header = () => {

  return (
    <header className="header">
      <div className="header__logo logo">
        <img className="logo__img" src="img/logo.png" alt="Любопытная Рилай"/>
        <p className="logo__text">Любопытно, что в этой коробке!</p>
      </div>
      <nav className="header__nav main-nav main-nav--opened">
        <button className="main-nav__toggle" type="button">
          <span className="visually-hidden">Открыть\закрыть меню</span>
        </button>
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <a className="main-nav__link" href="#">Главная</a>
          </li>
          <li className="main-nav__item">
            <a className="main-nav__link" href="#">Лидеры</a>
          </li>
          <li className="main-nav__item">
            <a className="main-nav__link" href="#">Арена</a>
          </li>
          <li className="main-nav__item">
            <a className="main-nav__link" href="#">Магазин</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
