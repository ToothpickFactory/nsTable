# nsTable
Simple tool that takes JSON and creates a table from it.

#Dependencies
lodash 3+

#Usage
nsTable takes a JSON object that can contain "caption", "head", "body", and/or "foot".

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
    // Row
    [
      // Cell
      {
        "text": String,
        "action": function(){}
      }
    ]
  ]
}
```

Text: The thing to display in the cell

Action: Triggers a the function

Unknown: Any key that does not have a constructor will be made into an attribute with the key as the name of the attribute and value as the value.
