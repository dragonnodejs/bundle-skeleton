# DragonNode.js Bundle Skeleton
Skeleton for a bundle with the DragonNode.js Framework

## Installation
- Add bundle to the "package.json":
```javascript
{
  "dependencies": {
    "dragonnodejs-bundle-skeleton": "^1.0.1"
  }
}
```
- Run "npm install"
- Extend the configuration in "app.js":
```javascript
let config = {
    directory: __dirname + '/',
    modules: [
        [require('dragonnodejs-bundle-skeleton'), [
            ['modules/example', {}]
        ]]
    ]
};
require('dragonnodejs')(config);
```
