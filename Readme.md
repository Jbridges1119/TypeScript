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
  - TS will assume restrictions based on original array composition.
     - E.G. An array of strings and numbers can only have strings and numbers in it.  
 - Also, variables cannot change type.
     - E.G. A variable with an array cannot be changed to anything but an array. Kinda like const.
#### TS Objects
 - Object values become typed, cannot change from number to string.
 - Can't add additional key/value properties to already defined object.
 - Object can be re-declared but has to have the EXACT same structure. 
   - e.g. let obj: object = {} or let definedObj: {name: string, age: number}
#### TS Array
 - Add `[]` without a space to the end to create type array
   - E.G. let arr: string[] = [];
#### TS Mix
 - Use | (pipe) to seperate. Wrap multiple in round brackets when followed by `[]`
    - E.G. let mixed: (number|string|boolean)[] = [] or let mixed: number|string|boolean = '' 
#### TS Any Type
 - Shouldn't use, can cause issues and defeats TS purpose.
  - e.g. let age: any = anything


### Layout and tsconfig 
 - Start by tsc --init to create a tsconfig file
 - Find `rootDir` and set location for source files. eg. `./src`
 - Find `outDir` and set location for compiled files. eg. `./public`
 - `tsc` will compile and `tsc -w` will watch and compile.
 - add `"include": ["src"]` after the first object within tsconfig to set compiler to only work within that folder. "" must be double quotes. dont forget to , the first object.
      - rootDir is just specifiing which files compile to public. "include" will stop it from looking outside a folder.