# Home Fitness

```
/**
 * Following is the dev setup details for the project
 */

// 1. Create a .env file to setup the Env variables required

// 2. install all dependencies
    npm install

// 3. run development server
    npm run dev

```

### Proj Configurations

Added below is the project structure

```
src
 |- App
    |- components
        |- api      // Api related code (*) Alias available 'API/*'
        |
        |- common   // Common utils and resources
            |- hooks (*) Alias available 'Hooks/*'
            |- utils (*) Alias available 'Utils/*'
            |        contains the code for the axios bas setup
            |        update the baseurl.
            |
            |- constants (*) Alias available 'Constants/*'

        |
        |- layout   // Page level components (should rename to Pages in the future)
        |- UI       // UI elements | atoms | molecules | animations (*) Alias available 'UI/*'
    |- Theme        // theme related constants
```

> Note: Added jsconfig.json config in the project to support Aliases for certain paths

https://coolors.co/ea698b-d55d92-c05299-ac46a1-973aa8-822faf-6d23b6-6411ad-571089-47126b
https://coolors.co/3fc1c0,20bac5,00b2ca,04a6c2,0899ba,0f80aa,16679a,1a5b92,1c558e,1d4e89
https://coolors.co/99e2b4-88d4ab-78c6a3-67b99a-56ab91-469d89-358f80-248277-14746f-036666
