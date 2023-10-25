const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
console.table(items)

const maxId = items.length > 0 ? Math.max(...items.map(n => n.id)) : 0
console.log(maxId)

