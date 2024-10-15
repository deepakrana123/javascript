class InMemorySearch {
  constructor() {
    this.entites = new Map();
  }
  registerNameSpace(name) {
    this.entites.set(name, []);
  }
  addDocuments(namespace, ...documents) {
    const exisiting = this.entites.get(namespace);
    if (!exisiting) {
      this.entites.set(namespace, [...documents]);
    } else {
      this.entites.set(namespace, [...exisiting, ...documents]);
    }
  }
  print() {
    return this.entites;
  }
  search(namespace, filterFn, orderByFN) {
    const docs = this.entites.get(namespace);
    const a = docs.filter((item) => filterFn(item));
    if (orderByFN) {
      const { key, asc } = orderByFN;
      return a.sort((a, b) => {
        if (asc) {
          return a[key] - b[key];
        } else {
          return b[key] - a[key];
        }
      });
    }
    return a;
  }
}
const searchEngine = new InMemorySearch();
searchEngine.addDocuments(
  "Movies",
  { name: "Avenger", rating: 8.5, year: 2017 },
  { name: "Black Adam", rating: 8.7, year: 2022 },
  { name: "Jhon Wick 4", rating: 8.2, year: 2023 },
  { name: "Black Panther", rating: 9.0, year: 2022 }
);
searchEngine.print();
// searchEngine.search("Movies",(e) => e.rating > 8.5,{key:'rating', asc:true})
