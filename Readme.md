# Learning TypeScript
This is a project I'm creating to teach myself TypeScript.
## Notes
I will be writing notes within this readme file to refer to in future projects.
### Basics
 - Superset to JS.
 - Use stricter types - prevents errors.
 - Has extra features that JS doesn't.
 - Will Infer based on inputs and give corresponding errors.
#### Within terminal - tsc <filename> -w
 - will create a compiled js file with the same name.
 - if both files are open at the same time the variables in ts file will error - just close the js file to fix.
 - the -w means that ts will watch that file and compile automatically.
 #### TS Infers
  - TS will Infer restrictions based on original array composition.
     - eg. An array of strings and numbers can only have strings and numbers in it.  
 - Also, variables cannot change type.
     - eg. A variable with an array cannot be changed to anything but an array. Kinda like const.
#### TS Objects
 - Object values become typed, cannot change from number to string.
 - Can't add additional key/value properties to already defined object.
 - Object can be re-declared but has to have the EXACT same structure. 
   - eg. let obj: object = {} or let definedObj: {name: string, age: number}
#### TS Array
 - Add `[]` without a space to the end to create type array
   - eg. let arr: string[] = [];
#### TS Mix
 - Use | (pipe) to seperate. Wrap multiple in round brackets when followed by `[]`
    - eg. let mixed: (number|string|boolean)[] = [] or let mixed: number|string|boolean = '' 
#### TS Any Type
 - Shouldn't use, can cause issues and defeats TS purpose.
  - eg. let age: any = anything
#### TS Functions
 - Declare type with `Function`. Capital F
 - Params should be type declared just like other times.
 - Optional params use `?` before `:`, also put them at the end, after required params.
    - eg. const add = (a: number, b:number, c?: number | string) => {}
 - Default params (c: number = 10) works the same as js.
 - We can declare the output type of a function. If there is no output (i.e. undefined) than it is `void`
    - eg. const add = (a: number, b:number, c?: number | string): void => {}
#### TS Aliases
 - Declare a name to type specifacations to make them re-useable.
   - eg. type StringOrNum = string | number; 
 - Can also declare and opject with keys and type specifacations
   - eg. type objWithName = { name: string, uid: StringOrNum};
### Layout and tsconfig 
 - Start by tsc --init to create a tsconfig file
 - Find `rootDir` and set location for source files. eg. `./src`
 - Find `outDir` and set location for compiled files. eg. `./public`
 - `tsc` will compile and `tsc -w` will watch and compile.
 - add `"include": ["src"]` after the first object within tsconfig to set compiler to only work within that folder. "" must be double quotes. dont forget to , the first object.
      - `rootDir` is just specifiing which files compile to public. "include" will stop it from looking outside a folder.