function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    return 0;
  }
}

console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const person1 = new Person("John Doe", 30);
console.log(person1.getDetails());

const person2 = new Person("Alice", 25);
console.log(person2.getDetails());

type Items = {
  title: string;
  rating: number;
}[];

function filterByRating(items: Items): Items {
  const filteredItems = items.filter((item) => item.rating >= 4);
  return filteredItems;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));

type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: Users[]): Users[] {
  const filteredUsers = users.filter((user) => user.isActive);
  return filteredUsers;
}
const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

console.log(filterActiveUsers(users));

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(obj: Book) {
  console.log(
    `Title: ${obj.title}, Author: ${obj.author}, Published: ${
      obj.publishedYear
    }, Available: ${obj.isAvailable ? "Yes" : "No"}`
  );
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

function duplicateChecker(arr: (number | string)[], value: any): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

function getUniqueValues(
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] {
  let uniqueArr: (number | string)[] = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!duplicateChecker(uniqueArr, arr1[i])) {
      uniqueArr[uniqueArr.length] = arr1[i];
    } else {
      continue;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (!duplicateChecker(uniqueArr, arr2[j])) {
      uniqueArr[uniqueArr.length] = arr2[j];
    } else {
      continue;
    }
  }

  return uniqueArr;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  const totalPrice = products.reduce((sum, product) => {
    if (
      product?.discount &&
      product?.discount >= 0 &&
      product?.discount <= 100
    ) {
      return (
        sum +
        product.price * product.quantity * ((100 - product.discount) / 100)
      );
    } else {
      return sum + product.price * product.quantity;
    }
  }, 0);
  return totalPrice;
}

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
