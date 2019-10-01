This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## Comments from Izabella and Mattias

1. Split the styling into seperate files - files become to long
2. good use of a theme style
3. line 38 file views/Playlist.js - could minify the map function with () instead of {} and return. Also the tag dosen't need a opening and closing tag.
4. HamburgerMenu.js  - be more consistent and use only class components or functional components. 
5. Course.js Remove all static content and make it take in props to display data.
6. line 230 file views/SelectedContent.js  If content should't show wrap the whole <NothingFoundMessage> in a if statement, if you don´t need the spaceing from that container.
7. Menu.js line 8-9 - Might want to look over using negative values for positioning.
8. src/functions/index.js - could export every function when creating it instead of exporting in the end of the file.
10. src/components - put every component into its own file to get a better overlook
11. Slider.js line 13 - refactor to not use the !important in css.
12. VideoCard.js line 78 - 91 - remove this to reduce clutter.
13. App.js - when changing route scroll to top of page.
14. functions/index.js - Good that you've separated functions into a separate file
15. App.js - maybe use a Layout component for the Header and the Footer components to show on every page
16. Missing a README.md
17. views/SelectedContent.js line 61 - styling in the middle of a component
18. Due to the vast amount of static content the use of dynamic states are little to none.
19. The isLoaded functionality could be moved up to a context variable.
20. theme.js - make a array of paddings instead of naming the different paddings padding1 padding2 and so on
21. SelectedContent.js line 244 - You could write a component that don't wrap anything like <Component /> and not <Component></Component>
