## Getting Started

run the development server:

```bash
yarn dev
```

navigate to [http://localhost:3000](http://localhost:3000)

## File Structure

Remarkable tablet images generated using rmkit should be copied to `public/images/`

```
|--components // shared components
|  |--Button // presentational components w/ styles
|  |-- ...
|--pages // static nextjs pages
|  |--about // template for about
|  |  |--helpers.js
|  |  |--index.js
|  |--api // apis
|  |-- ...
|  |--notebooks // templates for notebook pages
|  |-- ...
|  |--index.js
|--public
|  |--images
|  |  |--notebooks // remarkable notebooks go in here
|  |  |  |--notebook 1
|  |  |  |  |-- page 1.png
|  |  |  |  |-- ...
|  |  |  |--notebook 2
|  |  |  |-- ...
```
