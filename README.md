# Local Bitcoins Server

# API documentation

## View in [Postman](https://documenter.getpostman.com/view/9983415/T1LLG9Cr)

Rest API

Endpoint Documentation

- Resource description

Information

- Resource url
- Methods
- Parameters
- Request example
- Response examples
- Status and error codes
- Code sample

Keys to authorize the calls

Make requests via postman to test endpoints

**NOTE** : When you are adding anything to this document you can always use your favourite text editor but save the file with the same format as this document and also as a docx. . When all is ready to be uploaded you can use any doc.x to markdown convertors then copy the syntax in the markdown and paste it on to here
Thank You

- https://word2md.com/

##

# SUMMARY TABLE OF API ENDPOINTS

# Info

# SUMMARY TABLE OF API ENDPOINTS

| **Table** | **Method** | **Endpoint**       | **Description**                                                                                                                                                                          |
| --------- | ---------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| users     | POST       | /api/auth/register | Creates a new user profile using the information sent inside the body of the request and returns a message along with the new user and a JSON Web Token in the body of the response.     |
| users     | POST       | /api/auth/login    | Uses the credentials sent inside the body to authenticate the user. On successful login, returns a message with the user profile and a JSON Web Token token in the body of the response. |

#

##

# AUTH ROUTES

## POST Register

### {{base_URL}}/api/auth/register

**Headers**

| **name**     | **type** | **required** | **description**          |
| ------------ | -------- | ------------ | ------------------------ |
| Content-Type | String   | Yes          | Must be application/json |

**Body**

| **name** | **type** | **required** | **description** |
| -------- | -------- | ------------ | --------------- |
| username | String   | Yes          | Must be unique  |
| email    | String   | Yes          | Must be unique  |
| password | String   | Yes          | Must be unique  |
|          |          |              |                 |

```
{
    "username": "demoUser",
    "email": "demo@gmail.com",
    "password": "Pass1234"
}
```

## POST LOGIN

### {{base_URL}}/api/auth/register

**LOGIN**

**Logs a user in**

_Method Url:_ /api/auth/login

_HTTP method:_**[POST]**

**Headers**

| **name**     | **type** | **required** | **description**          |
| ------------ | -------- | ------------ | ------------------------ |
| Content-Type | String   | Yes          | Must be application/json |

**Body**

| **name** | **type** | **required** | **description**                                                    |
| -------- | -------- | ------------ | ------------------------------------------------------------------ |
| email    | String   | Yes          | Must match an email in the database                                |
| password | String   | Yes          | Must match a password in the database corresponding to email above |

```
{
    "username": "demoUser",
    "password": "Pass1234"
}
```

# OFFERS ROUTES

| **Table** | **Method** | **Endpoint**                 | **Description**                                                                                         |
| --------- | ---------- | ---------------------------- | ------------------------------------------------------------------------------------------------------- |
| offers    | POST       | /api/offers/                 | Creates a new offer using the information sent inside the body of the request and returns the new offer |
| offers    | PUT        | /api/offers/:userId/:offerId | Updates the existing offer based on the fields sent inside the body and returns the updated offer       |
| offers    | GET        | /api/offers/all-offers       | Returns all offers.                                                                                     |
| offers    | GET        | /api/offers/offer/:offerId   | Returns an offer that matches the id query param                                                        |
| offers    | GET        | /api/offers/:userId          | Returns all offers for a user based on the id query param                                               |
| offers    | DELETE     | /api/offers/:userId/:offerId | Deletes offer based on the user id and offer id passed in the query param                               |

**ADD OFFER / CREATE**

_Method Url:_ /api/offers/

_HTTP method:_**[POST]**

**Headers**

| **name**      | **type** | **required** | **description**          |
| ------------- | -------- | ------------ | ------------------------ |
| Content-Type  | String   | Yes          | Must be application/json |
| Authorization | String   | Yes          | JSON Web Token           |

**Body**

