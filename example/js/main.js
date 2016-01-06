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

var table = nsTable(data)
document.body.appendChild(table);
