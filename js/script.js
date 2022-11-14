// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
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
 * This function displays the slider value.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML =
    "<p>Value is: " + slider.value + "</p>"
}

/**
 * This function generates a random number.
 */
randomNum = Math.floor(Math.random() * 10) + 1 // returns a random integer from 1 to 10

/**
 * This function determines if it is equal to the generated number */

if (valueFromSlider == randomNum) {
  ;("<p> That is the correct answer. </p>")
} else {
  ;("<p> That is the wrong answer. </p>")
}
