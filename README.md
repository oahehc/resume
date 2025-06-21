# Resume

https://oahehc.github.io/resume/

## How to modify the content

Adjust the `content.json` file

### Add new side project

1. add those items to `content.json`.

   ```json
     "portfolio{PrjName}": {
       "en": "",
       "zh": ""
     },
     "portfolio{PrjName}Stack": {
       "all": [""]
     },
     "portfolio{PrjName}Link": {
       "all": [
         {
           "type": "",
           "link": ""
         }
       ]
     },
     "portfolio{PrjName}Content": {
       "en": "",
       "zh": ""
     },
     "portfolio{PrjName}Images": {
       "all": [
         {
           "src": "",
           "alt": ""
         },
       ]
     },
   ```

2. add the project in `PrintPortfolio.tsx`

## deploy

Deploy to gh-page

```
npm run deploy
```
