'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.main-nav__toggle');

pageHeader.classList.remove('page-header--nojs');

if (headerToggle) {
  headerToggle.addEventListener('click', function () {
    pageHeader.classList.toggle('page-header--opened');
  });
}
