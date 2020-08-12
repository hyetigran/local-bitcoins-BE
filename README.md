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

- name: Local Bitcoin Clone
- \_postman_id: 68b3e1a7-0229-4ba3-8d41-d0854e1f68a4
- schema: https://schema.getpostman.com/json/collection/v2.1.0/collection.json

# Item

- ## Event
- ### Script
  - type: text/javascript
  - id: 492cffe9-5094-49f9-9c27-7f314e8a488f
- #### Exec
  - 0:
  - listen: prerequest
- ### Script
  - type: text/javascript
  - id: 99be3d93-8f59-428d-a3c2-0456ca89c554
- #### Exec
  - 0:
  - listen: test
- ## Item
- ### Protocolprofilebehavior
  - disableBodyPruning: True
- ### Request
- #### Body
  - raw: {
    "username": "demoUser",
    "email": "demo@gmail.com",
    "password": "Pass1234"
    }
  - mode: raw
- ##### Options
- ###### Raw
  - language: json
- #### Header
- #### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/auth/register
- ##### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ##### Path
  - 0: api
  - 1: auth
  - 2: register
  - method: POST
  - description: **Headers**

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
|          |          |              |                 |

- name: Register
- \_postman_id: ea2ff33c-b730-49b1-b64d-4e90ae701b95
- ### Response
  - status: Bad Request
  - body: {
    "status": 400,
    "errorMessage": {
    "email": "Please enter a valid email address.",
    "password": "Please add a password with at least 6 characters long.",
    "username": "Please add an username with at least 2 characters long."
    }
    }
  - code: 400
  - name: Register (status 400)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 214
  - key: Content-Length
  - value: W/"d6-VusHwkdF1I4IN3RzEtyj1tr0Abc"
  - key: Etag
  - value: Tue, 11 Aug 2020 03:24:39 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 74fabd5e-803d-4652-99d9-bd28c68c4f15
- #### Originalrequest
- ##### Body
  - raw: {
    "username": "s",
    "email": "demo",
    "password": "1"
    }
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/auth/register
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: auth
  - 2: register
  - method: POST
  - status: Created
  - body: {
    "message": "User created",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9AZGVtby5jb20iLCJ1c2VySWQiOjMsImlhdCI6MTU5NzExNjEwMywiZXhwIjoxNTk3MjAyNTAzfQ.wFg456UnOaCB1-Vxh9g-p9GagGOM3M8UJFxeXa4IWf4",
    "user": {
    "id": 3,
    "email": "demo@demo.com",
    "username": "demoUser"
    }
    }
  - code: 201
  - name: Register (status 201)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 278
  - key: Content-Length
  - value: W/"116-vVbTgnyRRyN345ebCGZS8udDfeU"
  - key: Etag
  - value: Tue, 11 Aug 2020 03:21:43 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: e9fc89c5-c02e-49f4-ada7-f9b92d31878d
- #### Originalrequest
- ##### Body
  - raw: {
    "username": "demoUser",
    "email": "demo@demo.com",
    "password": "Pass1234"
    }
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/auth/register
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: auth
  - 2: register
  - method: POST
- ### Protocolprofilebehavior
  - disableBodyPruning: True
- ### Request
- #### Body
  - raw: {
    "username": "demoUser",
    "password": "Pass1234"
    }
  - mode: raw
- ##### Options
- ###### Raw
  - language: json
- #### Header
- #### Url
  - raw: {{base_URL}}/api/auth/login
- ##### Host
  - 0: {{base_URL}}
- ##### Path
  - 0: api
  - 1: auth
  - 2: login
  - method: POST
  - description: **LOGIN**

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

- name: Login
- \_postman_id: 10ffd91e-ac95-4200-809b-b2da673a7f11
- ### Response
  - status: Unauthorized
  - body: {
    "errorMessage": "Oops, username or password is incorrect"
    }
  - code: 401
  - name: Login (status 401)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 58
  - key: Content-Length
  - value: W/"3a-z6QXogEQ0dgp6fXPuwhCtLvdNQA"
  - key: Etag
  - value: Tue, 11 Aug 2020 03:35:20 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 1354a22b-c442-49f7-85dd-ceb3e6438e9a
- #### Originalrequest
- ##### Body
  - raw: {
    "username": "notauser",
    "password": "111111111"
    }
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/auth/login
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: auth
  - 2: login
  - method: POST
  - status: Bad Request
  - body: {
    "errorMessage": "Oops, username and password is required for login."
    }
  - code: 400
  - name: Login (status 400)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 69
  - key: Content-Length
  - value: W/"45-4u/LBbnpCDvek2xOa7JpfITliaM"
  - key: Etag
  - value: Tue, 11 Aug 2020 03:34:23 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 70c4fa8d-3ce9-4ff2-b731-ce3caf3408f5
- #### Originalrequest
- ##### Body
  - raw: {
    "username": "",
    "password": ""
    }
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/auth/login
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: auth
  - 2: login
  - method: POST
  - status: OK
  - body: {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMTY0MzQsImV4cCI6MTU5NzIwMjgzNH0.ecOOlfF9USaX1T1SJWQZdILuoY2OfUFTsEYstlnNAHU",
    "userId": 3,
    "username": "demoUser"
    }
  - code: 200
  - name: Login (status 200)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 217
  - key: Content-Length
  - value: W/"d9-F6lYaenSRnOVoNeZB+IknheqfOc"
  - key: Etag
  - value: Tue, 11 Aug 2020 03:27:13 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: ebf089ad-3054-44df-8b11-7f4f7a47d002
- #### Originalrequest
- ##### Body
  - raw: {
    "username": "demoUser",
    "password": "Pass1234"
    }
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/auth/login
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: auth
  - 2: login
  - method: POST
- name: Auth
- \_postman_id: cf3298e3-5547-4bd9-be1b-e1d87c216696
- description: # SUMMARY TABLE OF API ENDPOINTS

| **Table** | **Method** | **Endpoint**       | **Description**                                                                                                                                                                          |
| --------- | ---------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| users     | POST       | /api/auth/register | Creates a new user profile using the information sent inside the body of the request and returns a message along with the new user and a JSON Web Token in the body of the response.     |
| users     | POST       | /api/auth/login    | Uses the credentials sent inside the body to authenticate the user. On successful login, returns a message with the user profile and a JSON Web Token token in the body of the response. |

#

##

# AUTH ROUTES

- ## Item
- ### Protocolprofilebehavior
  - disableBodyPruning: True
