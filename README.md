# To create component

npx generate-react-cli component componentName
By default the above command will create component in components folder
To create inside page folder please go with below command
npx generate-react-cli component componentName --type=page

generate-react-cli.json file contains the properties of this package.

# Snippets

rfce will create Functional Export Component

# FontAwesome

npm i --save @fortawesome/react-fontawesome
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

List of icons can be found on:
https://fontawesome.com/icons

Usage
Solid Style - fas
Regular Style - far
Brand Style - fab
So we will be importing each style with what they are represented with.

Normal Icons
icon="coffee"
{['fas', 'coffee']}
{['far', 'coffee']}
{faCoffee}

For Brand
icon={['fab', 'apple']}

# Start Application

npm start
