import React, { useEffect } from 'react';


function Head() {
  useEffect(() => {
    const nav = document.querySelector('.nav');
    const searchIcon = document.querySelector('#searchIcon');
    const navOpenBtn = document.querySelector('.navOpenBtn');
    const navCloseBtn = document.querySelector('.navCloseBtn');

    const handleSearchIconClick = () => {
      nav.classList.toggle('openSearch');
      nav.classList.remove('openNav');
      if (nav.classList.contains('openSearch')) {
        searchIcon.classList.replace('uil-search', 'uil-times');
      } else {
        searchIcon.classList.replace('uil-times', 'uil-search');
      }
    };

    const handleNavOpenBtnClick = () => {
      nav.classList.add('openNav');
      nav.classList.remove('openSearch');
      searchIcon.classList.replace('uil-times', 'uil-search');
    };

    const handleNavCloseBtnClick = () => {
      nav.classList.remove('openNav');
    };

    searchIcon.addEventListener('click', handleSearchIconClick);
    navOpenBtn.addEventListener('click', handleNavOpenBtnClick);
    navCloseBtn.addEventListener('click', handleNavCloseBtnClick);

   
    return () => {
      searchIcon.removeEventListener('click', handleSearchIconClick);
      navOpenBtn.removeEventListener('click', handleNavOpenBtnClick);
      navCloseBtn.removeEventListener('click', handleNavCloseBtnClick);
    };

  }, []);


  
  return (
    <nav className="nav">
      <i className="uil uil-bars navOpenBtn"></i>
      <a href="#" role="button" className="logo">
        Pearl
      </a>

      <ul className="nav-links">
        <i className="uil uil-times navCloseBtn"></i>
        <a href="#" role="button">
          Home
        </a>
        <a href="#" role="button">
          Services
        </a>
        <a href="#" role="button">
          Products
        </a>
        <a href="#" role="button">
          About Us
        </a>
        <a href="#" role="button">
          Contact Us
        </a>
      </ul>

      <i className="uil uil-search search-icon" id="searchIcon"></i>
      <div className="search-box">
        <i className="uil uil-search search-icon"></i>
        <input type="text" placeholder="Search here..." />
      </div>
      <script src="" defer></script>
    </nav>
  );
}

export default Head;
