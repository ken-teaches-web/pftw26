# New Section: compiled code, components and composibility with React


- how is this going to be different?
- we'll be using a React *"seed" generator*
- we'll be combining files and libraries with *"import"* and making files available with *"export"*
- export makes a file available for importing
- vite is a multipurpose utility library that will enable us to "do stuff"
- vite will combine js, jsx and imports down to "bundles"
- vite can run a developer-friendly server (similar to go live) `npm run dev`
- vite can build a "deployable" version of our app with `npm run build`
- vite uses a config file to determine important details for compiling
as an example , server property

## New Concepts
- composibility
- compile
- import
- bundle
- bundling for development vs bundling for building the final product
- base (in vite config)
  <App>
<MastHead />
<Nav> </Nav>
<Stories>
    <Col>
        <Story type="text" data={whatever}/>
    </Col>
    <Col>
        <Story type="cover"> </Story>
    </Col>
</Stories>
</App>


JSX = > HTML plus Javascript
JSX => Compiler => JS (bundle.1.js)
Build: Process to take JSX and other Javscript and turn it into browser ready html and javascript

`npm create vite@latest <project-name>`


Use `cd <directory>` to move into other directory
