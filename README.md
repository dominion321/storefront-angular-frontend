# ECommerce

This is an e-commerce web application. It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3. The goal here is to test out my knowledge of Angular in form of a project.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Components
This application is made up of six components namely: cart, confirmation, navbar, product-item, product-item-detail, and product-list.

- Cart: This component is a page that shows the list of added products to it and a way to process purchase (or checkout). You will see the added products to cart on the left, a form requiring the user fills his/her details to checkout, and the total amount of the product at the bottom-left of the screen

- Confirmation -  This page shows a success message if an order has been checked out at the cart component. Else, it will show a blank screen.

- Navbar -  It is the located in the app component and allows easy navigation within the web app.

- Product-item - The Home directory shows a list of products. Each product viewed on this directory is rendered in the product-item component. This makes it easy for the app to loop through a products using the `*ngFor` directive and render each product as an independent entity.

- Product-item-detail -  When the image of a product is clicked on at the Home directory, it takes you to a details page to show the details of that specific product. This is made possible through this component.

- Product-list - This is the component that renders all the product-items to the home directory.

## Models

These are the data types of each entity within the application. They include: order, product.
- 

## Routes

- `/` - The Home directory. This is where users see a list of products available for purchase.

- `/cart` - When a user adds a product to cart, it is added here. To view the cart, you can either click on 'Cart' at the navigation bar or navigate to `http://localhost:4200/cart` to open it. When navigated to without products added to it, the cart page will show a "This cart is empty" message.

- `/confirmation` -  After a successful checkout, this page will appear on your screen.



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
