# nsTable
Simple directive that takes JSON and creates a table from it.

#Install
angular.module("app", ["nsTable"]);

#Usage
HTML
```
<ns-table table="tableJSON"></ns-table>
```

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
  "caption":"your Awesome Caption!",
  "head":[
    {
      "text": String,
      "colspan": Number,
      "link": Bool
    }
  ]
}
```

Text: The thing to display in the cell

Colspan: Number of cells this can expand accross

Link: A clickable link that triggers tableLink(this). Passes the current object into a function on scope called tableLink.

