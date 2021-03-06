# Typescript handles errors and bad syntax in IDE not in runtime as javascript meaning easier and more strict developing
I recommend installing typescript globaly so you can easily use it in any project

## npm i tsc -g
- Installing typescript globally

## tsc --init 
- Use that command inside the project's root terminal to create TypeScript config file

## IDE and QoL stuff
- I strongly suggest using Visual Studio Code as your IDE for working with TS. as its from the same maker it helps you alot
- There are some really usefull plugins in VSC id like to share with you to make your life much easier when coding TS...
	- ESlint = helps overally with your code and syntax. Also using it for formatting the code
	- Path Intellisense = Helps with includes, requires etc
	- TSLint = Helps with TS syntax and code. i heard it should be merged into ESlint one day, no idea when or if
	- Material Icon Theme = Theme for icons in your IDE. Makes it much better to see what folder is what
	- One Dark Pro = Acuall theme for your IDE. Makes the IDE nice, readable and dark so it doesnt destroy your eyes and greatly highlights everything. You can actually see if variable is constant or variable just by its color

## Guide in this repo
- Showcase of types, syntax and what it looks like to write typescript can be found in src/ts. There are variable types file and function types file to see how Typescript can make your life easier
- If you wonder how compiled code without any comments looks like you can find compiled files from src/ts inside dist/js folder.

## How to start with Typescript if your project is on Javascript
- Its even easier than you would thought. Just make ts folder next to the JS folder, copy all of your JS files into it and change .js to .ts normally that should work. Fix all the issues if there are some and here you go you have changed your JS into TS. Make sure your compiler, either tsc or babel or whatever is compiling TS into your JS folder and then start slowly refabricating your already functional code in TS files into proper typescript syntax.
- If you using gulp or anything else for bundling it doesnt really matter to you. Just be sure to compile your TS into JS before gulp actually bundles the JS and you are golden.
- TS can be used with jquery if you install aditional types of jquery for our TS to know what everything is. Best case is to slowly rewrite the jquery to vanilla JS or Typescript anyways.

## Fun facts
- Developped and maintaned by Microsoft
- Compiles the code into javascript of your choosing, ES5, ES6 etc... for browser compatibility

# Notes and tips
## Typescript and Typescript compiler
- if you are working on one file you can either tsc <-filename-> to compile that file or tsc <-filename-> -w to actually watch the file and compile it every save you do
- you can also do tsc --init for typescript config to be created. That makes you able to run "tsc" command in the workspace and it will compile all typescript files in the project you can also do "tsc -w" to watch all the typescript files in the project
- in the tsconfig you can add exlude array to add files you want exluded from compiling by typescript
- in the tsconfig you can add include array to specify which files you wanna compile with typescript, if you add the include it will start compiling only the files in that include array. in the include you can add whole folders. if you want specify just specific files you can add files array in tsconfig to set specific files to be compiled in the project
- sourceMap in tsconfig is really usefull for debuging and developing to connect out JS files with TS files and makes us able to debug typescript files in browser with all the functionality of the web dev tools
- outDir in tsconfig sets up the directory for the compiled files to get in
- you can specify the rootDirectory by setting rootDir in tsconfig, that makes you able to setup tscompiler to start at that rootdir and go further in but not back so it doesnt have to get throught all the files in the project
- removeComments in tsconfig makes compiler to remove all the comments in compiled js files
- downlevelIteration makes your for loops much bigger but makes em work in some niche cases when you compile for ES3 and ES5. Should be turned on only if you know you have some of those niche loops in the code otherwise youd just add tons of extra code to the compiled files
- There is alot of usefull syntax settings and strictness settings in tsconfig and id recommend everyone check it for themselves
- You can also use tsc to bundle all your compiled TS files into one single js file just by using outFile setting in tsconfig