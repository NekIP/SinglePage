export function getTypedValue(value, type) {
	switch (type) {
		case 'date':
			/* TODO: use moment.js */
			return Date.parse(value);
		case 'string':
			return value;
		case 'number':
			return +value;
		case 'boolean':
			return !!value;
	}
}

export function sort(data, state) {
	function sortComparer(item1, item2, sortingColumns) {
		let result = 0;
		for (let i = 0; i < sortingColumns.length; i++) {
			let sortingColumn = sortingColumns[i];
			let [a, b] = [item1[sortingColumn.id], item2[sortingColumn.id]];
			result = result || compare(
				getTypedValue(a, sortingColumn.type), 
				getTypedValue(b, sortingColumn.type), 
				sortingColumn.sortingDirection);
		}
		return result;
	}

	function compare(a, b, direction) {
		return a > b
			? direction 
			: a < b
				? -direction 
				: 0;
	}

	if (state.sortingColumns && state.sortingColumns.length > 0) {
		data.items.sort((item1, item2) => sortComparer(item1, item2, state.sortingColumns));
	}
}

export function filter(data, state) {
	if (state.filteringColumns && state.filteringColumns.length > 0) {
		data.items = data.items.filter(value => {
			let result = true;
			for (let i = 0; i < state.filteringColumns.length; i++) {
				let filteringColumn = state.filteringColumns[i];
				result = result && 
					filteringColumn
						.filtering
						.filter
						.predicate(
							getTypedValue(value[filteringColumn.id], filteringColumn.type), 
							getTypedValue(filteringColumn.filtering.expected, filteringColumn.type));
			}
			return result;
		})
	}
}

export function group(data, state) {
	if (state.groupingColumns && state.groupingColumns.length > 0) {
		for (let i = 0; i < data.items.length; i++) {
			let item = data.items[i];
			let valueOfGroupingFields = [];
			for (let j = 0; j < state.groupingColumns.length; j++) {
				let groupingColumn = state.groupingColumns[j];
				let value = item[groupingColumn.id];
				valueOfGroupingFields.push(value);
			}
			item.$_grouping_values = valueOfGroupingFields;
		}
	}
}

export function page(data, state) {
	if (state.paging) {
		state.paging.count = state.paging.size == 0 ? 1 : Math.ceil(data.items.length / state.paging.size) || 1;
		if (state.paging.current > state.paging.count) {
			state.paging.current = state.paging.count;
		}
		if (state.paging.size !== 0) {
			let from = state.paging.size * (state.paging.current - 1);
			let to = state.paging.size * state.paging.current;
			data.items = data.items.slice(from, to);
		}
		data.paging = state.paging;
	}
}