- ### Request
- #### Body

  - raw: {
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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

- mode: raw
- ##### Options
- ###### Raw
  - language: json
  - description: **ADD OFFER / CREATE**

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

- #### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/
- ##### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ##### Path
  - 0: api
  - 1: offers
  - 2:
- #### Auth
  - type: bearer
- ##### Bearer
  - type: string
  - value: {{my_token}}
  - key: token
- #### Header
  - method: POST
  - name: Create Offer
  - \_postman_id: 895d7674-e807-44dc-9d30-d7ccd4c420c8
- ### Response
  - status: Internal Server Error
  - body: {
    "errorMessage": {
    "name": "error",
    "length": 100,
    "severity": "ERROR",
    "code": "22P02",
    "file": "bool.c",
    "line": "154",
    "routine": "boolin"
    }
    }
  - code: 500
  - name: Create Offer (status 500)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 128
  - key: Content-Length
  - value: W/"80-BJxyTvbpXjqRK+aRLDr+AMiaQw4"
  - key: Etag
  - value: Tue, 11 Aug 2020 04:02:33 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 0fbbad28-10fe-48b5-8b61-d4b25158d667
- #### Originalrequest
- ##### Body

  - raw: {
    "buyBCH": "WRONG TYPE",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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

- mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2:
  - method: POST
  - status: Created
  - body: [
    {
    "id": 2,
    "buyBCH": true,
    "country": "United States",
    "city": "New York City",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "$",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "Coinbase",
    "limit_min": 50,
    "limit_max": 250,
    "headline": "Best Deal in Town",
    "trade_terms": "lorem ipsum at Starbucks",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": false,
    "maker_id": 3,
    "created_at": "2020-08-11T03:59:07.574Z",
    "updated_at": "2020-08-11T03:59:07.574Z",
    "username": "demoUser"
    }
    ]
  - code: 201
  - name: Create Offer (status 201)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 524
  - key: Content-Length
  - value: W/"20c-5o/iMKvhTEe2pwa3dp3iLSYwzZ8"
  - key: Etag
  - value: Tue, 11 Aug 2020 03:59:07 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 5f836adf-0bbe-40b1-a73c-9d25e06272d2
- #### Originalrequest
- ##### Body

  - raw: {
    "buyBCH": true,
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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

- mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2:
  - method: POST
- ### Protocolprofilebehavior
  - disableBodyPruning: True
- ### Request
- #### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ##### Options
- ###### Raw
  - language: json
  - description: **UPDATE OFFER / UPDATE**

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

- #### Url
  - raw: {{base_URL}}/api/offers/{{userId}}/{{offerId}}
- ##### Host
  - 0: {{base_URL}}
- ##### Path
  - 0: api
  - 1: offers
  - 2: {{userId}}
  - 3: {{offerId}}
- #### Auth
  - type: bearer
- ##### Bearer
  - type: string
  - value: {{my_token}}
  - key: token
- #### Header
  - disabled: True
  - type: text
  - value: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMjE5MjAsImV4cCI6MTU5NzIwODMyMH0.j0iPB181jK6pIewESJ4aDmfCPohLGynokDyyCXdOXUM"
  - key: Authorization
  - method: PUT
  - name: Update Offer
  - \_postman_id: 646d51fa-c17f-4612-a53b-6951325e130d
- ### Response
  - status: Created
  - body: [
    {
    "id": 2,
    "buyBCH": true,
    "country": "United States",
    "city": "New York City",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "$",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "Coinbase",
    "limit_min": 50,
    "limit_max": 250,
    "headline": "Best Deal in Town",
    "trade_terms": "lorem ipsum at Starbucks",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": false,
    "maker_id": 3,
    "created_at": "2020-08-11T03:59:07.574Z",
    "updated_at": "2020-08-11T03:59:07.574Z",
    "username": "demoUser"
    }
    ]
  - code: 201
  - name: Create Offer (status 201)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 524
  - key: Content-Length
  - value: W/"20c-5o/iMKvhTEe2pwa3dp3iLSYwzZ8"
  - key: Etag
  - value: Tue, 11 Aug 2020 03:59:07 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 1c9ebf5e-63c0-4586-8212-a7970a92cd8e
- #### Originalrequest
- ##### Body

  - raw: {
    "buyBCH": true,
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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

- mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2:
  - method: POST
  - status: Internal Server Error
  - body: {
    "errorMessage": {
    "name": "error",
    "length": 100,
    "severity": "ERROR",
    "code": "22P02",
    "file": "bool.c",
    "line": "154",
    "routine": "boolin"
    }
    }
  - code: 500
  - name: Create Offer (status 500)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 128
  - key: Content-Length
  - value: W/"80-BJxyTvbpXjqRK+aRLDr+AMiaQw4"
  - key: Etag
  - value: Tue, 11 Aug 2020 04:02:33 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 969599d8-c6ca-4700-b2eb-6ddd24c36e05
- #### Originalrequest
- ##### Body

  - raw: {
    "buyBCH": "WRONG TYPE",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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

- mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2:
  - method: POST
  - status: Unauthorized
  - body: {
    "errorMessage": "Not allowed to access this route",
    "err": {
    "name": "JsonWebTokenError",
    "message": "invalid token"
    }
    }
  - code: 401
  - name: Update Offer (status 401)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 112
  - key: Content-Length
  - value: W/"70-FU+PnxMZtcU/+Z7TaKgqWyxJeU4"
  - key: Etag
  - value: Tue, 11 Aug 2020 04:10:57 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 41f6d060-30c3-4194-b280-c14a8c170e0f
- #### Originalrequest
- ##### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/{{userId}}/{{offerId}}
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2: {{userId}}
  - 3: {{offerId}}
  - method: PUT
  - status: OK
  - body: [
    {
    "id": 2,
    "buyBCH": true,
    "country": "United States",
    "city": "New York City",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "$",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "Coinbase",
    "limit_min": 50,
    "limit_max": 250,
    "headline": "Best Deal in Town",
    "trade_terms": "lorem ipsum at Starbucks",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": true,
    "maker_id": 3,
    "created_at": "2020-08-11T03:59:07.574Z",
    "updated_at": "2020-08-11T03:59:07.574Z",
    "username": "demoUser"
    }
    ]
  - code: 200
  - name: Update Offer (status 200)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 523
  - key: Content-Length
  - value: W/"20b-1x7mlXnF5nCchumzDMQnAZTJ5FE"
  - key: Etag
  - value: Tue, 11 Aug 2020 05:06:08 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 528e0e7c-849c-44a9-b108-a6d95d4baa71
- #### Originalrequest
- ##### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
  - disabled: True
  - type: text
  - value: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMjE5MjAsImV4cCI6MTU5NzIwODMyMH0.j0iPB181jK6pIewESJ4aDmfCPohLGynokDyyCXdOXUM"
  - key: Authorization
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/{{userId}}/{{offerId}}
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2: {{userId}}
  - 3: {{offerId}}
  - method: PUT
- ### Protocolprofilebehavior
  - disableBodyPruning: True
- ### Request
- #### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ##### Options
- ###### Raw
  - language: json
- #### Header
  - disabled: True
  - type: text
  - value: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMjE5MjAsImV4cCI6MTU5NzIwODMyMH0.j0iPB181jK6pIewESJ4aDmfCPohLGynokDyyCXdOXUM"
  - key: Authorization
- #### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/all-offers
- ##### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ##### Path
  - 0: api
  - 1: offers
  - 2: all-offers
  - method: GET
- #### Auth
  - type: bearer
- ##### Bearer
  - type: string
  - value: {{my_token}}
  - key: token
  - name: Get All Offer
  - \_postman_id: 5afae664-90f8-455a-9b6a-2411edfde9ce
- ### Response
  - status: Unauthorized
  - body: {
    "errorMessage": "Not allowed to access this route",
    "err": {
    "name": "JsonWebTokenError",
    "message": "invalid token"
    }
    }
  - code: 401
  - name: Update Offer (status 401)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 112
  - key: Content-Length
  - value: W/"70-FU+PnxMZtcU/+Z7TaKgqWyxJeU4"
  - key: Etag
  - value: Tue, 11 Aug 2020 04:10:57 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 1e045f52-ddb9-44f6-ab61-76654273db7b
- #### Originalrequest
- ##### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/{{userId}}/{{offerId}}
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2: {{userId}}
  - 3: {{offerId}}
  - method: PUT
  - status: OK
  - body: [
    {
    "id": 2,
    "buyBCH": true,
    "country": "United States",
    "city": "New York City",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "$",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "Coinbase",
    "limit_min": 50,
    "limit_max": 250,
    "headline": "Best Deal in Town",
    "trade_terms": "lorem ipsum at Starbucks",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": true,
    "maker_id": 3,
    "created_at": "2020-08-11T03:59:07.574Z",
    "updated_at": "2020-08-11T03:59:07.574Z",
    "username": "demoUser"
    }
    ]
  - code: 200
  - name: Update Offer (status 200)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 523
  - key: Content-Length
  - value: W/"20b-1x7mlXnF5nCchumzDMQnAZTJ5FE"
  - key: Etag
  - value: Tue, 11 Aug 2020 05:06:08 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 1fbce869-bd69-406a-aef2-a5dd5b231ccf
- #### Originalrequest
- ##### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
  - disabled: True
  - type: text
  - value: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMjE5MjAsImV4cCI6MTU5NzIwODMyMH0.j0iPB181jK6pIewESJ4aDmfCPohLGynokDyyCXdOXUM"
  - key: Authorization
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/{{userId}}/{{offerId}}
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2: {{userId}}
  - 3: {{offerId}}
  - method: PUT
  - status: Internal Server Error
  - body: {
    "errorMessage": {
    "name": "error",
    "length": 100,
    "severity": "ERROR",
    "code": "22P02",
    "file": "bool.c",
    "line": "154",
    "routine": "boolin"
    }
    }
  - code: 500
  - name: Create Offer (status 500)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 128
  - key: Content-Length
  - value: W/"80-BJxyTvbpXjqRK+aRLDr+AMiaQw4"
  - key: Etag
  - value: Tue, 11 Aug 2020 04:02:33 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 5e95254a-c332-428a-8e4e-f8513349e2a3
- #### Originalrequest
- ##### Body

  - raw: {
    "buyBCH": "WRONG TYPE",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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

- mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2:
  - method: POST
  - status: Created
  - body: [
    {
    "id": 2,
    "buyBCH": true,
    "country": "United States",
    "city": "New York City",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "$",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "Coinbase",
    "limit_min": 50,
    "limit_max": 250,
    "headline": "Best Deal in Town",
    "trade_terms": "lorem ipsum at Starbucks",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": false,
    "maker_id": 3,
    "created_at": "2020-08-11T03:59:07.574Z",
    "updated_at": "2020-08-11T03:59:07.574Z",
    "username": "demoUser"
    }
    ]
  - code: 201
  - name: Create Offer (status 201)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 524
  - key: Content-Length
  - value: W/"20c-5o/iMKvhTEe2pwa3dp3iLSYwzZ8"
  - key: Etag
  - value: Tue, 11 Aug 2020 03:59:07 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 657f7237-fabd-4a6b-a893-72a30d37bbce
- #### Originalrequest
- ##### Body

  - raw: {
    "buyBCH": true,
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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

- mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2:
  - method: POST
  - status: OK
  - body: [
    {
    "id": 2,
    "buyBCH": true,
    "country": "United States",
    "city": "New York City",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "$",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "Coinbase",
    "limit_min": 50,
    "limit_max": 250,
    "headline": "Best Deal in Town",
    "trade_terms": "lorem ipsum at Starbucks",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": true,
    "maker_id": 3,
    "created_at": "2020-08-11T03:59:07.574Z",
    "updated_at": "2020-08-11T03:59:07.574Z",
    "username": "demoUser"
    },
    {
    "id": 1,
    "buyBCH": true,
    "country": "United States",
    "city": "Strongsville",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "S",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "",
    "limit_min": null,
    "limit_max": null,
    "headline": "Great Deal",
    "trade_terms": "trade details",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": false,
    "maker_id": 1,
    "created_at": "2020-08-06T17:07:14.413Z",
    "updated_at": "2020-08-06T17:07:14.413Z",
    "username": "tigran"
    }
    ]
  - code: 200
  - name: Get All Offer (status 200)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 1020
  - key: Content-Length
  - value: W/"3fc-ubyTFDdSReWzUY8sItAhyMiCFHU"
  - key: Etag
  - value: Tue, 11 Aug 2020 05:08:55 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: f516c417-8d0b-4049-9ded-b2c2c84cbc7b
- #### Originalrequest
- ##### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
  - disabled: True
  - type: text
  - value: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMjE5MjAsImV4cCI6MTU5NzIwODMyMH0.j0iPB181jK6pIewESJ4aDmfCPohLGynokDyyCXdOXUM"
  - key: Authorization
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/all-offers
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2: all-offers
  - method: GET
- ### Protocolprofilebehavior
  - disableBodyPruning: True
- ### Request
- #### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ##### Options
- ###### Raw
  - language: json
- #### Header
  - disabled: True
  - type: text
  - value: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMjE5MjAsImV4cCI6MTU5NzIwODMyMH0.j0iPB181jK6pIewESJ4aDmfCPohLGynokDyyCXdOXUM"
  - key: Authorization
- #### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/offer/{{offerId}}
- ##### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ##### Path
  - 0: api
  - 1: offers
  - 2: offer
  - 3: {{offerId}}
  - method: GET
- #### Auth
  - type: noauth
  - name: Get An Offer
  - \_postman_id: d9adc5bb-ce8a-4815-a15b-87a5566f48e0
- ### Response
  - status: OK
  - body: [
    {
    "id": 2,
    "buyBCH": true,
    "country": "United States",
    "city": "New York City",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "$",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "Coinbase",
    "limit_min": 50,
    "limit_max": 250,
    "headline": "Best Deal in Town",
    "trade_terms": "lorem ipsum at Starbucks",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": true,
    "maker_id": 3,
    "created_at": "2020-08-11T03:59:07.574Z",
    "updated_at": "2020-08-11T03:59:07.574Z",
    "username": "demoUser"
    },
    {
    "id": 1,
    "buyBCH": true,
    "country": "United States",
    "city": "Strongsville",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "S",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "",
    "limit_min": null,
    "limit_max": null,
    "headline": "Great Deal",
    "trade_terms": "trade details",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": false,
    "maker_id": 1,
    "created_at": "2020-08-06T17:07:14.413Z",
    "updated_at": "2020-08-06T17:07:14.413Z",
    "username": "tigran"
    }
    ]
  - code: 200
  - name: Get All Offer (status 200)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 1020
  - key: Content-Length
  - value: W/"3fc-ubyTFDdSReWzUY8sItAhyMiCFHU"
  - key: Etag
  - value: Tue, 11 Aug 2020 05:08:55 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 26ebe900-3057-487c-91d7-3d5b64d5e481
- #### Originalrequest
- ##### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
  - disabled: True
  - type: text
  - value: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMjE5MjAsImV4cCI6MTU5NzIwODMyMH0.j0iPB181jK6pIewESJ4aDmfCPohLGynokDyyCXdOXUM"
  - key: Authorization
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/all-offers
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2: all-offers
  - method: GET
  - status: Internal Server Error
  - body: {
    "errorMessage": {
    "name": "error",
    "length": 100,
    "severity": "ERROR",
    "code": "22P02",
    "file": "bool.c",
    "line": "154",
    "routine": "boolin"
    }
    }
  - code: 500
  - name: Create Offer (status 500)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 128
  - key: Content-Length
  - value: W/"80-BJxyTvbpXjqRK+aRLDr+AMiaQw4"
  - key: Etag
  - value: Tue, 11 Aug 2020 04:02:33 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 2740d527-8e91-4fc6-a2ea-4df94851a46a
- #### Originalrequest
- ##### Body

  - raw: {
    "buyBCH": "WRONG TYPE",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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

- mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2:
  - method: POST
  - status: Unauthorized
  - body: {
    "errorMessage": "Not allowed to access this route",
    "err": {
    "name": "JsonWebTokenError",
    "message": "invalid token"
    }
    }
  - code: 401
  - name: Update Offer (status 401)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 112
  - key: Content-Length
  - value: W/"70-FU+PnxMZtcU/+Z7TaKgqWyxJeU4"
  - key: Etag
  - value: Tue, 11 Aug 2020 04:10:57 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 637f4533-b257-4cfc-82d5-559277c236df
- #### Originalrequest
- ##### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/{{userId}}/{{offerId}}
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2: {{userId}}
  - 3: {{offerId}}
  - method: PUT
  - status: Created
  - body: [
    {
    "id": 2,
    "buyBCH": true,
    "country": "United States",
    "city": "New York City",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "$",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "Coinbase",
    "limit_min": 50,
    "limit_max": 250,
    "headline": "Best Deal in Town",
    "trade_terms": "lorem ipsum at Starbucks",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": false,
    "maker_id": 3,
    "created_at": "2020-08-11T03:59:07.574Z",
    "updated_at": "2020-08-11T03:59:07.574Z",
    "username": "demoUser"
    }
    ]
  - code: 201
  - name: Create Offer (status 201)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 524
  - key: Content-Length
  - value: W/"20c-5o/iMKvhTEe2pwa3dp3iLSYwzZ8"
  - key: Etag
  - value: Tue, 11 Aug 2020 03:59:07 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 897e9bdc-0262-45ad-ada0-15630a16c421
- #### Originalrequest
- ##### Body

  - raw: {
    "buyBCH": true,
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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

- mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2:
  - method: POST
  - status: OK
  - body: [
    {
    "id": 2,
    "buyBCH": true,
    "country": "United States",
    "city": "New York City",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "$",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "Coinbase",
    "limit_min": 50,
    "limit_max": 250,
    "headline": "Best Deal in Town",
    "trade_terms": "lorem ipsum at Starbucks",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": true,
    "maker_id": 3,
    "created_at": "2020-08-11T03:59:07.574Z",
    "updated_at": "2020-08-11T03:59:07.574Z",
    "username": "demoUser"
    }
    ]
  - code: 200
  - name: Update Offer (status 200)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 523
  - key: Content-Length
  - value: W/"20b-1x7mlXnF5nCchumzDMQnAZTJ5FE"
  - key: Etag
  - value: Tue, 11 Aug 2020 05:06:08 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: fd2681d4-e70f-4642-9de7-d021b261f3db
- #### Originalrequest
- ##### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
  - disabled: True
  - type: text
  - value: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMjE5MjAsImV4cCI6MTU5NzIwODMyMH0.j0iPB181jK6pIewESJ4aDmfCPohLGynokDyyCXdOXUM"
  - key: Authorization
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/{{userId}}/{{offerId}}
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2: {{userId}}
  - 3: {{offerId}}
  - method: PUT
  - status: OK
  - body: [
    {
    "id": 2,
    "buyBCH": true,
    "country": "United States",
    "city": "New York City",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "$",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "Coinbase",
    "limit_min": 50,
    "limit_max": 250,
    "headline": "Best Deal in Town",
    "trade_terms": "lorem ipsum at Starbucks",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": true,
    "maker_id": 3,
    "created_at": "2020-08-11T03:59:07.574Z",
    "updated_at": "2020-08-11T03:59:07.574Z"
    }
    ]
  - code: 200
  - name: Get My Offers (status 200)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 501
  - key: Content-Length
  - value: W/"1f5-iMmho6yi6dmF3ZOgrpd2hjOgRfY"
  - key: Etag
  - value: Tue, 11 Aug 2020 06:05:04 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 5ac92cf0-757e-4448-88e1-94334b85a133
- #### Originalrequest
- ##### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
  - disabled: True
  - type: text
  - value: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMjE5MjAsImV4cCI6MTU5NzIwODMyMH0.j0iPB181jK6pIewESJ4aDmfCPohLGynokDyyCXdOXUM"
  - key: Authorization
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/{{userId}}
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2: {{userId}}
  - method: GET
  - status: OK
  - body: [
    {
    "id": 2,
    "buyBCH": true,
    "country": "United States",
    "city": "New York City",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "$",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "Coinbase",
    "limit_min": 50,
    "limit_max": 250,
    "headline": "Best Deal in Town",
    "trade_terms": "lorem ipsum at Starbucks",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": true,
    "maker_id": 3,
    "created_at": "2020-08-11T03:59:07.574Z",
    "updated_at": "2020-08-11T03:59:07.574Z",
    "username": "demoUser"
    }
    ]
  - code: 200
  - name: Get An Offer (status 200)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 523
  - key: Content-Length
  - value: W/"20b-1x7mlXnF5nCchumzDMQnAZTJ5FE"
  - key: Etag
  - value: Tue, 11 Aug 2020 06:07:40 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: cb7869ca-209c-4c33-9bb6-697ade26ca7f
- #### Originalrequest
- ##### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
  - disabled: True
  - type: text
  - value: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMjE5MjAsImV4cCI6MTU5NzIwODMyMH0.j0iPB181jK6pIewESJ4aDmfCPohLGynokDyyCXdOXUM"
  - key: Authorization
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/offer/{{offerId}}
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2: offer
  - 3: {{offerId}}
  - method: GET
- ### Protocolprofilebehavior
  - disableBodyPruning: True
- ### Request
- #### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ##### Options
- ###### Raw
  - language: json
- #### Header
  - disabled: True
  - type: text
  - value: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMjE5MjAsImV4cCI6MTU5NzIwODMyMH0.j0iPB181jK6pIewESJ4aDmfCPohLGynokDyyCXdOXUM"
  - key: Authorization
- #### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/{{userId}}
- ##### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ##### Path
  - 0: api
  - 1: offers
  - 2: {{userId}}
  - method: GET
- #### Auth
  - type: bearer
- ##### Bearer
  - type: string
  - value: {{my_token}}
  - key: token
  - name: Get My Offers
  - \_postman_id: 4f63c3da-2251-4148-b98e-a0502ff5168d
- ### Response
  - status: OK
  - body: [
    {
    "id": 2,
    "buyBCH": true,
    "country": "United States",
    "city": "New York City",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "$",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "Coinbase",
    "limit_min": 50,
    "limit_max": 250,
    "headline": "Best Deal in Town",
    "trade_terms": "lorem ipsum at Starbucks",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": true,
    "maker_id": 3,
    "created_at": "2020-08-11T03:59:07.574Z",
    "updated_at": "2020-08-11T03:59:07.574Z",
    "username": "demoUser"
    },
    {
    "id": 1,
    "buyBCH": true,
    "country": "United States",
    "city": "Strongsville",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "S",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "",
    "limit_min": null,
    "limit_max": null,
    "headline": "Great Deal",
    "trade_terms": "trade details",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": false,
    "maker_id": 1,
    "created_at": "2020-08-06T17:07:14.413Z",
    "updated_at": "2020-08-06T17:07:14.413Z",
    "username": "tigran"
    }
    ]
  - code: 200
  - name: Get All Offer (status 200)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 1020
  - key: Content-Length
  - value: W/"3fc-ubyTFDdSReWzUY8sItAhyMiCFHU"
  - key: Etag
  - value: Tue, 11 Aug 2020 05:08:55 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 00ca8ff9-b6c0-4d56-a73d-ee0d26c763de
- #### Originalrequest
- ##### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
  - disabled: True
  - type: text
  - value: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMjE5MjAsImV4cCI6MTU5NzIwODMyMH0.j0iPB181jK6pIewESJ4aDmfCPohLGynokDyyCXdOXUM"
  - key: Authorization
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/all-offers
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2: all-offers
  - method: GET
  - status: Internal Server Error
  - body: {
    "errorMessage": {
    "name": "error",
    "length": 100,
    "severity": "ERROR",
    "code": "22P02",
    "file": "bool.c",
    "line": "154",
    "routine": "boolin"
    }
    }
  - code: 500
  - name: Create Offer (status 500)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 128
  - key: Content-Length
  - value: W/"80-BJxyTvbpXjqRK+aRLDr+AMiaQw4"
  - key: Etag
  - value: Tue, 11 Aug 2020 04:02:33 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 508d13ef-4b87-4069-8543-b9a4f4e7511a
- #### Originalrequest
- ##### Body

  - raw: {
    "buyBCH": "WRONG TYPE",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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

- mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2:
  - method: POST
  - status: Unauthorized
  - body: {
    "errorMessage": "Not allowed to access this route",
    "err": {
    "name": "JsonWebTokenError",
    "message": "invalid token"
    }
    }
  - code: 401
  - name: Update Offer (status 401)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 112
  - key: Content-Length
  - value: W/"70-FU+PnxMZtcU/+Z7TaKgqWyxJeU4"
  - key: Etag
  - value: Tue, 11 Aug 2020 04:10:57 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 75679ffc-83bc-4cba-90e7-4d9601d30af9
- #### Originalrequest
- ##### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/{{userId}}/{{offerId}}
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2: {{userId}}
  - 3: {{offerId}}
  - method: PUT
  - status: OK
  - body: [
    {
    "id": 2,
    "buyBCH": true,
    "country": "United States",
    "city": "New York City",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "$",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "Coinbase",
    "limit_min": 50,
    "limit_max": 250,
    "headline": "Best Deal in Town",
    "trade_terms": "lorem ipsum at Starbucks",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": true,
    "maker_id": 3,
    "created_at": "2020-08-11T03:59:07.574Z",
    "updated_at": "2020-08-11T03:59:07.574Z"
    }
    ]
  - code: 200
  - name: Get My Offers (status 200)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 501
  - key: Content-Length
  - value: W/"1f5-iMmho6yi6dmF3ZOgrpd2hjOgRfY"
  - key: Etag
  - value: Tue, 11 Aug 2020 06:05:04 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 7fb4b18e-554f-4709-9ac7-f0674f8a51ad
- #### Originalrequest
- ##### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
  - disabled: True
  - type: text
  - value: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMjE5MjAsImV4cCI6MTU5NzIwODMyMH0.j0iPB181jK6pIewESJ4aDmfCPohLGynokDyyCXdOXUM"
  - key: Authorization
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/{{userId}}
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2: {{userId}}
  - method: GET
  - status: OK
  - body: [
    {
    "id": 2,
    "buyBCH": true,
    "country": "United States",
    "city": "New York City",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "$",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "Coinbase",
    "limit_min": 50,
    "limit_max": 250,
    "headline": "Best Deal in Town",
    "trade_terms": "lorem ipsum at Starbucks",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": true,
    "maker_id": 3,
    "created_at": "2020-08-11T03:59:07.574Z",
    "updated_at": "2020-08-11T03:59:07.574Z",
    "username": "demoUser"
    }
    ]
  - code: 200
  - name: Update Offer (status 200)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 523
  - key: Content-Length
  - value: W/"20b-1x7mlXnF5nCchumzDMQnAZTJ5FE"
  - key: Etag
  - value: Tue, 11 Aug 2020 05:06:08 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: a399b5f9-51e2-42ab-9284-012beb776f32
- #### Originalrequest
- ##### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
  - disabled: True
  - type: text
  - value: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMjE5MjAsImV4cCI6MTU5NzIwODMyMH0.j0iPB181jK6pIewESJ4aDmfCPohLGynokDyyCXdOXUM"
  - key: Authorization
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/{{userId}}/{{offerId}}
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2: {{userId}}
  - 3: {{offerId}}
  - method: PUT
  - status: Created
  - body: [
    {
    "id": 2,
    "buyBCH": true,
    "country": "United States",
    "city": "New York City",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "$",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "Coinbase",
    "limit_min": 50,
    "limit_max": 250,
    "headline": "Best Deal in Town",
    "trade_terms": "lorem ipsum at Starbucks",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": false,
    "maker_id": 3,
    "created_at": "2020-08-11T03:59:07.574Z",
    "updated_at": "2020-08-11T03:59:07.574Z",
    "username": "demoUser"
    }
    ]
  - code: 201
  - name: Create Offer (status 201)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 524
  - key: Content-Length
  - value: W/"20c-5o/iMKvhTEe2pwa3dp3iLSYwzZ8"
  - key: Etag
  - value: Tue, 11 Aug 2020 03:59:07 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: fbba5ed1-eaa0-449f-9be4-ee09af5675a1
- #### Originalrequest
- ##### Body

  - raw: {
    "buyBCH": true,
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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

- mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2:
  - method: POST
- ### Protocolprofilebehavior
  - disableBodyPruning: True
- ### Request
- #### Body
  - raw:
  - mode: raw
- ##### Options
- ###### Raw
  - language: json
- #### Header
  - disabled: True
  - type: text
  - value: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMjE5MjAsImV4cCI6MTU5NzIwODMyMH0.j0iPB181jK6pIewESJ4aDmfCPohLGynokDyyCXdOXUM"
  - key: Authorization
- #### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/{{userId}}/{{offerId}}
- ##### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ##### Path
  - 0: api
  - 1: offers
  - 2: {{userId}}
  - 3: {{offerId}}
  - method: DELETE
- #### Auth
  - type: bearer
- ##### Bearer
  - type: string
  - value: {{my_token}}
  - key: token
  - name: Delete Offer
  - \_postman_id: 4840f4dc-799b-4c31-9d89-5117ad4471ed
- ### Response
  - status: Internal Server Error
  - body: {
    "errorMessage": {
    "name": "error",
    "length": 100,
    "severity": "ERROR",
    "code": "22P02",
    "file": "bool.c",
    "line": "154",
    "routine": "boolin"
    }
    }
  - code: 500
  - name: Create Offer (status 500)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 128
  - key: Content-Length
  - value: W/"80-BJxyTvbpXjqRK+aRLDr+AMiaQw4"
  - key: Etag
  - value: Tue, 11 Aug 2020 04:02:33 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 35b015c2-1ed8-41dd-bfb9-ad0e5749f6dc
- #### Originalrequest
- ##### Body

  - raw: {
    "buyBCH": "WRONG TYPE",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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

- mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2:
  - method: POST
  - status: Created
  - body: [
    {
    "id": 2,
    "buyBCH": true,
    "country": "United States",
    "city": "New York City",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "$",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "Coinbase",
    "limit_min": 50,
    "limit_max": 250,
    "headline": "Best Deal in Town",
    "trade_terms": "lorem ipsum at Starbucks",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": false,
    "maker_id": 3,
    "created_at": "2020-08-11T03:59:07.574Z",
    "updated_at": "2020-08-11T03:59:07.574Z",
    "username": "demoUser"
    }
    ]
  - code: 201
  - name: Create Offer (status 201)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 524
  - key: Content-Length
  - value: W/"20c-5o/iMKvhTEe2pwa3dp3iLSYwzZ8"
  - key: Etag
  - value: Tue, 11 Aug 2020 03:59:07 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 52fdf462-0429-4215-b40b-371a47013681
- #### Originalrequest
- ##### Body

  - raw: {
    "buyBCH": true,
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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

- mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2:
  - method: POST
  - status: Unauthorized
  - body: {
    "errorMessage": "Not allowed to access this route",
    "err": {
    "name": "JsonWebTokenError",
    "message": "invalid token"
    }
    }
  - code: 401
  - name: Update Offer (status 401)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 112
  - key: Content-Length
  - value: W/"70-FU+PnxMZtcU/+Z7TaKgqWyxJeU4"
  - key: Etag
  - value: Tue, 11 Aug 2020 04:10:57 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: af76f72d-65b9-4233-b813-49c502f1fdc9
- #### Originalrequest
- ##### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/{{userId}}/{{offerId}}
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2: {{userId}}
  - 3: {{offerId}}
  - method: PUT
  - status: OK
  - body: [
    {
    "id": 2,
    "buyBCH": true,
    "country": "United States",
    "city": "New York City",
    "payment_method": "Cash in person",
    "currency_type": "USD",
    "currency_symbol": "$",
    "dynamic_pricing": true,
    "margin": 5,
    "margin_above": true,
    "market_exchange": "Coinbase",
    "limit_min": 50,
    "limit_max": 250,
    "headline": "Best Deal in Town",
    "trade_terms": "lorem ipsum at Starbucks",
    "open_hours": null,
    "close_hours": null,
    "verified_only": true,
    "pause": true,
    "maker_id": 3,
    "created_at": "2020-08-11T03:59:07.574Z",
    "updated_at": "2020-08-11T03:59:07.574Z",
    "username": "demoUser"
    }
    ]
  - code: 200
  - name: Update Offer (status 200)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 523
  - key: Content-Length
  - value: W/"20b-1x7mlXnF5nCchumzDMQnAZTJ5FE"
  - key: Etag
  - value: Tue, 11 Aug 2020 05:06:08 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: b60bec7c-00b5-45db-af07-5cac57510bed
- #### Originalrequest
- ##### Body
  - raw: {
    "id": 2,
    "pause": true,
    "buyBCH": "true",
    "city": "New York City",
    "country": "United States",
    "paymentMethod": "Cash in person",
    "currencyType": "USD",
    "currencySymbol": "\$",
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
  - disabled: True
  - type: text
  - value: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMjE5MjAsImV4cCI6MTU5NzIwODMyMH0.j0iPB181jK6pIewESJ4aDmfCPohLGynokDyyCXdOXUM"
  - key: Authorization
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/{{userId}}/{{offerId}}
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2: {{userId}}
  - 3: {{offerId}}
  - method: PUT
  - status: OK
  - body: 1
  - code: 200
  - name: Delete Offer (status 200)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 1
  - key: Content-Length
  - value: W/"1-NWoZK3kTsExUV00Ywo1G5jlUKKs"
  - key: Etag
  - value: Tue, 11 Aug 2020 06:10:50 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 65ce6b1f-02ed-4833-926c-4b374940de25
- #### Originalrequest
- ##### Body
  - raw:
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
  - disabled: True
  - type: text
  - value: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbW9Vc2VyIiwidXNlcklkIjozLCJpYXQiOjE1OTcxMjE5MjAsImV4cCI6MTU5NzIwODMyMH0.j0iPB181jK6pIewESJ4aDmfCPohLGynokDyyCXdOXUM"
  - key: Authorization
- ##### Url
  - raw: https://local-bitcoin-server.herokuapp.com/api/offers/{{userId}}/{{offerId}}
- ###### Host
  - 0: local-bitcoin-server
  - 1: herokuapp
  - 2: com
  - protocol: https
- ###### Path
  - 0: api
  - 1: offers
  - 2: {{userId}}
  - 3: {{offerId}}
  - method: DELETE
- name: Offers
- \_postman_id: 227ecc48-6860-4f9a-ba57-81fc38211cdf
- | description: | **Table** | **Method**                   | **Endpoint**                                                                                            | **Description** |
  | ------------ | --------- | ---------------------------- | ------------------------------------------------------------------------------------------------------- | --------------- |
  | offers       | POST      | /api/offers/                 | Creates a new offer using the information sent inside the body of the request and returns the new offer |
  | offers       | PUT       | /api/offers/:userId/:offerId | Updates the existing offer based on the fields sent inside the body and returns the updated offer       |
  | offers       | GET       | /api/offers/all-offers       | Returns all offers.                                                                                     |
  | offers       | GET       | /api/offers/offer/:offerId   | Returns an offer that matches the id query param                                                        |
  | offers       | GET       | /api/offers/:userId          | Returns all offers for a user based on the id query param                                               |
  | offers       | DELETE    | /api/offers/:userId/:offerId | Deletes offer based on the user id and offer id passed in the query param                               |

# OFFERS ROUTES

- ## Item
- ### Protocolprofilebehavior
  - disableBodyPruning: True
- ### Request
- #### Body
  - raw: {
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
  - mode: raw
- ##### Options
- ###### Raw
  - language: json
  - description: **ADD ORDER / CREATE**

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

- #### Url
  - raw: {{base_URL}}/api/orders/create-order
- ##### Host
  - 0: {{base_URL}}
- ##### Path
  - 0: api
  - 1: orders
  - 2: create-order
- #### Auth
  - type: bearer
- ##### Bearer
  - type: string
  - value: {{my_token}}
  - key: token
- #### Header
  - method: POST
  - name: Create Order
  - \_postman_id: 11f4aa26-0e73-469e-98fc-cd88be5b0f24
- ### Response
  - status: Created
  - body: {
    "id": 2,
    "complete": false,
    "cancelled": false,
    "is_maker_buying": true,
    "maker_id": 3,
    "taker_id": 2,
    "offer_id": 3,
    "price_bch": "300",
    "bch_amount": "1",
    "fiat_amount": "300",
    "created_at": "2020-08-11T06:41:22.114Z",
    "updated_at": "2020-08-11T06:41:22.114Z"
    }
  - code: 201
  - name: Create Order (status 201)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 240
  - key: Content-Length
  - value: W/"f0-aR82Jorfk5v42F324Dsz93CBOqQ"
  - key: Etag
  - value: Tue, 11 Aug 2020 06:41:22 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 167ddf74-ffac-41b0-a5e0-3185193f552a
- #### Originalrequest
- ##### Body
  - raw: {
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: {{base_URL}}/api/orders/create-order
- ###### Host
  - 0: {{base_URL}}
- ###### Path
  - 0: api
  - 1: orders
  - 2: create-order
  - method: POST
  - status: Internal Server Error
  - body: {
    "errorMessage": {
    "name": "error",
    "length": 276,
    "severity": "ERROR",
    "code": "23502",
    "detail": "Failing row contains (3, f, f, t, 3, 2, 3, 300, null, 300, 2020-08-11 06:41:51.834075+00, 2020-08-11 06:41:51.834075+00).",
    "schema": "public",
    "table": "orders",
    "column": "bch_amount",
    "file": "execMain.c",
    "line": "1965",
    "routine": "ExecConstraints"
    }
    }
  - code: 500
  - name: Create Order (status 500)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 332
  - key: Content-Length
  - value: W/"14c-UW4Wjy6/1Q7e8AltvnXwv4riOcg"
  - key: Etag
  - value: Tue, 11 Aug 2020 06:41:51 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 51cf6768-3822-486e-8f20-c6f1fefa124c
- #### Originalrequest
- ##### Body
  - raw: {
    "order": {
            "fiat_amount": "300",
            "is_maker_buying": true,
            "maker_id": {{userId}},
            "offer_id": {{offerIdSecond}},
            "price_bch": "300",
            "taker_id": 2
        },
        "initial_message": "Hello There!"
    }
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: {{base_URL}}/api/orders/create-order
- ###### Host
  - 0: {{base_URL}}
- ###### Path
  - 0: api
  - 1: orders
  - 2: create-order
  - method: POST
- ### Protocolprofilebehavior
  - disableBodyPruning: True
- ### Request
- #### Url
  - raw: {{base_URL}}/api/orders/{{userId}}
- ##### Host
  - 0: {{base_URL}}
- ##### Path
  - 0: api
  - 1: orders
  - 2: {{userId}}
- #### Header
  - method: GET
- #### Auth
  - type: bearer
- ##### Bearer
  - type: string
  - value: {{my_token}}
  - key: token
  - name: Get My Orders
  - \_postman_id: 16049e35-1e7d-490e-99b5-ea6b5a85856e
- ### Response
  - status: OK
  - body: [
    {
    "id": 2,
    "complete": false,
    "cancelled": false,
    "is_maker_buying": true,
    "maker_id": 3,
    "taker_id": 2,
    "offer_id": 3,
    "price_bch": "300",
    "bch_amount": "1",
    "fiat_amount": "300",
    "created_at": "2020-08-11T06:41:22.114Z",
    "updated_at": "2020-08-11T06:41:22.114Z",
    "usermaker": "demoUser",
    "usertaker": "info"
    }
    ]
  - code: 200
  - name: Get My Orders (status 200)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 284
  - key: Content-Length
  - value: W/"11c-4KP/gijYRSDnUtYVTZgttWxG6qE"
  - key: Etag
  - value: Tue, 11 Aug 2020 16:33:19 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 72b0b0aa-9b99-437f-a9f6-9f466200a71c
- #### Originalrequest
- ##### Url
  - raw: {{base_URL}}/api/orders/{{userId}}
- ###### Host
  - 0: {{base_URL}}
- ###### Path
  - 0: api
  - 1: orders
  - 2: {{userId}}
- ##### Header
  - method: GET
- ### Protocolprofilebehavior
  - disableBodyPruning: True
- ### Request
- #### Url
  - raw: {{base_URL}}/api/orders/{{userId}}/{{orderId}}
- ##### Host
  - 0: {{base_URL}}
- ##### Path
  - 0: api
  - 1: orders
  - 2: {{userId}}
  - 3: {{orderId}}
- #### Header
  - method: GET
- #### Auth
  - type: bearer
- ##### Bearer
  - type: string
  - value: {{my_token}}
  - key: token
  - name: Get Current Order
  - \_postman_id: 5042a58d-ddf9-4118-99d7-23efcd079e9b
- ### Response
  - status: OK
  - body: [
    {
    "id": 2,
    "complete": false,
    "cancelled": false,
    "is_maker_buying": true,
    "maker_id": 3,
    "taker_id": 2,
    "offer_id": 3,
    "price_bch": "300",
    "bch_amount": "1",
    "fiat_amount": "300",
    "created_at": "2020-08-11T06:41:22.114Z",
    "updated_at": "2020-08-11T06:41:22.114Z",
    "usermaker": "demoUser",
    "usertaker": "info"
    }
    ]
  - code: 200
  - name: Get My Orders (status 200)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 284
  - key: Content-Length
  - value: W/"11c-4KP/gijYRSDnUtYVTZgttWxG6qE"
  - key: Etag
  - value: Tue, 11 Aug 2020 16:33:19 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: a1294a30-c1fc-4767-b0e0-bdd264951181
- #### Originalrequest
- ##### Url
  - raw: {{base_URL}}/api/orders/{{userId}}
- ###### Host
  - 0: {{base_URL}}
- ###### Path
  - 0: api
  - 1: orders
  - 2: {{userId}}
- ##### Header
  - method: GET
  - status: OK
  - body: [
    {
    "id": 2,
    "complete": false,
    "cancelled": false,
    "is_maker_buying": true,
    "maker_id": 3,
    "taker_id": 2,
    "offer_id": 3,
    "price_bch": "300",
    "bch_amount": "1",
    "fiat_amount": "300",
    "created_at": "2020-08-11T06:41:22.114Z",
    "updated_at": "2020-08-11T06:41:22.114Z",
    "usermaker": "demoUser",
    "usertaker": "info"
    }
    ]
  - code: 200
  - name: Get Current Order (status 200)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 284
  - key: Content-Length
  - value: W/"11c-4KP/gijYRSDnUtYVTZgttWxG6qE"
  - key: Etag
  - value: Tue, 11 Aug 2020 16:35:12 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 0b321f53-5f70-4a4c-8487-6da380a44d2c
- #### Originalrequest
- ##### Url
  - raw: {{base_URL}}/api/orders/{{userId}}/{{orderId}}
- ###### Host
  - 0: {{base_URL}}
- ###### Path
  - 0: api
  - 1: orders
  - 2: {{userId}}
  - 3: {{orderId}}
- ##### Header
  - method: GET
- ### Protocolprofilebehavior
  - disableBodyPruning: True
- ### Request
- #### Body
  - raw: {
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
  - mode: raw
- ##### Options
- ###### Raw
  - language: json
  - description: **UPDATE ORDER / UPDATE**

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

- #### Url
  - raw: {{base_URL}}/api/orders/{{orderId}}
- ##### Host
  - 0: {{base_URL}}
- ##### Path
  - 0: api
  - 1: orders
  - 2: {{orderId}}
- #### Auth
  - type: bearer
- ##### Bearer
  - type: string
  - value: {{my_token}}
  - key: token
- #### Header
  - method: PUT
  - name: Update Order
  - \_postman_id: 709bd8ca-f193-4b4e-89ab-b073ceed73cf
- ### Response
  - status: Internal Server Error
  - body: {
    "errorMessage": {
    "name": "error",
    "length": 276,
    "severity": "ERROR",
    "code": "23502",
    "detail": "Failing row contains (3, f, f, t, 3, 2, 3, 300, null, 300, 2020-08-11 06:41:51.834075+00, 2020-08-11 06:41:51.834075+00).",
    "schema": "public",
    "table": "orders",
    "column": "bch_amount",
    "file": "execMain.c",
    "line": "1965",
    "routine": "ExecConstraints"
    }
    }
  - code: 500
  - name: Create Order (status 500)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 332
  - key: Content-Length
  - value: W/"14c-UW4Wjy6/1Q7e8AltvnXwv4riOcg"
  - key: Etag
  - value: Tue, 11 Aug 2020 06:41:51 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 0c26a069-e51f-4eed-9966-14068f27ee13
- #### Originalrequest
- ##### Body
  - raw: {
    "order": {
            "fiat_amount": "300",
            "is_maker_buying": true,
            "maker_id": {{userId}},
            "offer_id": {{offerIdSecond}},
            "price_bch": "300",
            "taker_id": 2
        },
        "initial_message": "Hello There!"
    }
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: {{base_URL}}/api/orders/create-order
- ###### Host
  - 0: {{base_URL}}
- ###### Path
  - 0: api
  - 1: orders
  - 2: create-order
  - method: POST
  - status: Created
  - body: {
    "id": 2,
    "complete": false,
    "cancelled": false,
    "is_maker_buying": true,
    "maker_id": 3,
    "taker_id": 2,
    "offer_id": 3,
    "price_bch": "300",
    "bch_amount": "1",
    "fiat_amount": "300",
    "created_at": "2020-08-11T06:41:22.114Z",
    "updated_at": "2020-08-11T06:41:22.114Z"
    }
  - code: 201
  - name: Create Order (status 201)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 240
  - key: Content-Length
  - value: W/"f0-aR82Jorfk5v42F324Dsz93CBOqQ"
  - key: Etag
  - value: Tue, 11 Aug 2020 06:41:22 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: c3d34ba6-f573-445b-aed4-326b8990be77
- #### Originalrequest
- ##### Body
  - raw: {
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: {{base_URL}}/api/orders/create-order
- ###### Host
  - 0: {{base_URL}}
- ###### Path
  - 0: api
  - 1: orders
  - 2: create-order
  - method: POST
  - status: Internal Server Error
  - body: {
    "errorMessage": {}
    }
  - code: 500
  - name: Update Order (status 500)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 19
  - key: Content-Length
  - value: W/"13-UWEQ23ZuC2y+7ihjmK8YcGkkF/w"
  - key: Etag
  - value: Tue, 11 Aug 2020 16:37:30 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 11a0e27d-5f18-48f3-a297-24c72b67560c
- #### Originalrequest
- ##### Body
  - raw: {
    "bch_amount": "1",
    "fiat_amount": "300",
    "is_maker_buying": true,
    "maker_id": {{userId}},
    "offer_id": {{offerIdSecond}},
    "price_bch": "300",
    "taker_id": 2,
    "complete": true

}

- mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: {{base_URL}}/api/orders/{{orderId}}
- ###### Host
  - 0: {{base_URL}}
- ###### Path
  - 0: api
  - 1: orders
  - 2: {{orderId}}
  - method: PUT
  - status: Created
  - body: {
    "id": 2,
    "complete": true,
    "cancelled": false,
    "is_maker_buying": true,
    "maker_id": 3,
    "taker_id": 2,
    "offer_id": 3,
    "price_bch": "300",
    "bch_amount": "1",
    "fiat_amount": "300",
    "created_at": "2020-08-11T06:41:22.114Z",
    "updated_at": "2020-08-11T06:41:22.114Z"
    }
  - code: 201
  - name: Update Order (status 201)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 239
  - key: Content-Length
  - value: W/"ef-rmD4ao2qon2LkdHIgVAsJfKqeto"
  - key: Etag
  - value: Tue, 11 Aug 2020 16:44:21 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 91a9154f-3318-42ac-bc4d-90ee290c1525
- #### Originalrequest
- ##### Body
  - raw: {
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
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: {{base_URL}}/api/orders/{{orderId}}
- ###### Host
  - 0: {{base_URL}}
- ###### Path
  - 0: api
  - 1: orders
  - 2: {{orderId}}
  - method: PUT
- name: Orders
- \_postman_id: f643dcb3-45c9-464b-8fbe-4aff9b09088d
- | description: | **Table** | **Method**                   | **Endpoint**                                                                                            | **Description** |
  | ------------ | --------- | ---------------------------- | ------------------------------------------------------------------------------------------------------- | --------------- |
  | orders       | POST      | /api/orders/create-order     | Creates a new order using the information sent inside the body of the request and returns the new offer |
  | orders       | GET       | /api/orders/:userId          | Returns all orders for a single user based on the userId passed in the request query.                   |
  | orders       | GET       | /api/orders/:userId/:orderId | Returns a single order based on userId and orderId passed in the request query param.                   |
  | orders       | PUT       | /api/orders/:orderId         | Updates the existing order based on the fields sent inside the body and returns the updated offer       |

# ORDERS ROUTES

- ## Item
- ### Protocolprofilebehavior
  - disableBodyPruning: True
- ### Request
- #### Body
  - raw: {
    "author_id": {{userId}},
    "order_id": {{orderId}},
    "text": "another message created again"
    }
  - mode: raw
- ##### Options
- ###### Raw
  - language: json
- #### Header
- #### Url
  - raw: {{base_URL}}/api/chat/{{userId}}
- ##### Host
  - 0: {{base_URL}}
- ##### Path
  - 0: api
  - 1: chat
  - 2: {{userId}}
  - method: POST
- #### Auth
  - type: bearer
- ##### Bearer
  - type: string
  - value: {{my_token}}
  - key: token
  - name: Create Message
  - \_postman_id: ba960c3e-6795-4a6d-8394-fd3c9ca4978f
- ### Response
  - status: Created
  - body: {
    "message": "Successfully created new message"
    }
  - code: 201
  - name: Create Message (status 201)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 46
  - key: Content-Length
  - value: W/"2e-YQ/j63f3qh15j770hwVkqNTuUCU"
  - key: Etag
  - value: Tue, 11 Aug 2020 23:40:33 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: e58191f1-b6a7-4cb4-94e6-8f3d92ef4b5c
- #### Originalrequest
- ##### Body
  - raw: {
    "author_id": {{userId}},
    "order_id": {{orderId}},
    "text": "another message created again"
    }
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: {{base_URL}}/api/chat/{{userId}}
- ###### Host
  - 0: {{base_URL}}
- ###### Path
  - 0: api
  - 1: chat
  - 2: {{userId}}
  - method: POST
  - status: Created
  - body: {
    "message": "Successfully created new message"
    }
  - code: 201
  - name: Create Message (status 201)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 46
  - key: Content-Length
  - value: W/"2e-YQ/j63f3qh15j770hwVkqNTuUCU"
  - key: Etag
  - value: Wed, 12 Aug 2020 00:10:20 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 2ed650be-6364-415b-b081-438878994032
- #### Originalrequest
- ##### Body
  - raw: {
    "author_id": {{userId}},
    "order_id": {{orderId}},
    "text": "another message created again"
    }
  - mode: raw
- ###### Options
- ###### Raw
  - language: json
- ##### Header
- ##### Url
  - raw: {{base_URL}}/api/chat/{{orderId}}
- ###### Host
  - 0: {{base_URL}}
- ###### Path
  - 0: api
  - 1: chat
  - 2: {{orderId}}
  - method: POST
- ### Protocolprofilebehavior
  - disableBodyPruning: True
- ### Request
- #### Url
  - raw: {{base_URL}}/api/chat/{{orderId}}
- ##### Host
  - 0: {{base_URL}}
- ##### Path
  - 0: api
  - 1: chat
  - 2: {{orderId}}
- #### Header
  - method: GET
- #### Auth
  - type: bearer
- ##### Bearer
  - type: string
  - value: {{my_token}}
  - key: token
  - name: Get All Messages
  - \_postman_id: 44e19d36-9bb1-46e9-82cd-bd01a9034008
- ### Response
  - status: OK
  - body: [
    {
    "id": 6,
    "order_id": 2,
    "text": "Hello There!",
    "author_id": 2,
    "created_at": "2020-08-11T06:41:22.121Z",
    "updated_at": "2020-08-11T06:41:22.121Z",
    "username": "info"
    },
    {
    "id": 7,
    "order_id": 2,
    "text": "another message created",
    "author_id": 3,
    "created_at": "2020-08-11T16:53:18.690Z",
    "updated_at": "2020-08-11T16:53:18.690Z",
    "username": "demoUser"
    },
    {
    "id": 8,
    "order_id": 2,
    "text": "another message created",
    "author_id": 3,
    "created_at": "2020-08-11T16:53:58.037Z",
    "updated_at": "2020-08-11T16:53:58.037Z",
    "username": "demoUser"
    },
    {
    "id": 9,
    "order_id": 2,
    "text": "another message created",
    "author_id": 3,
    "created_at": "2020-08-11T22:31:08.445Z",
    "updated_at": "2020-08-11T22:31:08.445Z",
    "username": "demoUser"
    },
    {
    "id": 10,
    "order_id": 2,
    "text": "another message created",
    "author_id": 3,
    "created_at": "2020-08-11T22:32:52.312Z",
    "updated_at": "2020-08-11T22:32:52.312Z",
    "username": "demoUser"
    },
    {
    "id": 11,
    "order_id": 2,
    "text": "another message created",
    "author_id": 3,
    "created_at": "2020-08-11T22:41:18.490Z",
    "updated_at": "2020-08-11T22:41:18.490Z",
    "username": "demoUser"
    },
    {
    "id": 12,
    "order_id": 2,
    "text": "another message created",
    "author_id": 3,
    "created_at": "2020-08-11T22:42:31.360Z",
    "updated_at": "2020-08-11T22:42:31.360Z",
    "username": "demoUser"
    },
    {
    "id": 17,
    "order_id": 2,
    "text": "another message created",
    "author_id": 3,
    "created_at": "2020-08-11T22:50:05.148Z",
    "updated_at": "2020-08-11T22:50:05.148Z",
    "username": "demoUser"
    },
    {
    "id": 18,
    "order_id": 2,
    "text": "another message created",
    "author_id": 3,
    "created_at": "2020-08-11T23:03:23.249Z",
    "updated_at": "2020-08-11T23:03:23.249Z",
    "username": "demoUser"
    },
    {
    "id": 21,
    "order_id": 2,
    "text": "another message created again",
    "author_id": 3,
    "created_at": "2020-08-11T23:40:33.504Z",
    "updated_at": "2020-08-11T23:40:33.504Z",
    "username": "demoUser"
    },
    {
    "id": 22,
    "order_id": 2,
    "text": "another message created again",
    "author_id": 3,
    "created_at": "2020-08-12T00:09:36.068Z",
    "updated_at": "2020-08-12T00:09:36.068Z",
    "username": "demoUser"
    },
    {
    "id": 23,
    "order_id": 2,
    "text": "another message created again",
    "author_id": 3,
    "created_at": "2020-08-12T00:10:20.814Z",
    "updated_at": "2020-08-12T00:10:20.814Z",
    "username": "demoUser"
    }
    ]
  - code: 200
  - name: Get All Messages (status 200)
- #### Header
  - value: Cowboy
  - key: Server
  - value: keep-alive
  - key: Connection
  - value: off
  - key: X-Dns-Prefetch-Control
  - value: SAMEORIGIN
  - key: X-Frame-Options
  - value: max-age=15552000; includeSubDomains
  - key: Strict-Transport-Security
  - value: noopen
  - key: X-Download-Options
  - value: nosniff
  - key: X-Content-Type-Options
  - value: 1; mode=block
  - key: X-Xss-Protection
  - value: \*
  - key: Access-Control-Allow-Origin
  - value: application/json; charset=utf-8
  - key: Content-Type
  - value: 2064
  - key: Content-Length
  - value: W/"810-YPyF2s9efOlou1EsrJX4U6wXmvI"
  - key: Etag
  - value: Wed, 12 Aug 2020 00:10:23 GMT
  - key: Date
  - value: 1.1 vegur
  - key: Via
  - \_postman_previewlanguage: json
  - responseTime: None
- #### Cookie
  - id: 19ddc228-d91a-4eac-b9e1-c96534726690
- #### Originalrequest
- ##### Url
  - raw: {{base_URL}}/api/chat/{{orderId}}
- ###### Host
  - 0: {{base_URL}}
- ###### Path
  - 0: api
  - 1: chat
  - 2: {{orderId}}
- ##### Header
  - method: GET
- name: Chat
- \_postman_id: ee14dd2a-1ef9-4416-ba09-1ebc7bd9cf6f
- | description: | **Table** | **Method**         | **Endpoint**                                                                                               | **Description** |
  | ------------ | --------- | ------------------ | ---------------------------------------------------------------------------------------------------------- | --------------- |
  | chat         | POST      | /api/chat/:orderId | Creates a new chat message using the information sent inside the body of the request and returns a message |
  | chat         | GET       | /api/chat/:orderId | Returns all chat messages for an order based on the orderId passed in the request query.                   |

# ORDERS ROUTES