| **name**        | **type**  | **required** | **description**          |
| --------------- | --------- | ------------ | ------------------------ |
| buyBCH          | boolean   | Yes          | Cannot be an empty field |
| country         | String    | Yes          | Cannot be an empty field |
| city            | String    | Yes          | Cannot be an empty field |
| paymentMethod   | String    | Yes          | Cannot be an empty field |
| currencyType    | String    | Yes          | Cannot be an empty field |
| currencySymbol  | String    | Yes          | Cannot be an empty field |
| dynamic_pricing | boolean   | No           | Can be an empty field    |
| margin          | integer   | Yes          | Cannot be an empty field |
| marginAbove     | boolean   | Yes          | Cannot be an empty field |
| marketExchange  | string    | Yes          | Cannot be an empty field |
| limitMin        | integer   | No           | Can be an empty field    |
| limitMax        | integer   | No           | Can be an empty field    |
| headline        | string    | Yes          | Cannot be an empty field |
| tradeTerms      | string    | Yes          | Can be an empty field    |
| openHours       | time      | No           | Can be an empty field    |
| closeHours      | time      | No           | Can be an empty field    |
| verifiedOnly    | boolean   | Yes          | Cannot be an empty field |
| pause           | boolean   | No           | Can be an empty field    |
| makerId         | integer   | Yes          | Cannot be an empty field |
| created_at      | timestamp |              |                          |
| updated_at      | timestamp |              |                          |

```
{
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
   "currencySymbol": "$",
   "dynamicPricing": true,
    "margin": 5,
   "marginAbove": true,
    "marketExchange": "Coinbase",
    "limitMin": 50,
    "limitMax": 250,
    "headline": "Best Deal in Town",
    "tradeTerms": "lorem ipsum at Starbucks",
    "verifiedOnly": true,
    "makerId": 3,
    "pause": false

}
```

**UPDATE OFFER / UPDATE**

_Method Url:_ /api/offers/:userId/:offerId

_HTTP method:_**[PUT]**

**Headers**

| **name**      | **type** | **required** | **description**          |
| ------------- | -------- | ------------ | ------------------------ |
| Content-Type  | String   | Yes          | Must be application/json |
| Authorization | String   | Yes          | JSON Web Token           |

**Body**

| **name**        | **type**  | **required** | **description**          |
| --------------- | --------- | ------------ | ------------------------ |
| id              | integer   | Yes          | Cannot be an empty field |
| buyBCH          | boolean   | Yes          | Cannot be an empty field |
| country         | String    | Yes          | Cannot be an empty field |
| city            | String    | Yes          | Cannot be an empty field |
| paymentMethod   | String    | Yes          | Cannot be an empty field |
| currencyType    | String    | Yes          | Cannot be an empty field |
| currencySymbol  | String    | Yes          | Cannot be an empty field |
| dynamic_pricing | boolean   | No           | Can be an empty field    |
| margin          | integer   | Yes          | Cannot be an empty field |
| marginAbove     | boolean   | Yes          | Cannot be an empty field |
| marketExchange  | string    | Yes          | Cannot be an empty field |
| limitMin        | integer   | No           | Can be an empty field    |
| limitMax        | integer   | No           | Can be an empty field    |
| headline        | string    | Yes          | Cannot be an empty field |
| tradeTerms      | string    | Yes          | Can be an empty field    |
| openHours       | time      | No           | Can be an empty field    |
| closeHours      | time      | No           | Can be an empty field    |
| verifiedOnly    | boolean   | Yes          | Cannot be an empty field |
| pause           | boolean   | No           | Can be an empty field    |
| makerId         | integer   | Yes          | Cannot be an empty field |
| created_at      | timestamp |              |                          |
| updated_at      | timestamp |              |                          |

```
{
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "$",
    "dynamicPricing": true,
    "margin": 5,
    "marginAbove": true,
    "marketExchange": "Coinbase",
    "limitMin": 50,
    "limitMax": 250,
    "headline": "Best Deal in Town",
    "tradeTerms": "lorem ipsum at Starbucks",
    "verifiedOnly": true,
    "makerId": 3
}
```

