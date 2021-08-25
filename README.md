<h1 align="center">Twenty48</h1>
<p align="center">
<img align="center" src="./assets/twenty48.gif" height="500px" width="500px" />
</p>


This is a modified clone of the game 2048, which can be seen here: [2048](https://2048game.com/)! This project is built using React, Typescript, and Sass. This also gave me an excuse to give [recoil](https://github.com/facebookexperimental/Recoil) a try for managing theme state, which is persisted with localstorage.

*Thanks [hFriedman13](https://github.com/Hfriedman13), for your collaboration in theming and testing!:heart:*

#### Demo
Get a taste of that puzzling goodness, [here!](https://cgado12.github.io/Twenty48/)
- Check out the Android version [here!](https://play.google.com/store/apps/details?id=com.csalgado.twentyfortyeight)
- Check out the IOS/Mac version [here!](https://apps.apple.com/us/app/twenty48-multi-theme/id1582738026)
- - - - 

### Installation
Please consider pulling the repo or downloading the project as a zip! To run locally please use a terminal and navigate to the project directory.

1) run: `npm install` to install dependancies
2) run: `npm start` to start the project.

### Mobile Releases
Mobile versions of the app were made (with minimal configuration/adjustments) using [Capacitor](https://github.com/ionic-team/capacitor). These versions of the application are available above!

### Known Issues
- Chrome on IOS mobile *sometimes does not play sliding transitions.
- Electron releases contain an error where an alert will pop up each move while 2048 is on the board, this is fixed in the web version.
