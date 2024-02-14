# GIT Instructions [EPISODE-1]

-> to initialise git : git init
-> to create branch and make it as a main branch : git branch -M main
/** PUSH code to GitHub **/
-> to add all the files : git add .
-> to commit the code with a message : git commit -m "episode 1"
-> to add local to the remote git repository (only once to be done in application) : git remote add origin https://github.com/niharikadsn/namaste-react.git
-> to push the from main code to origin repo : git push origin main

/** NPM [EPISODE-2] **/
-> to initialise npm : npm init

/** Use bundler Parcel **/
-> to install parcel bundler
(parcel / webpack are all bundlers that bundles all packages in an application) : npm install parcel
-> now to execute run: npx parcel index.html (for dev)
npx parcel buildindex.html (for prod)
(npx is actually executing the package,1 produces the url that was hosted on server at a port number).
\*\*\* REMOVE "main : App.js" from package.json file as we specify the index.html as starting file. So remove the automatically generated main file in package.json created while installing npm.

# PARCEL

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster Builds
- Image Optimization
- Bundling
- Compressing files
- Minification
- Code Splitting
- Differential Bundling support older browsers
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - Remove unused code

/** Use react as part of node modules instead of CDN links **/
-> npm install react (reacts a dependency in package.json and react folder is present in node modules)
