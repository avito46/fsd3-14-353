#http module

HTTP->Hyper Text Transfer Protocol

html->hyper text markup language

css->cascading style sheet

npm->node package management

STATUS               CODES             
200                   OK
201                   CREATED
400                   BAD REQUEST
401                   UNAUTHORIZED
403                   FORBIDDEN
404                   NOT FOUND  

#API->
Any API can be of 4 types->
1) Git ->Read
2)Post->Create
3)Put/Patch-?update
4)Delete->delete
API can be responsed by thr server with status code and JSON data.
API generally starts with   API/version 
for eg-> /api/vi/products    ->/api/vi/producs/2160
By default browser can check only get request , to check other 3 request types write post,put/patch and delete we require front-end or 3rd party API tester like postman,thunder-client,echo-API     

Not exactly. **`Content-Type` is not a function**, and it doesn't ask the user to store anything.

A better definition is:

> ## Content-Type

`Content-Type` is an HTTP response header that tells the browser what type or format of data is being sent by the server.

It is **not a function** and it does not ask the user to store a file.

### Example

```js
res.setHeader("Content-Type", "text/html")