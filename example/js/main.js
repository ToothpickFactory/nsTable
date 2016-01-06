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
        "action": 'woot'
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
