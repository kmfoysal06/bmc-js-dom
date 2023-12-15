## welcome
### website status codes


there are 5 types of website status codeset that represent the status of a site.
types of status codeset:
1. Informational (100-199)
2. Successful (200-299)
3. Redirection (300-399)
4. Client Error (400-499)
5. Server Error (500-599)

## 1. Informational (100-199)
Informational status code basically represent website information:

### 100 Continue
this code represent that client should countinue the request or ignore if its finished
### 101 switching protocols
(...)
### 102 processing
this code represent that server received the request but no response available yet.
### 103 Early Hints
(...)

## 2. Successful (200-299)
basically represent that request is Successful.

### 200 ok
The Request Succeeded.
### 201 created
the request Succeeded, and a new resource was created as a result.this is typically the response sent after post request or sum put request.
### 202 accepted
the request accepted by server but not yet acted
### 203 Non-Authoritative Information
(...)
### 204 No content
There is No Content but Headers may be useful.
### 205 Reset Content
Tells the user agent to reset the document which sent this request.
### 206 Partial Content
(...)
### 207 Multi-Status
(...)
### 208 Already Reported
(...)
### 226 IM used
The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance

## 3. Redirection (300-399)

### 300 Multiple Choices
The request has more than one possible response. The user agent or user should choose one of them.
### 301 Moved Permanently
The URL of the requested resource has been changed permanently. The new URL is given in the response.
### 302 Found
This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests
### 303 See Other
The server sent this response to direct the client to get the requested resource at another URI with a GET request.
### 304 Not Modified
This is used for caching purpos.It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.
### 307 Temporary Redirect
(...)
### 308 Permanent Redirect
(...)

## 4. Client Error
Errors from client

### 400 Bad Request
the server can not or will not process the request due to some client error
### 401 Unauthorized
this response code means the client is unauthenticated.the client must authenticate itself to get the requested response.
### 402 Payment Required
This code is reserved for future use.the initial aim of this code is for digital payment systems.
### 403 Forbidden
The client does not have access rights to the content;that is, it is unauthorized.
### 404 Not Found
The server can not find the requested resource.in the browser it mean that url is invalid but in api it can also mean that the endpoint is valid but the resource itself does not exist.
### 405 method not allowed
The request method is known by the server but is not supported by the target resource.
### 406 Not Acceptable
(...)
### 407 Proxy authentication required.
This is similar to 401 `Unauthorized` but authentication is needed to be done by a proxy.
### 408 Request Timeout
This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection.
### 409 Conflict
This response is sent when a request conflict with the current state of the server.
### 410 Gone
This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource.
### 411 Length Required
Server rejected the request because the `Content-Lenght` header is not defined and the server required it.
### 412 Precondition Failed
The client has indicated some preconditions in its headers which the server does not meet.
### 413 Payload too large
Request entity is larger than limits defined by server. The server might close the connection or return an Retry-After header field.
### 414 URI too long
The URI requested by the client is longer than the server is willing to interpret.
### 415 unsupported media type
The media format requested data is not supported by the server.so the server is rejecting the request.
### 416 Range Not Satisfiable
The range specified by the Range header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target URI's data.

### 417 Expectation Failed
This response code means the expectation indicated by the Expect request header field cannot be met by the server.

### 418 I'm a teapot
The server refuses the attempt to brew coffee with a teapot.

### 421 Misdirected Request
The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.

### 422 Unprocessable Content (WebDAV)
The request was well-formed but was unable to be followed due to semantic errors.

### 423 Locked (WebDAV)
The resource that is being accessed is locked.

### 424 Failed Dependency (WebDAV)
The request failed due to failure of a previous request.

### 425 Too Early Experimental
Indicates that the server is unwilling to risk processing a request that might be replayed.

### 426 Upgrade Required
The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s).

### 428 Precondition Required
The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.

### 429 Too Many Requests
The user has sent too many requests in a given amount of time ("rate limiting").

### 431 Request Header Fields Too Large
The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.

### 451 Unavailable For Legal Reasons
The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.

## 4. Server Error 
basilcally Errors from server


### 500 Internal Server Error
The server has encountered a situation it does not know how to handle.

### 501 Not Implemented
The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.

### 502 Bad Gateway
This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.

### 503 Service Unavailable
The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.

### 504 Gateway Timeout
This error response is given when the server is acting as a gateway and cannot get a response in time.

### 505 HTTP Version Not Supported
The HTTP version used in the request is not supported by the server.

### 506 Variant Also Negotiates
The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.

### 507 Insufficient Storage (WebDAV)
The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.

### 508 Loop Detected (WebDAV)
The server detected an infinite loop while processing the request.

### 510 Not Extended
Further extensions to the request are required for the server to fulfill it.

### 511 Network Authentication Required
Indicates that the client needs to authenticate to gain network access.