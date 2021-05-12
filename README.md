## Typescript handles errors and bad syntax in IDE not in runtime as javascript meaning easier and more strict developing
I recommend installing typescript globaly so you can easily use it in any project

# npm i tsc -g
# tsc --init inside the project's root terminal to create TypeScript config file

## Notes and tips
# Typescript and Typescript compiler
- if you are working on one file you can either tsc <filename> to compile that file or tsc <filename> -w to actually watch the file and compile it every save you do
- you can also do tsc --init for typescript config to be created. That makes you able to run "tsc" command in the workspace and it will compile all typescript files in the project you can also do "tsc -w" to watch all the typescript files in the project
- in the tsconfig you can add exlude array to add files you want exluded from compiling by typescript
- in the tsconfig you can add include array to specify which files you wanna compile with typescript, if you add the include it will start compiling only the files in that include array. in the include you can add whole folders. if you want specify just specific files you can add files array in tsconfig to set specific files to be compiled in the project
- sourceMap in tsconfig is really usefull for debuging and developing to connect out JS files with TS files and makes us able to debug typescript files in browser with all the functionality of the web dev tools
- outDir in tsconfig sets up the directory for the compiled files to get in
- you can specify the rootDirectory by setting rootDir in tsconfig, that makes you able to setup tscompiler to start at that rootdir and go further in but not back so it doesnt have to get throught all the files in the project
- removeComments in tsconfig makes compiler to remove all the comments in compiled js files
- downlevelIteration makes your for loops much bigger but makes em work in some niche cases when you compile for ES3 and ES5. Should be turned on only if you know you have some of those niche loops in the code otherwise youd just add tons of extra code to the compiled files
- There is alot of usefull syntax settings and strictness settings in tsconfig and id recommend everyone check it for themselves
