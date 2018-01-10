# react-hybrid-app
### Proof of concept for an hybrid reactJS and react-native app sharing the same core logic
### What is this app?
A timer, with a reset button 😌 quite innovative, huh? 
Joking aside, the main porpouse of this project was to prove that is possible to share common logic between web and mobile platforms by using [HOCs](https://reactjs.org/docs/higher-order-components.html) and workspaces.

Very interesting reading about how all of this is tight together [here](https://medium.com/viewsdx/how-to-use-yarn-workspaces-with-create-react-app-and-create-react-native-app-expo-to-share-common-ea27bc4bad62).

## How to run this project
Clone the repo
```
git clone git@github.com:nicolas-amabile/react-hybrid-app.git
```
Install the dependencies using yarn ([Why yarn?](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/))
```
yarn install
```

### Web
```
cd web
yarn run start
```
![Alt text](screenshots/web.png?raw=true "Web")

### Native
```
cd native
yarn run start
```
 ![Alt text](screenshots/native.png?raw=true "Native")
 
 Comments are more than welcome! 🎉
