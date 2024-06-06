# Understanding URLs

URLs (Uniform Resource Locators) consist of various components that define the location and access method of a resource on the internet. These components play a crucial role in web development and understanding how information is accessed and manipulated over the web.

## Components of a URL

### Scheme

The scheme indicates the protocol used to access the resource. Common schemes include `http`, `https`, `ftp`, and `mailto`.

### Authority

The authority specifies the location of the resource, typically consisting of the domain name (or IP address) and an optional port number.

### Path

The path represents the hierarchical structure of the resource on the server. It starts with a slash (`/`) and can include multiple segments separated by slashes.

### Query Parameters

Query parameters contain key-value pairs that provide additional data to the server. They are separated from the path by a question mark (`?`) and from each other by an ampersand (`&`).

### Fragment Identifier

The fragment identifier specifies a specific portion of the resource, typically an anchor within an HTML document. It is preceded by a hash symbol (`#`).

## Example

Let's consider an example URL:

URL: https://www.example.com:8080/path/to/resource?key1=value1&key2=value2#section2

- **Scheme**: `https`
- **Authority**: `www.example.com:8080`
- **Path**: `/path/to/resource`
- **Query Parameters**: `key1=value1&key2=value2`
- **Fragment Identifier**: `section2`

Understanding these components is essential for navigating and interacting with resources on the web effectively.
