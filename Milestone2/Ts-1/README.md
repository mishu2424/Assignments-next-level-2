# TypeScript-এ Interface এবং Type-এর পার্থক্য

```
    TypeScript-এ interface এবং type উভয়ই ডেটার গঠন বর্ণনা করতে ব্যবহৃত হয় - যেমন objects, functions, arrays ইত্যাদি।

    এই দুটির মধ্যে কিছু মূল পার্থক্য রয়েছে:-

    -Interface

    ১. Inheritance/Extending-এর জন্য extends keyword ব্যবহার করা হয়-
    interface User{
      id:number;
      name:string;
    }

    interface Employee extends User{
      email:string
    }

    ২. Interface Declaration Merging সমর্থন করে-
    interface User={
      userId:number;
    }

    interface User={
      name:string;
      userEmail:string;
    }

    ৩. Interface শুধুমাত্র object shapes-এর জন্য-
    interface User{
      id:number;
      name:string;
    }

    ৪. Interface union তৈরি করতে পারে না, কিন্তু একাধিক interface extend করতে পারে -
    interface Admin extends User,Employee{

    }

    -Types

    ১. Inheritance-এর জন্য intersection (&) ব্যবহার করা হয়-
    type User={
      id:number;
      name:string;
    }

    type Employee= User & {
      email:string
    }

    ২. Type declaration merging সমর্থন করে না-
    type User = {
      userId: number;
    }

    type User={
      name: string; ❌
    }

    ৩. Type যেকোনো কিছু represent করতে পারে (primitives, unions, tuples)-
    type ID = string | number;  << Union
    type Status = "active" | "inactive";  << Literal
    type Coordinates = [number, number];  << Tuple
    type User = { name: string };  << Object

    ৪. Type সরাসরি union অথবা intersection তৈরি করতে পারে-
    type Result = Success | Error;
    type Admin = User & { role: "admin" };
```

# Union এবং Intersection Types in TypeScript

```
    Union Type (|) - অথবা একাধিক type-এর মধ্যে যেকোনো একটি হতে পারে।
    ১. Basic Union-
    type ID = string | number;

    let userId: ID = 123; ✅
    userId = "ABC123"; ✅
    userId = true; ❌

    ২. Object Union-
      type Success = {
      status: "success";
      data: string;
    }

    type Error = {
      status: "error";
      message: string;
    }

    type Response = Success | Error;

    ৩. Literal Union-
    type Status = "pending" | "approved" | "rejected";

    let orderStatus: Status = "pending"; ✅
    orderStatus = "approved"; ✅
    orderStatus = "cancelled"; ❌ 

    Intersection Type (&) - এবং
    একাধিক type-কে একসাথে মিলিয়ে নতুন type তৈরি করা।
    ১. Basic Intersection-
    type Person = {
    name: string;
    age: number;
    }

    type Employee = {
      employeeId: number;
      department: string;
    }

    type Staff = Person & Employee;


    ২. Adding Properties-
    type User = {
      id: number;
      name: string;
    }

    type Admin = User & {
      role: "admin";
      permissions: string[];
    }

    const admin: Admin = {
      id: 1,
      name: "Mishu",
      role: "admin",
      permissions: ["read", "write", "delete"]
    };
```