**GET ALL OFFERS / GET**

_Method Url:_ /api/offers/all-offers

_HTTP method:_**[GET]**

**Headers**

| **name**     | **type** | **required** | **description**          |
| ------------ | -------- | ------------ | ------------------------ |
| Content-Type | String   | Yes          | Must be application/json |

**GET ALL OFFERS / GET**

_Method Url:_ /api/offers/all-offers

_HTTP method:_**[GET]**

**Headers**

| **name**     | **type** | **required** | **description**          |
| ------------ | -------- | ------------ | ------------------------ |
| Content-Type | String   | Yes          | Must be application/json |

**GET AN OFFER / GET**

_Method Url:_ /api/offers/offer/:offerId

_HTTP method:_**[GET]**

**Headers**

| **name**     | **type** | **required** | **description**          |
| ------------ | -------- | ------------ | ------------------------ |
| Content-Type | String   | Yes          | Must be application/json |

**GET MY OFFERS / GET**

_Method Url:_ /api/offers/:userId

_HTTP method:_**[GET]**

**Headers**

| **name**     | **type** | **required** | **description**          |
| ------------ | -------- | ------------ | ------------------------ |
| Content-Type | String   | Yes          | Must be application/json |

**DELETE MY OFFER / DELETE**

_Method Url:_ /api/offers/:userId/:offerId

_HTTP method:_**[DELETE]**

**Headers**

| **name**      | **type** | **required** | **description**          |
| ------------- | -------- | ------------ | ------------------------ |
| Content-Type  | String   | Yes          | Must be application/json |
| Authorization | String   | Yes          | JSON Web Token           |

# ORDERS ROUTES

| **Table** | **Method** | **Endpoint**                 | **Description**                                                                                         |
| --------- | ---------- | ---------------------------- | ------------------------------------------------------------------------------------------------------- |
| orders    | POST       | /api/orders/create-order     | Creates a new order using the information sent inside the body of the request and returns the new offer |
| orders    | GET        | /api/orders/:userId          | Returns all orders for a single user based on the userId passed in the request query.                   |
| orders    | GET        | /api/orders/:userId/:orderId | Returns a single order based on userId and orderId passed in the request query param.                   |
| orders    | PUT        | /api/orders/:orderId         | Updates the existing order based on the fields sent inside the body and returns the updated offer       |

**ADD ORDER / CREATE**

_Method Url:_ /api/orders/create-order

_HTTP method:_**[POST]**

**Headers**

| **name**      | **type** | **required** | **description**          |
| ------------- | -------- | ------------ | ------------------------ |
| Content-Type  | String   | Yes          | Must be application/json |
| Authorization | String   | Yes          | JSON Web Token           |

**Body**

| **name**        | **type**  | **required** | **description**          |
| --------------- | --------- | ------------ | ------------------------ |
| bch_amount      | string    | Yes          | Cannot be an empty field |
| fiat_amount     | string    | Yes          | Cannot be an empty field |
| is_maker_buying | boolean   | Yes          | Cannot be an empty field |
| maker_id        | integer   | Yes          | Cannot be an empty field |
| offer_id        | integer   | Yes          | Cannot be an empty field |
| taker_id        | integer   | Yes          | Cannot be an empty field |
| price_bch       | string    | Yes          | Can be an empty field    |
| complete        | boolean   | No           | Cannot be an empty field |
| cancelled       | boolean   | No           | Cannot be an empty field |
| created_at      | timestamp |              |                          |
| updated_at      | timestamp |              |                          |

```
{
    "order": {
        "bch_amount": "1",
        "fiat_amount": "300",
        "is_maker_buying": true,
        "maker_id": {{userId}},
        "offer_id": {{offerIdSecond}},
        "price_bch": "300",
        "taker_id": 2
    },
    "initial_message": "Hello There!"
}
```

