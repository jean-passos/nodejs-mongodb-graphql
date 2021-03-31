# About the Project

It simulates a small feature of an e-commerce website where the customer can signup and later add or update his/her address. Furthermore when a consumer makes a new purchase, it's linked to consumer. 
The purchase take into account only the category and how many products in that category the costumer bought. That information can be used later to specific recomendations

# Tecnologies and Structure

The project starts locally on port 4000 (default) from apollo server. **GraphQL Playground** starts in the same address, it means, http://localhost:4000 is the address to access and test. To avoid stop in every source change was include the **nodemon** package. Requests goes through graphql server and is sent to **mongodb** via **mongoose**.

## utils/mongoDatabase.js

Export openConnection javascript function that opens the connection to mongo database. Connection string comes from a .env file (not included in repo)

## model

Models for documents in a mongodb
- Consumer: properties to persist new consumer. Address property is an embedded document and Purchases is a ref documents.
- Purchase: properties to persist new purchases made by consumers. Consumer property is a ref document. 

## resolvers

Files to implement resolvers that **./scr/schema.graphql** has defined

### Query

- findConsumer: search a costumer by his/her e-mail

### Mutation

- newConsumer: creates new consumer document in a consumer collection
- newAddress: updates (or creates) an address to specified constumer
- newConsumerPurchase: adds a new document to purchases collection and bind this purchase to customer

### ScalarDate

Since graphql does not have a date type built in, this must be created to recognize it when a request is made. This type was used for consumers' date of birth 