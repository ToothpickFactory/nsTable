angular.module('nsTable', [])
.directive('nsTable', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
		  table: '=table'
		},
		link: function(scope, element, attrs){

			// Build our each cell with options
			function options(cell, ele){
				if(cell.text){
					ele.html(cell.text);
				};
				if(cell.colspan){
					ele.attr('colspan', cell.colspan);
				};
				if(cell.link){
					ele.attr('ng-click', 'tableLink('+cell.link+')')
						.addClass('clickable');
				}
				return ele;
			};

			// Builder
			function buildContainer(data, containerType, cellType){
				var container = angular.element('<'+containerType+'></'+containerType+'>');
				_.forEach(data, function(row){
					var tr = angular.element('<tr></tr>');
					_.forEach(row, function(cell){
						var tdTh = angular.element('<'+cellType+'></'+cellType+'>');
						tr.append(options(cell, tdTh));
					});
					container.append(tr);
				});
				return container;
			};

			//Wait for scope.table to be populated
			scope.$watch('table', function(){
				if(!scope.table) return;
				var tableData = scope.table;
				var table = angular.element('<table class="ns-table bordered-horizontal"></table>');
				if(tableData.caption){
					table.append(
						angular.element('<caption></caption>')
						.html(tableData.caption)
					);
				}
				table.append(buildContainer(tableData.head, 'thead', 'th'));
				table.append(buildContainer(tableData.body, 'tbody', 'td'));
				table.append(buildContainer(tableData.foot, 'tfoot', 'td'));

				element.append(table);
			});

		}
	};
});
