export const data = [
  { id: 1, name: "Test", total: 1000, date: "Dec 12 1996" },
  { id: 2, name: "Test", total: 1000, date: "Dec 12 1996" },
  { id: 3, name: "Test", total: 1000, date: "Dec 12 1996" },
  { id: 4, name: "Test", total: 1000, date: "Dec 12 1996" },
  { id: 5, name: "Test", total: 1000, date: "Dec 12 1996" },
  { id: 6, name: "Test", total: 1000, date: "Dec 12 1996" },
  { id: 7, name: "Test", total: 1000, date: "Dec 12 1996" },
  { id: 8, name: "Test", total: 1000, date: "Dec 12 1996" }
];

export const dataSplit = (arr, number) => {
  return arr.reduce((dataSplit, item, index) => {
    index % number === 0
      ? dataSplit.push([item])
      : dataSplit[dataSplit.length - 1].push(item);
    return dataSplit;
  }, []);
};
