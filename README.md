# webdriverio-cucumber-automation
Demo of a Automation Framework built on WebdriverIO and Cucumber

This is a simple demonstration of using the WebdriverIO framework to build an automation framework based on Cucumber(BDD).

This repository contains a collection of sample webdriverIO-v7 (Selenium - Node.js/JavaScript) projects and libraries that demonstrate how to use the tool and develop automation script using the Cucumber (v6.x) BDD framework. It uses the chromedriver NPM package that wraps the ChromeDriver for you. This service does not require a Selenium server, but uses ChromeDriver to communicate with the browser directly.

**Installation**

This project is tested on Node v12.0.0 and above.

Node.JS: Install from the site - https://nodejs.org/en/ take the LTS version based on your Operating system. Please make sure you install NodeJS globally. To take full advantage of the command line and use grunt tasks you will need to make sure that you have added node_modules/.bin to your $PATH. Otherwise you will need to install npm install -g grunt-cli globally.

JDK 1.8: It is optional, install JDK 1.8+ and make sure class path is set properly. JAVA is require to start Selenium Server on your local environment nothing else.

**Clone the project**

Run 'npm install'. to install all the dependencies

**Running the test**

To execute the entire test suite in local development, you can use any one of the options mentioned below

Option 1: npx wdio run ./wdio.conf.js

**Config Files**

WebdriverIO uses configuration files to setup and execute tests in specific ways. The configuration is fully customizable, and different functions can be invoked before, during and after each test or test suite. Config files can be found as wdio.conf.js
