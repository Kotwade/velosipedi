'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.main-nav__toggle');
var pageBody = document.querySelector('.page__body');

pageHeader.classList.remove('page-header--nojs');

if (headerToggle) {
  headerToggle.addEventListener('click', function () {
    pageHeader.classList.toggle('page-header--opened');
    pageBody.classList.toggle('page__body--opened');
  });
}
