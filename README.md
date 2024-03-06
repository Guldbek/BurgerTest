## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## What is missing? / If i had more time

1. More labels for accessibility.
2. More unit tests :(
3. A validation handler for checking if the requirements for the "next" button is met, such as (Date selection, tickets..) - this can cause the Overview step to be blank.
4. Would have added a cool background with "raining" spinning burgers
5. More SVG icons for a better look and feel and easer UI recognition
6. Forgot to implement a email field
7. Would have loooooved to create a router history for the steps.

## Considerations and reflections

#### Security

In general having time to implement some of OWASP input validation, would have been a very good idea, both for the user experience and security aspect

#### User privacy

I forgot to implement any user information fields, so GPDR wise it should be excellent! /s

### Testing & Accessibility

I've combined theese two topics, in the readme for a reason. If you decide to use `getByLabel` and avoid using `test-id` You will gain the benefit of accessbility while writing your tests, personally i love this philosophy! You can see an example of this at `tests/bookingFlow.spec.ts`

I would have loved to prioritize more unit & e2e tests, but i decided to focus on trying to complete the flow, and spent what time i had left on tests.

### Deployment

Since this is a web page, it could easily have been run on something like Vercel.

# High Level Diagram

![Diagram](./diagram.png)
