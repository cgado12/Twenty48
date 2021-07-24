<h1 align="center">Twenty48</h1>

This is a modified clone of the game 2048, which can be seen here: [2048](https://2048game.com/)! This project is built using React, Typescript, and Sass. This also gave me an excuse to give [recoil](https://github.com/facebookexperimental/Recoil) a try for managing theme state, which is persisted with localstorage.

*Thanks [hFriedman13](https://github.com/Hfriedman13), for your collaboration in theming and testing!:heart:*
- - - - 

#### Installation

Please consider pulling the repo or downloading the project as a zip! To run locally please use a terminal and navigate to the project directory.

1) run: `npm install` to install dependancies
3) run: `npm start` to start the project.

#### Desktop Mode
There is an electron wrapped version of the app that can be found under the branch: [dev-electron](https://github.com/cgado12/Twenty48/tree/dev-electron). The branch contains updated `README`instructions for running/building the app. You will need to `rm -rf node_modules && rm package.lock` and run `npm install` when switching (and working!) between electron and non electron versions of the app. Electron dependancies are not added to the app where it is not used. Please consider downloading a desktop compatible version from the releases section!

#### Tasklist
- [ ] Remove any un-necessary code and update where needed
- [ ] Update the tile combining animation to include tile sliding.
- [ ] Investigate tile box glitch on tiles right before they slide to new position.
- [ ] Write tests 
- [ ] Feature to inc/dec the amount of rows/cols
- [ ] Create a nice modal for Gameover and Game won
- [ ] Create builds for mobile
- [ ] Configure [eslint](https://moduscreate.com/blog/lint-style-typescript/) and [prettier]( https://prettier.io/docs/en/options.html)
- [ ] Add Husky pre-commit hooks
- [ ] Add badges for build, laguages, tests, and other fun stuff :)
- [ ] Create nice modal for clearing best score
- [ ] Tune css a little better for mobile

