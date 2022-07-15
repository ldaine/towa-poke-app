# towa-poke-app
Towa Intro Project. Goal is to show all pokemon available in PokeApi

## Development

### Prerequisites 

install ionic cli on you system. 

`npm install -g @ionic/cli`

More info: https://ionicframework.com/docs/intro/cli

### Run the app 

Run the app locally 

`ionic serve`

## Prod build 

Build The project for production with command 

`npm run build --prod` 

The build can be found in 'build' folder. 
The latest build of the current version can be found in repository. This was done intentionally to deploy the applicatioon automatically to Azure Static Apps. 

## Deployment to azure static apps

Create static app and link the app to GitHub Repository. Source of the build is build folder.
