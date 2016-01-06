function nsTable(tableData){

	var layouts = [
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

	var options = {
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

	function init(tableData){
		var table = document.createElement('table');
		if(tableData.caption){
			var caption = document.createElement('caption');
			caption.innerHTML = tableData.caption;
			table.appendChild(caption);
		}
	  _.forEach(layouts, function(layout){
			if(!tableData[layout.key]) return;
	    table.appendChild(buildContainer(tableData[layout.key], layout.container, layout.cellType));
	  });
	  return table;
	};

	function buildContainer(data, containerType, cellType){
	  if(!data) return '';
	  var container = document.createElement(containerType);
	  _.forEach(data, function(row){
	    var tr = document.createElement('tr');
	    _.forEach(row, function(cell){
	      if(cell.rowOptions){
	        tr = buildAttr(tdTh, cell);
	        return;
	      };
	      var tdTh = document.createElement(cellType);
	      tr.appendChild (buildAttr(tdTh, cell));
	    });
	    container.appendChild(tr);
	  });
	  return container;
	};

	// Build out each cell with options
	function buildAttr(element, cell){
		_.forEach(cell, function(value, key){
			var option = options[key] ? key : 'attr';
			options[option](element, value, key, cell);
		});
	  return element;
	};

  return init(tableData);
};
