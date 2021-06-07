function store(name, list, earnings) {
  (this.name = name), (this.list = list), (this.earnings = earnings);
}

//create instance of store
let sampleStore = new store("Avion Store", [], 0);

function book(title, quantity, value) {
  (this.title = title), (this.quantity = quantity), (this.value = value);
}

let mybook = new book("Harry Potter", 5, 500);

store.prototype.addBook = function(title, quantity, value){
  let newBook= new book(title, quantity, value)
  this.list.push(newBook);
}

sampleStore.addBook("Cinder", 10, 300);
sampleStore.addBook("The Little Prince", 10, 300);
sampleStore.addBook("Lord of the RIngs", 2, 500);

store.prototype.restockBook = function (title, quantity) {
  this.list.some((book) => {
    if (book.title === title) {
      book.quantity += quantity;
    }
  });
  console.log(this.list);
};

sampleStore.restockBook("Cinder", 5);
sampleStore.restockBook("Harry Potter", 4);

// //sell book
// store.prototype.sellBook = function (title, quantity) {
//   //find the book in the list
//   const bookIndex = this.list.findIndex((book) => book.title === title);
//   //update quantity

//   //   const {title:StoreTitle, quantity:Stock, value:Price} =

//   if (bookIndex !== -1) {
//     const {
//       title: StoreTitle,
//       quantity: Stock,
//       value: Price,
//     } = this.list[bookIndex];

//     if (Stock < quantity) {
//       console.log(`${StoreTitle} has only ${Stock} left`);
//     } else {
//       this.list[bookIndex].quantity -= quantity;
//       this.earnings += quantity * Price;
//     }
//   } else {
//     console.log(`We don't sell that book here`);
//   }
// };

//sell book
store.prototype.sellBook = function (title, quantity){
  const bookIndex = this.list.findIndex((book) => book.title === title)
  if(this.list[bookIndex].quantity >= quantity){
    this.list[bookIndex].quantity-=quantity;
    this.earnings += (this.list[bookIndex].value * quantity);
    console.log(`Sold ${this.list[bookIndex].title} at ${(this.list[bookIndex].value * quantity)} pesos`)
  }
  else if(this.list[bookIndex].quantity < quantity){
    console.log(`Not enough stock. Only ${this.list[bookIndex].quantity} left.`)
  }
  else{
      console.log(`Book not found.`)
  }
}


store.prototype.totalEarnings = function () {
  console.log(`Store name is ${this.name} with earnings of ${this.earnings}`);
};

sampleStore.totalEarnings();

store.prototype.listInventory = function () {
  this.list.map((book) => {
    console.log(`${book.title}, ${book.quantity}, ${book.value}`);
  });
};

sampleStore.listInventory();
