TypeScript is an open source programming language developed by Microsoft
It is atyped superset of JS,
It compiles to plain JavaScript, which is uderstood by the browsers
You can rename a .js file to .ts and it would work perfectly fine

Optional static typing and type inference, JS is dynamically typed, that means, JS does not know what type the variable is until it is actually instantiated at runtime, which is too late, as a result errors are identified AS ans WHEN you type your code and during the compilation step which results in less production errors, the best part is that specifying the type is completely optional

TypeScript also brings enhanced IDE support, such as the red squiggly line, which helps us in more time in coding and less time debugging



To begin we first need to install NodeJS
Now install TypeScript globally, npm i -g typescript
write tsc -v, to know the version on your machine
create a file with a .ts extension lets, say main.ts
write some JS code in it for now , and then run tsc main.ts OR tsc main, to compile it to JS, this will result in a .js file, in our case main.js

Now after executing the JS file, if we go back to the TS file we can see that there is a squiggly line, it says cannot redeclare blocked scope variable
as TS is treated like a script rather than a module, A module has its own scope, whereas Scripts share global Scope
To get rid of the error we need to add an export statement at the top which exports nothing, by adding an import or export statement, TS treats this file as a module

Now a useful addition to our WorkFlow here would be to automatically compile the TypeScript file whenever there is a change, we can do that using the watch option of the TypeScript compiler, so in the terminal run the commad: tsc main --watch

Refer to main.ts for further Tyepscript tutorial