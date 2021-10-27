# Test Case


### Backend
<ul>
<li>Tech used : express axios eslint</li>
<li>Tested with mocha and chai</li>


### How to Start Backend
**npm install** then **npm start** will be enough.
If you want to work with your own test data just change the test datas
Start test with **npm test**
</ul>


### Overview
This application developed for Backend Position at Entyre.
Application rely on OPP paradigm and follows KISS-SOLID-DRY prinsibles.

### Endpoint
api/v1/format

### example request 

```
"str":"Lorem ipsum dolor sit amet,
    "lineWidth":80,
    "textAlignment":"center",
    "spacing":"single",
    "bolds":["Aliquam", "Mauris"],
    "italics":["elit"],
    "replaces":[{"replaceFrom":"cursus", "replaceTo":"CURSUS","replacc":"www"},{"replaceFrom":"lacinia", "replaceTo":"malesuada nunc"} ],
    "chucks":["pepper","german"]
```
<ul>
<li>str: string and required</li>
<li>textAlignment:string and required (center-right-left)</li>
<li>spacing:string and required (double-single) </li>
<li>other parameters are all array and required but can be empty</li>
Just be carefull  replaces array must includes object with **replaceFrom** and **replaceTo** keys.
</ul>
