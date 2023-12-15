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

## 3.