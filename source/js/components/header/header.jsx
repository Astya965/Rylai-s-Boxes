import React, {PureComponent} from "react";

class Header extends PureComponent {
  constructor(props) {
    super(props);

    this._onButtonToggle = this._onButtonToggle.bind(this);
  }

  _onButtonToggle() {
    const nav = document.querySelector(`.main-nav`);

    if (nav.classList.contains(`main-nav--closed`)) {
      nav.classList.add(`main-nav--opened`);
      nav.classList.remove(`main-nav--closed`);
    } else {
      nav.classList.add(`main-nav--closed`);
      nav.classList.remove(`main-nav--opened`);
    }
  }

  render() {
    return (
      <header className="header">
        <div className="header__logo logo">
          <img className="logo__img" src="img/logo.png" alt="Любопытная Рилай"/>
          <p className="logo__text">Любопытно, что в этой коробке!</p>
        </div>
        <nav className="header__nav main-nav main-nav--opened">
          <button className="main-nav__toggle" type="button" onClick={this._onButtonToggle}>
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
}

export default Header;
