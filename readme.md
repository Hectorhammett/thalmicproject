![Thalmic Labs Take Home Challenge](/src/images/thlabsblack.jpg?raw-true)

This is a project for the Take Home Challenge for Thalmic Labs Interview. This project is made with React, Redux and Sass technologies.


## Install

This project is build with Webpack and ReactJS. In order to utilize the project, some tools are needed. First is needed to have installed [NodeJS](https://nodejs.org/en/) on your PC. After this, the PC will have installed the Node Packet Manager (NPM) to install node dependencies for the project. Just need to run:
```
$ npm install
```
This will install all the dependencies.

## Running It
This project has been developed with Webpack. The project can be started with the command:
```
$ npm run dev
```
*This will create a local web server from [webpack-dev-server](https://github.com/webpack/webpack-dev-server) and a browser tab will open. In case that you're not able to see the tab of your browser, you should check the following url:
[http://localhost:8080](http://localhost:8080)

This method runs everything on Development mode, but it's still usable. Another way to run it is via through the following command:
This project has been developed with Webpack. The project can be run with the command:
```
$ npm run serve
```
This is a small express application, with the bare minimum just to show the deployment on a server. Again, the browser should open automatically, but if that's not the case just visit the following link
[http://localhost:8080](http://localhost:8080)

## Sass

The Sass variables are located in the Sass folder under the file _variables.scss. On this file, the variabled for changing the overall application theme can be found. 

On the same folder, a folder with Mixins can be found with the functions to generate compatible code with different renders as well as repetitive functions

## Babel-polyfill

During the whole development, heavy usage of promises and es6 features where used. THe babel polyfil package had to be added. This has been done through webpack so there's no need for further configuration

## Asumptions

The main assumption was made on the documentation part of the icon url. No specification was given if it was an icon of an SVG, JPG or such or more like a fontIcon. The assumption was made thinking that the user would use an image that is loadable to an IMG element. As a matter of fact, in that way is how the app determines if the url contains a valid image or not.

The service id is created by creating a random number and mutliplying it by 1000000000:
```
newEvent.serviceId = Math.random() * 1000000000;
```
If this was a poorly made asumption, let me know and i will change it.

## Google Fonts

The app utilizes google fonts, which aren't included offline. Online Connectivity is needed to load such fonts. Although it's been considered to do it, the connection to the internet is needed as well for the DB to work.

## Database

The database was created using [https://forgetful-elephant.herokuapp.com](https://forgetful-elephant.herokuapp.com) so connection to the internet is needed.


