# Casino Game Filter

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### About CasinoGameFilt v 0.1.0
Classic Games filter application, that allows registered user to navigate and filter available games.

### How to install
 
 To install copy the folder to C:/projects/[yourProjectName]
 run command: npm install
 3rd party libraries:
  React-router-dom
  React-Select
  typed-scss-modules for module scss indication
  typescript-plugin-css-modules same for css module

  security small defects:
  after install it will say [n] vulnerabilities,
  run command: npm audit fix, it will fix the issues

### How to run

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To run Application simply in command line: npm run start

Users to play with: 

  username: rebecka
  password: secret

  or  
  username: eric
  password: dad

  or
  username: stoffe
  password: rock

If credentials wrong -> Games will not be opened,
it will show that you entered not correct details.

Inside Games page you can freely filter like you like:
 search by text, providers, groups and sorting asc, desc and newest (from 2021)

Enjoy the application

## Screen 

![Alt text](https://norwaydict.com/casino-game-fit/screen.jpg "Screen")


### Project structure
 app / - main entry component
 auth / - Authentication page
 config / - types and configurations
 assets / - images, sounds
 games / - main Application logic
  games / - games list 
  sortPanel - main Filter Panel (on right side)  
   sortSearch - input block to search by text
   sortSection - input block to filter by Select inputs
 headMenu / - main top menu
 routes / - all routes
 scss / - all global scss
 server / auth.json, data.json - actual json data
 services / - handlers to fetch, save data to / from server
 index.tsx - main entrance 

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
