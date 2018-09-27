# React assignment

## Crew applications

## Installation
### Requirements
- nodejs version 8.10.0 or higher.
- npm (which should install along with nodejs) 
  or yarn (current version 1.10.1 should work) for dependencies and package management.
  
- Uncompress zip file by downloading it from:
https://github.com/sitgesfer/crewapp

- Or clone from git repo:
git clone https://github.com/sitgesfer/crewapp.git

- cd into crewapp (or given name) directory.

- Install packages using:
  - npm install -or-
  - yarn install

### Running the app
- The app can run using either webpack devserver:
  - npm start -or- yarn start
- Or build bundle:
  - npm run build -or- yarn build
  
- Then point open /dist/index.html with a browser or copy in the document root of a webserver.

## The solution

### React-Redux
The solution was implemented using react-redux for state management.

The store contains the state of the application, in two main objects:
- members. Which stores the data obtained from the REST api.
- memberStatus. Which stores the state of each member. Initially all in "applied".

For asynchronous actions, I chose redux-promise-middleware, to maintain actions as simple 
functions even using HTTP requests via fetch or axios. This way the response from server is
returned as the action payload. Redux-promise-middleware also divides the action into three
stages: _PENDING, _FULLFILLED, and _REJECTED for error and loading data control.  

### UI Components
For the UI, I used react-bootrap as UI framework due to:
- Easiness of the components used.
- Ready to work responsiveness.
- Ready to work accessibility.

## Original assignment
### Requirements

Create a frontend React app to help with the hiring and onboarding of crew personnel as per the image below:

![Sketch of crew applications app](./docs/app-sketch.jpg "Sketch of crew applications app")

Prospective crew move through three stages:

- applied
- interviewing
- hired

Data sources:

- Crew personnel data: https://randomuser.me/api/?nat=gb&results=5
