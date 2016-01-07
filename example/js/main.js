var data = {
  "caption":"your Awesome Caption!",
  "head":[
    [
      {
        "text": 'String'
      }
    ]
  ],
  "body":[
    [
      {
        "rowOptions": true,
        "class": "rowClass"
      },
      {
        "text": 'String',
        "action": function(cell){
          console.log(cell);
        }
      }
    ]
  ],
  "foot":[
    [
      {
        "text": 'String'
      }
    ]
  ]
};

var exampleTable = new nsTable(data)
document.body.appendChild(exampleTable.table);
