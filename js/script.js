// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-01-JS/sw.js", {
    scope: "/ICS2O-Unit5-01-JS/",
  })
}

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function generates a random number.
 */
const randomNum = Math.floor(Math.random() * 6) + 1 // returns a random integer from 1 to 6

/**
 * This function determines if it is equal to the generated number */
function myButtonClicked() {

  if (slider.value == randomNum) {
    document.getElementById("guess").innerHTML =
      "<p> That is the correct answer. </p>"
  }

  if (slider.value != randomNum) {
    document.getElementById("guess").innerHTML =
      "<p> That is the wrong answer. </p>"
  }
}