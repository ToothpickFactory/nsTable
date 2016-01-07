function nsTable(tableData) {
  this.tableData = tableData;
  this.table = null;
  this.init();
}

nsTable.constructors = {
  'text': function(element, value, key){
    element.innerHTML = value;
  },
  'action': function(element, value, key, cell){
    element.addEventListener('click', function() {
      value(cell);
    });
    element.classList.add('clickable');
  },
  'attr': function(element, value, key){
    element.setAttribute(key, value);
  }
};

nsTable.layouts = [
  {
    'key': 'head',
    'container': 'thead',
    'cellType': 'th'
  },
  {
    'key': 'body',
    'container': 'tbody',
    'cellType': 'td'
  },
  {
    'key': 'foot',
    'container': 'tfoot',
    'cellType': 'td'
  }
];

nsTable.prototype = {

  init: function(){
    var self = this;
    var table = document.createElement('table');

    if(self.tableData.caption){
      var caption = document.createElement('caption');
      caption.innerHTML = self.tableData.caption;
      table.appendChild(caption);
    }

    _.forEach(nsTable.layouts, function(layout){
      if(!self.tableData[layout.key]) return;
      var container = self.buildContainer(
        self.tableData[layout.key],
        layout.container,
        layout.cellType
      );
      table.appendChild(container);
    });
    self.table = table;
  },
  buildContainer: function(data, containerType, cellType){
    var self = this;
    if(!data) return '';
    var container = document.createElement(containerType);
    _.forEach(data, function(row){
      var tr = document.createElement('tr');
      _.forEach(row, function(cell){
        if(cell.rowOptions){
          tr = self.buildAttr(tr, cell);
          return;
        }
        var tdTh = document.createElement(cellType);
        tr.appendChild (self.buildAttr(tdTh, cell));
      });
      container.appendChild(tr);
    });
    return container;
  },
  buildAttr: function(element, cell){
    _.forEach(cell, function(value, key){
      if(key === 'rowOptions') return;
      var option = nsTable.constructors[key] ? key : 'attr';
      nsTable.constructors[option](element, value, key, cell);
    });
    return element;
  }

};
