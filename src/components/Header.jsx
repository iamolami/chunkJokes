import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <nav className="header__navigation">
        <ul className="header__ul">
          <li className="header__li"><a href='/' className="header__link">sofunktioniert's</a></li>
          <li className="header__li"><a href='/' className="header__link">sonderangebote</a></li>
          <li className="header__li"><a href='/' className="header__link">mein bereich</a></li>
        </ul>
      </nav>
      <div className="header__container">
        <div className="header__box">
          <h2 className="header__main">The Joke Bible</h2>
          <p className="header__desc">Daily Laughs for you and yours</p>
          <form className="header__form">
            <input type='search' className="header__input" placeholder='How can we make you laugh today?'/>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header