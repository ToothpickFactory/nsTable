# nsTable
Simple directive that takes JSON and creates a table from it.

#Install
angular.module("app", ["nsTable"]);

#Usage
The directives takes a JSON object that can contain "head", "body", and/or "foot".

```
{  
  "caption":"Your Awesome Caption!",
  "head":[],
  "body":[],
  "foot":[]
}
```

Each cell in the table is represented as an object in each array

```
{  
  "caption":"our Awesome Caption!",
  "head":[
    {
      "text": String,
      "colspan": Number,
      "link": "A clickable link that triggers tableLink(this)"
    }
  ]
}
```
