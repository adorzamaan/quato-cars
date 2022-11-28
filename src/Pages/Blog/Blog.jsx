import React from "react";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Blog = () => {
  return (
    <div className="container mx-auto grid gap-6 md:grid-cols-2 sm:grid-cols-1">
      <div className="card bg-base-100 shadow-md my-4 py-4">
        <div className="card-body px-4">
          <h3 className="font-bold py-2">
            1. What are the different ways to manage a state in a React
            application?
          </h3>
          <p className="">
            1. Local state  <br></br> 2. Global state <br></br> 3. Server state <br></br> 4. URL state
          </p>
          <div className="my-2">
          <PrimaryButton>Read More</PrimaryButton>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-md my-4 py-4 ">
        <div className="card-body px-4">
          <h3 className="font-bold py-2">
            2. How does prototypical inheritance work??
          </h3>
          <p className="">
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object
          </p>
          <div className="my-2">
          <PrimaryButton>Read More</PrimaryButton>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-md my-4 py-4 ">
        <div className="card-body px-4">
          <h3 className="font-bold py-2">
            3. What is a unit test? Why should we write unit tests?
          </h3>
          <p className="">
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
          <div className="my-2">
          <PrimaryButton>Read More</PrimaryButton>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-md my-4 py-4 ">
        <div className="card-body px-4">
          <h3 className="font-bold py-2">
            What is the Different between React vs. Angular vs. Vue?
          </h3>
          <p className="">
            React is a UI library, Angular is a fully-fledged front-end
            framework, while Vue.js is a progressive framework. Vue is a popular
            progressive, open-source framework for developing complex user
            interfaces, while React is a JavaScript library for building web
            development for interactive elements on UIs. React is also used to
            develop SPAs and mobile apps
          </p>
          <div className="my-2">
          <PrimaryButton>Read More</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
