# `baristacoffee` — Prices, customers, payments and orders

The baristacoffee is simple AngularJS application using Bootstrap and a bit of jQuery.
The baristacoffee app uses routes to define 4 states(prices,payments,orders and customers) having controllers and views together.

## Getting Started

To get you started you can simply clone the `baristacoffee` repository and install the dependencies:

### Prerequisites

You need git to clone the `baristacoffee` repository.

We also use a number of Node.js tools to initialize and test `baristacoffee`. You must have Node.js
and its package manager (npm) installed.

### Clone `baristacoffee`

Clone the `baristacoffee` repository using git:

```
git clone https://github.com/mohitagarwal2599/baristacoffee.git
cd baristacoffee
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and AngularJS framework code. The tools
help us manage and test the application.

* We get the tools we depend upon and the AngularJS code via `npm`, the [Node package manager][npm].

Preconfigured `npm` to automatically copy the downloaded AngularJS files to `app/lib` so we
can simply do:

```
npm install
```

* `node_modules` - contains the npm packages for the tools we need
* `app/lib` - contains the AngularJS framework files and other front end dependencies


### Run the Application

To run the application enter the below command on terminal or CLI:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


### Screenshots of flow of application

### 1.Price list of coffees
![alt text](https://github.com/mohitagarwal2599/baristacoffee/blob/main/app/img/bc-prices.png?raw=true)


### 2.User list with total payment, total amount and balance
![alt text](https://github.com/mohitagarwal2599/baristacoffee/blob/main/app/img/bc-users.png?raw=true)


### 3.Order list with user name, coffee name, size and price
![alt text](https://github.com/mohitagarwal2599/baristacoffee/blob/main/app/img/bc-all-orders.png?raw=true)


### 4.Order list of single user having coffee name, size and price
![alt text](https://github.com/mohitagarwal2599/baristacoffee/blob/main/app/img/bc-single-customer-order.png?raw=true)


### 5.Payment list of all user having user name and payment amount
![alt text](https://github.com/mohitagarwal2599/baristacoffee/blob/main/app/img/bc-all-payments.png?raw=true)


### 6.Payment list of single user having user name and payment amount
![alt text](https://github.com/mohitagarwal2599/baristacoffee/blob/main/app/img/bc-single-user-payents.png?raw=true)


### To check JSON string containing the results of this work.

Open the console of application there you will get the final JSON data of complete application