**GET MY ORDERS / GET**

_Method Url:_ /api/orders/:userId

_HTTP method:_**[GET]**

**Headers**

| **name**      | **type** | **required** | **description**          |
| ------------- | -------- | ------------ | ------------------------ |
| Content-Type  | String   | Yes          | Must be application/json |
| Authorization | String   | Yes          | JSON Web Token           |

**GET CURRENT ORDER / GET**

_Method Url:_ /api/orders/:userId/:orderId

_HTTP method:_**[GET]**

**Headers**

| **name**      | **type** | **required** | **description**          |
| ------------- | -------- | ------------ | ------------------------ |
| Content-Type  | String   | Yes          | Must be application/json |
| Authorization | String   | Yes          | JSON Web Token           |

**UPDATE ORDER / UPDATE**

_Method Url:_ /api/orders/:orderId

_HTTP method:_**[PUT]**

**Headers**

| **name**      | **type** | **required** | **description**          |
| ------------- | -------- | ------------ | ------------------------ |
| Content-Type  | String   | Yes          | Must be application/json |
| Authorization | String   | Yes          | JSON Web Token           |

**Body**

| **name**        | **type**  | **required** | **description**          |
| --------------- | --------- | ------------ | ------------------------ |
| bch_amount      | string    | Yes          | Cannot be an empty field |
| fiat_amount     | string    | Yes          | Cannot be an empty field |
| is_maker_buying | boolean   | Yes          | Cannot be an empty field |
| maker_id        | integer   | Yes          | Cannot be an empty field |
| offer_id        | integer   | Yes          | Cannot be an empty field |
| taker_id        | integer   | Yes          | Cannot be an empty field |
| price_bch       | string    | Yes          | Cannot be an empty field |
| complete        | boolean   | Yes          | Cannot be an empty field |
| cancelled       | boolean   | Yes          | Cannot be an empty field |
| created_at      | timestamp |              |                          |
| updated_at      | timestamp |              |                          |

```
{
    "bchAmount": "1",
    "fiatAmount": "300",
    "isMakerBuying": true,
    "makerId": {{userId}},
    "offerId": {{offerIdSecond}},
    "priceBCH": "300",
    "takerId": 2,
    "complete": true,
    "id": {{orderId}}
}
```

# ORDERS ROUTES

| **Table** | **Method** | **Endpoint**       | **Description**                                                                                            |
| --------- | ---------- | ------------------ | ---------------------------------------------------------------------------------------------------------- |
| chat      | POST       | /api/chat/:orderId | Creates a new chat message using the information sent inside the body of the request and returns a message |
| chat      | GET        | /api/chat/:orderId | Returns all chat messages for an order based on the orderId passed in the request query.                   |

**ADD MESSAGE / CREATE**

_Method Url:_ /api/chat/:orderId

_HTTP method:_**[POST]**

**Headers**

| **name**      | **type** | **required** | **description**          |
| ------------- | -------- | ------------ | ------------------------ |
| Content-Type  | String   | Yes          | Must be application/json |
| Authorization | String   | Yes          | JSON Web Token           |

**Body**

| **name**   | **type**  | **required** | **description**          |
| ---------- | --------- | ------------ | ------------------------ |
| text       | string    | Yes          | Cannot be an empty field |
| author_id  | integer   | Yes          | Cannot be an empty field |
| order_id   | integer   | Yes          | Cannot be an empty field |
| created_at | timestamp |              |                          |
| updated_at | timestamp |              |                          |

```
{
    "author_id": {{userId}},
    "order_id": {{orderId}},
    "text": "another message created again"
}
```

**GET ALL MESSAGES / GET**

_Method Url:_ /api/chat/:orderId

_HTTP method:_**[GET]**

**Headers**

| **name**      | **type** | **required** | **description**          |
| ------------- | -------- | ------------ | ------------------------ |
| Content-Type  | String   | Yes          | Must be application/json |
| Authorization | String   | Yes          | JSON Web Token           |
