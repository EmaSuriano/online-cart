# Online Cart

[![prettier](https://img.shields.io/badge/styled%20with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![eslint](https://img.shields.io/badge/eslint-enabled-green.svg)](https://eslint.org/)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

![MainScreen](./images/productDetail.gif)

> Mobile first ecommerce that displays a list of products with prices, the user can the details of any product by clicking on it and also filter them by name and price.

## Installation instruction

In order to get up and running the application, you have to run this commands from the root of the project.

```bash
npm install
npm start
```

In order to run test, write

```bash
npm test
```

## Motivation

The objective of this project was to develop a really small version of an ecommerce with the possibility just to see the list of product and check them details.

After having something working I decided to add the filtering feature to the application, which in my opinion add value to it. Now the user can filter via 2 fields:

* Name: Get the products that match with the provided name
* Price: Given a range of price (minimum and maximum), you get the products which are inside that price range.

Also you can combine them as you want!

![Filter feature](./images/filterFeature.gif)

## Technical Decisions

In order to accomplish this project, I decided to implement a React+Redux architecture.

### React

Inside React I used for styling mainly styled-components, because of the really cool API so I can simply create new component that can be easily styled using css and also this css can be modified via props. This gives a lot of flexible when creating new components!

Also, styled-components have a built-in Theme Provider, so I can defined in one place all the color pallette for my application and it will be automatically distributed inside all my components.

This is an example of what I was refering to:

```javascript
const PriceTagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.fontSize}em; // accessing to props
  background: ${props => props.theme.accent}; //theming
  padding: 0.3em;
  border-radius: 1em;
`;
```

I used some components that help me building the application:

* react-svg-spinner: just a Spinner, nothing cool.
* react-input-range: component that display an input range with a MIN and MAX value.
* holen: Declarative fetch for React, this help me to request the detail of the product, something that I didn't want to store in my store ...

### Redux

So this is where it gets interesting. I decided to use a structure called [ducks structure](https://github.com/erikras/ducks-modular-redux) in Redux, which consist in dividing your store in different files, each file represent a feature and inside of it you will find:

* Actions
* Reducer
* Action Creators
* Selectors
* Middleware

This may sound reaaally overwhelming, but in small application this way of writting Redux is awesome! You don't have 10 files just to perform a request to the backend and store inside your store.

I didn't use any helper to create my Redux entities, except for reselect only for perfomance reasons.

## Folder Structure

```
/src
├── ducks
│   └── search.js // Duck
├── screens
│   └── Home
│       └── components //components from this screen only
│       └── index //Connection to redux
│       └── Home //Screen itself
│   └── Product // same structure from above
├── shared
│   └── components //shared components around the application
│       └── Footer.js
│       └── Title.js
│   └── constansts
│       └── theme.js
│       └── services.js
│   └── ducks
│       └── products.js //store products information
│       └── services.js //store filters information
│       └── index.js //merge ducks into one!
├── index.js // start of the application
├── App.js // Router and Redux configuration
└── setupTests.js // Jest configuration for all the tests
```

## Testing

As this is a React+Redux application, most of the critical things to test are the 'glue' of the Redux and React. So this is the perfect case for Integration test!

All the tests in this projects are written as integration trying to avoid mocking dependency.

> The more dependencies you mock, the less confidence are your tests.

I'm not saying that Unit test are a bad practice, I'm just saying that in my opinion Integration Test brings more confidence than Unit Test.

## What can be improved?

* I would add Unit test to all the shared components, due to they can be reusable in many places of the application they should be tested as much as possible.
* I would add a CI, so I can run linter and test autocally after a push and know if a recent change broke the build.
* I would set up Cypress in order to run E2E test, as you can't mock they are the most confidence.
