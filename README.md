# Calculator
## Getting Started
The scripts are the same as Create React App, but first download the project dependencies::

```sh 
yarn 
```

To run the development version:
```sh 
yarn start 
```
Start a service on: `http://localhost:3000`,

To build the files for production:
```sh 
yarn build 
```

You can test the production version with the static server, [serve](https://www.npmjs.com/package/serve):
```sh 
serve -s build
```

## Reasons
### Build
The project is developed with **React** as an interface creation tool. The _transpiler_ choices present in the project also aim for this stack, but at the conclusion of the project, the [Create React App](https://github.com/facebook/create-react-app) set up was adopted by abstraction of its own configuration to be able to deliver better envelope results than previously experienced with objective configurations.

> Custom settings and results of why CRA can be submitted if it is interesting for the exam.  

### Decimal.js
Throughout my experience with JavaScript I have come across several times that the _Number_ type may not provide the required accuracy and may not even deliver mathematical results that abstract your computational operations into performance (read more about [base conversion problem](https://floating-point-gui.de/basic/)), so I chose [Decimal.js](https://mikemcl.github.io/decimal.js) as a library for the purpose of delivering a functional prototype similar to the primitive type, but also maintaining confidence in the necessary mathematical operations.

The library also delivers specific functions such as `lessThanOrEqualTo` that in this project aided the purpose of composition writing.

Other advantages:

* Tree Shakeable;
* Method Chaining;
* Unlike the Float type where `1.0 === 1` library adoption maintains significant decimal digits;
* Conversions to fixed accuracies allow entry of _round rules_;

## Coverage
The code was covered by the ESlint with, Create React App rules, and [Airbnb/javascript: JavaScript Style Guide](https://github.com/airbnb/javascript).

```sh 
# Creates an HTML file with possible violations.
yarn coverage:eslint 
```

## TODO

- React Tests

## Tests
```sh 
yarn test
```