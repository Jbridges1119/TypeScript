# Learning TypeScript

This is a project I'm creating to teach myself TypeScript.

## Notes
I will be writing notes within this readme file to refer to in future projects.

### Basics
Superset to JS.
Use stricter types - prevents errors.
Has extra features that JS doesn't.
Will assume based on inputs and give corresponding errors.

#### Within terminal - tsc <filename> -w
 - will create a compiled js file with the same name.
 - if both files are open at the same time the variables in ts file will error - just close the js file to fix.
 - the -w means that ts will watch that file and compile automatically.

 #### TS Assumes
 TS will assume restrictions based on original array composition.
    E.G. An array of strings and numbers can only have strings and numbers in it.  
Also, variables cannot change type.
    E.G. A variable with an array cannot be changed to anything but an array. Kinda like const.

#### TS Objects
Object values become typed, cannot change from number to string.
Can't add additional key/value properties to already defined object.
Object can be re-declared but has to have the EXACT same structure. 
