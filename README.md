<h1 align="center">Twenty48</h1>
<p align="center">
<img align="center" src="./assets/twenty48.gif" height="500px" width="500px" />
</p>


This is a modified clone of the game 2048, which can be seen here: [2048](https://2048game.com/)! This project is built using React, Typescript, and Sass. This also gave me an excuse to give [recoil](https://github.com/facebookexperimental/Recoil) a try for managing theme state, which is persisted with localstorage.

*Thanks [hFriedman13](https://github.com/Hfriedman13), for your collaboration in theming and testing!:heart:*

#### Demo
Get a taste of that puzzling goodness, [here!](https://cgado12.github.io/Twenty48/)
- Check out the Android version [here!](https://play.google.com/store/apps/details?id=com.csalgado.twentyfortyeight)
- - - - 

### Installation
Please consider pulling the repo or downloading the project as a zip! To run locally please use a terminal and navigate to the project directory.

1) run: `npm install` to install dependancies
2) run: `npm start` to start the project.

### Desktop and Mobile Releases
You may play the game at the demo link above or pulling the repository. However, I have created separete repositories to build a desktop version using [Electron](https://github.com/electron/electron) and also mobile versions using [Capacitor](https://github.com/ionic-team/capacitor). These versions of the application are available under the [Releases](https://github.com/cgado12/Twenty48/releases) section.
- App store links will be provided once the review process is complete
- Electron release will be updated as major progress is made.

### Known Issues
- Chrome on IOS mobile *sometimes does not play sliding transitions.
- Electron releases contain an error where an alert will pop up each move while 2048 is on the board, this is fixed in the web version.
