# Lecture W2D1 - HTTP and APIs

Learn JS > Web

## History of the Internet

Before the Commercial Internet:

- Connect to a host computer with a modem over the phone line
- Providers: AOL, Compuserv

![AOL](https://i.kym-cdn.com/photos/images/original/000/529/129/f62.jpg)

- Chat rooms & message boards
- Download files (over the phone)

- BBS - Bulletin Board Systems
  - Message boards
  - How we got games among other things!

Before the Web:

- ftp: file transfer protocol

- connect to anonymous ftp (public ftp sites) to access remote files

* Protocols:

  - NNTP - Usenet Newsgroups - read post with a newsreader client
  - smtp - mail
  - ftp - file transfer protocol

  `lftp -u anonymous ftp.gnu.org`

  - http protocol mid 90s

- The first web page went live on August 6, 1991.
- It was dedicated to information on the World Wide Web project
- Tim Berners-Lee was working on the project called "The World Wide Web" for CERN, the European Organization for Nuclear Research, CERN.

[http://info.cern.ch/hypertext/WWW/TheProject.html](http://info.cern.ch/hypertext/WWW/TheProject.html)

- [First browser wrote by Tim Berners-Lee](https://www.w3.org/History/1994/WWW/Journals/CACM/screensnap2_24c.gif)

- NCSA Mosaic is the browser that made the web popular!
  [NCSA Mosaic](http://www.ncsa.illinois.edu/enabling/mosaic)
  [NCSA Mosaic Screen Capture](https://media.wired.com/photos/59344b215321273fc0f91cd1/2:1/w_2500,c_limit/mos-10.jpg)

- Developed by Marc Andreessen, Jamie Zawinski
- Developed Netscape Navigator, optimized for 14.4 modems!
- Microsoft licensed Mosaic to create Internet Explorer in 1995

---

- Lead to a browser war between Internet Explorer and Netscape

> "Guys I'm litterally out of shape like Internet Explorer could probably run faster than me!"

[Internet Explorer Jokes](https://www.ranker.com/list/funny-internet-explorer-meme-jokes-for-tech-nerds/john-barryman?&source=pshare)

---

- In 1998, AOL bought Netscape discontinued support for the Netscape browser in 2008
- Firefox browser was developed by Mozilla an open source project initiated by Netscape

## Networking

- Clients
- Servers
- Protocols

### The Internet

- The Internet is a network of interconnected network and devices
- The Internet (ARPANet) was created in the 60s by the US department of defense to keep communication going in case of a nuclear attack
- Universities were among the first institutions to hook up to the Internet (The Internet was not open to commercial institutions at the time)
- Tim Berners Lee created the http protocol in 1989
- The Internet was eventually made accessible to businesses in the 90s

![Internet Networking Diagram](./internet-network.png)

- The Internet relies on 2 protocols:

  1. TCP
  2. IP

#### TCP

- Transmisson Control Protocol
- Messages are broken down into packets and travel over the network to be reassemble

![TCP](./tcp.png)

- Messages are broken down into packets
- Messages contained source and destination address in their header
- Each packet travels through the network independantly
- Packets are reassemble into a full message when reaching destination

#### IP

- Internet Protocol
- Address that identifies a computer on the network
- Format xxx.xxx.xxx.xxx

`ping lighthouselabs.com`

#### Protocols on Top of TCP/IP

Languages that computers program use to communicate with one another (usually over a network)

| Protocol    | Description                                   |
| :---------- | :-------------------------------------------- |
| http        | Browse Web pages                              |
| https       | Browse Web page with encrypted communication  |
| smtp        | Send and receive emails                       |
| imap, pop 3 | Load emails from an inbox                     |
| irc         | Text based chat                               |
| ftp         | File transfers                                |
| ssh         | Secure socket shell with encrypted connection |
| ssl         | low-level secure data transfer used by https  |

- each of these protocols use a default port

| Protocol   | Default port |
| :--------- | :----------- |
| http       | 80           |
| https      | 443          |
| ssh        | 22           |
| postgreslq | 5432         |
| mongodb    | 27017        |

### Client Server Communication

- A client initiates a connection to a server
- Client asks for a resource
- Server sends back a response with the corresponding resource

![Client-Server Communication](./client-server.png)

#### Other Type of Communication

- Peer-to-peer: clients establish connections directly to other connections with no central server
- bittorrent

## The Web

- What's happening when I type an address in a browser

### URL

- Uniform Resource Locator
- Anatomy of an URL

![URL](./url.png)

### http Protocol

- hypertext transfer protocol
- how a web browser (client) communications with a web server (server)
- The client initiates a request and the server sends back a response

![Client-Server Web](./client-server-web.png)

[List of http status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

#### http verbs

- http requests begin with a verb

(CRUD)

Create
Read
Update
Delete

1. **`Get`** - get a resource (Read)
2. **`Post`** - send a resource (Create)
3. **`Put`** - Update a resource (Update)
4. **`Delete`** - delete a resource (Delete)

- http requests and response both have a _header_ and a _body_

#### http Headers

- Headers use key value pairs

`key: value`

##### Request Headers

```
GET /www.google.com/search?q=bootcamp HTTP/1.1
Host: www.google.com
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Keep-Alive: 300
Connection: keep-alive
Cookie: USERID=r2t5uvjq435r4q7ib3vtdjq120
Pragma: no-cache
Cache-Control: no-cache
Cookies: key:value string
user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
```

##### Post Request - Headers + Body

```
PUT /www.lighthouselabs.com/register HTTP/1.1
Host: www.google.com
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Keep-Alive: 300
Connection: keep-alive
Cookie: USERID=r2t5uvjq435r4q7ib3vtdjq120
Pragma: no-cache
Cache-Control: no-cache
Cookies: key:value string
user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
Content-Type: application/json

{
  "first_name": "Bob",
  "last_name": "Squarepants",
  "email": "spongebob@squarepant.com",
}
```

##### Response

```
cf-ray: 498512599e9bab66-YYZ
content-encoding: br
content-type: text/html
date: Sun, 13 Jan 2019 04:20:40 GMT
expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
last-modified: Thu, 10 Jan 2019 21:35:48 GMT
server: cloudflare
status: 200

<!DOCTYPE html>
<html>
  <head>
    <title>Canada&#39;s Leading Coding Bootcamp - Lighthouse Labs</title>
    <style>
  @font-face{
  	font-family: 'proxima-nova';
  	font-weight: normal;
  	font-style: normal;
...
```

##### Curl

- Curl to get HTML page

`curl https://www.lighthouselabs.ca`

- To get only the request headers:

`curl -I https://www.lighthouselabs.ca`

```
HTTP/1.1 200 OK
Date: Sun, 13 Jan 2019 17:18:50 GMT
Content-Type: text/html
Connection: keep-alive
Set-Cookie: __cfduid=d0133a361d013d048eba721fe79b64df51547399930; expires=Mon, 13-Jan-20 17:18:50 GMT; path=/; domain=.lighthouselabs.ca; HttpOnly
Last-Modified: Thu, 10 Jan 2019 21:35:48 GMT
Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
Server: cloudflare
CF-RAY: 4989863fde7fab90-YYZ
```

##### Querying the openweather API

`curl 'https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=yourAPIKey'`

- Postman can also be used to do requests

##### Get the Results in a JavaScript File

- We're going to use the request package
