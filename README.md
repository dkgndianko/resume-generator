# RESUME GENERATOR

This project helps generate a resume based on a data sotored as objects or JSON containing resume information.\
The design was inspired by [Babacar Cisse Dia's resume](https://babacar-cisse-dia.com/resume)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. You can test with you own CV data. Actually it is using files `src/dkgndianko.resume.ts` and `src/testData.ts`.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn storybook`

Runs the storybook.\
Open [http://localhost:6001](http://localhost:6001) to view it in the browser.


### `yarn deploy`

This will deploy the resume using [`gh-pages`](https://www.npmjs.com/package/gh-pages). You will need to do some mofications in order to deploy correctly.
1. First, make sure that the app is using the correct CV data. You can for example create you own file to put your CV data there (for example `<your_github_username>.resume.ts`) or modify an existing one (like testData.ts)
2. Go to `package.json` and update the `homepage` field to match yours. You can read the *Github page* section of **React Deployment** [there](https://create-react-app.dev/docs/deployment/#github-pages)
3. Make sure that your git is using the right remote repository and it is matching the one configured at step **2**. You can for example add your repo like this
```bash
git remote add origin git@github.com:<your_github_username>/<repo_name>.git
```
For me it was:
```bash
git remote add origin git@github.com:dkgndianko/resume-generator.git
```
You can also use `https` and not `git` protocol
<!-- 
### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. -->

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<!-- ### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). -->


### Next steps:
    1. Add CI/CD (Cicle CI, Github Actions, etc.) for automatic deployment after a PR merge
    2. Add other storybooks
    3. Create editable components to perform resume creation/modification
    4. Create custom designs and themes for resune

Pull requests are welcome

This was builte with :heart: by [**Mouhamad Nd. THIAM**](https://github.com/dkgndianko)\
Enjoy it!!!
