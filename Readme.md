# Learning TypeScript
This is a project I'm creating to teach myself TypeScript.
[Docs](https://www.typescriptlang.org/docs/)
## Notes
I will be writing notes within this readme file to refer to in future projects.
### Basics
 - Superset to JS.
 - Use stricter types - prevents errors.
 - Has extra features that JS doesn't.
 - Will Infer based on inputs and give corresponding errors.
 - Can ignore with ! at end
    -eg. const duck = document.querySelector('duck')!;
#### Within terminal 
 - tsc <filename> -w
 - will create a compiled js file with the same name.
 - if both files are open at the same time the variables in ts file will error - just close the js file to fix.
 - the -w means that ts will watch that file and compile automatically.
 - `tsc -w` after setup will watch designated folders
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
#### TS Forms and Eventlisteners
 - Doc.querySelector defaults as an element
    - Can add as HTMLFormElement to the end 
 - Declare the (e: Event) for e.preventDefault

#### TS Classes
 - Designate types for constructor variables first
 - And constructor params require type designations too
 - If a class instance is placed into an array, the array needs to be typed to the Class name.
    - eg. let folder: Invoice[] = []  ~ where Invoice is the class and now it's instances can be placed into folder.
 - TS adds access modifiers ~ `public, private, and readonly` ~ Defaults public
   - eg. private client: string;
 - The private variable can be accessed within the Class for getters/setters ect.
 - The readonly cannot be changed inside or outside of class.
 #### TS Interfaces
  - Similar to type ~ is a template for a type to be added to a variable. 
  - Must contain the interface types but can have more than.
    - eg. const me: IsPerson = {...}
  - Can be used as to Type a `function` param so only an interfaced variable can be used.
    - eg. const greetPerson = (person: IsPerson) => {} ~ greetPerson(me)
  - When used with a `class` it must have `implements` before it. like extends
    - eg. class Invoice `implements` HasFormatter {}
#### TS Generics
  - Before the param of a first class function we add <T> and then type the param: T.
    - eg. const add UID = <T>(obj: T) => {}
  - This captures the specifics of the param type but we are not limiting the type so we add <T extends object> like sub/superclasses.
     - eg. const add UID = <T extend object>(obj: T) => {} 
  - Regarding Generic interfaces we can use <T> after the interface variable name and then when it's used we designate the required type.
    - eg. interface Test<T>{data:T}  ~ const testing: Test<number> = {data:5}
#### TS ENUMS
  - Allows premade custom types to be assigned to a variable and then assigned within a interface.
  - This allows a selector like feature for constructing a class.
    - eg. enum ResourseType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
#### TS Tuples
  - Tuples allow us to declare the type withing an array position.
    - eg. let tup: [string, number, boolean] = ['kelsey', 31, true];
  - This also needs to be done if we want to use a speader(removes the brackets) for params.
#### TS Importing Exporting
 - tsconfig ~ module: "es6" instead of commonjs
 - The HTML needs to have type module within the script
    - eg. <script type="module" src='app.js'></script>
 - Make sure to import the JS file NOT THE TS FILE
   - eg. import {invoice} from './invoice.js'
### Layout and tsconfig 
 - Start by tsc --init to create a tsconfig file
 - Find `rootDir` and set location for source files. eg. `./src`
 - Find `outDir` and set location for compiled files. eg. `./public`
 - `tsc` will compile and `tsc -w` will watch and compile.
 - add `"include": ["src"]` after the first object within tsconfig to set compiler to only work within that folder. "" must be double quotes. dont forget to , the first object.
      - `rootDir` is just specifiing which files compile to public. "include" will stop it from looking outside a folder.

## Lecture Notes
