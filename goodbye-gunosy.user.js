// ==UserScript==
// @name goodbye-gunosy
// @namespace jp.youcube
// @include http://gunosy.com/*
// @version 1
// @grant none
// ==/UserScript==

$(function(){
  location.href = $('.articles-show-click').attr('href');
});

