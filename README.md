<h1>backEndNode</h1>

> node tools module and packages

<table>
  <th>
    <td>Name</td>
    <td>Use case</td>
    <td>install</td>
  </th>
  <tbody>
    <tr>
      <td>#1</td>
      <td>nodemon</td>
      <td>make live server in command</td>
      <td>https://www.npmjs.com/package/nodemon</td>
    </tr>
    <tr>
      <td>#2</td>
      <td>inquirer</td>
      <td>A collection of common interactive command line user interfaces.</td>
      <td>https://www.npmjs.com/package/inquirer</td>
    </tr>
    <tr>
      <td>#3</td>
      <td>commander</td>
      <td>The complete solution for node.js command-line interfaces.</td>
      <td>https://www.npmjs.com/package/commander</td>
    </tr>
    <tr>
      <td>#4</td>
      <td>thread pool</td>
      <td> used to run all file system operations</td>
      <td>https://docs.libuv.org/en/v1.x/threadpool.html</td>
    </tr>
        <tr>
      <td>#5</td>
      <td>exposrt and Import</td>
      <td>can use any function from file to defrent file</td>
    </tr>
    <tr>
      <td>#6</td>
      <td>fs module</td>
      <td>work on files system and write, remove and viwe on documents</td>
    </tr>
    <tr>
      <td>#7</td>
      <td>express-validator</td>
      <td>handle vlidation for all data</td>
      <td>https://express-validator.github.io/docs/</td>
    </tr>
    <tr>
      <td>#8</td>
      <td>dotenv</td>
      <td>Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.</td>
      <td>https://www.npmjs.com/package/dotenv</td>
    </tr>
    <tr>
      <td>#9</td>
      <td>cors error</td>
      <td>CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.</td>
      <td>https://www.npmjs.com/package/cors</td>
    </tr>
    <tr>
      <td>#10</td>
      <td>cors error</td>
      <td>CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.</td>
      <td>https://www.npmjs.com/package/cors</td>
    </tr>
    <tr>
      <td>#11</td>
      <td>axios-mock-adapter</td>
      <td>Axios adapter that allows to easily mock requests</td>
      <td>https://www.npmjs.com/package/axios-mock-adapter</td>
    </tr>
    <tr>
      <td>#12</td>
      <td>bcryptjs</td>
      <td>make password hashing in mongoDB Express</td>
      <td>https://www.npmjs.com/package/bcryptjs</td>
    </tr>
  </tbody>
</table>
<hr>
<br>
<br>


> node frame works

<table>
  <th>
    <td>Name</td>
    <td>install</td>
  </th>
  <tbody>
    <tr>
      <td>#1</td>
      <td>express</td>
      <td>https://expressjs.com</td>
    </tr>
    <tr>
      <td>#2</td>
      <td>Koa</td>
      <td>https://koajs.com</td>
    </tr>
    <tr>
      <td>#3</td>
      <td>nest</td>
      <td>https://nestjs.com</td>
    </tr>
    <tr>
      <td>#4</td>
      <td>Hapi</td>
      <td>https://hapi.dev</td>
    </tr>
    <tr>
      <td>#5</td>
      <td>Meteor</td>
      <td>https://www.meteor.com</td>
    </tr>
    <tr>
      <td>#5</td>
      <td>https://sailsjs.com</td>
    </tr>
  </tbody>
</table>
<hr>
<br>
<br>


###

> libuv Design
> ![architecture](https://github.com/ASH-Education/nodeJs_lessons/assets/124946844/4b8b6661-fd3f-4c8e-8ed0-3ace7b000a7b)

<h1>It is divided into two parts</h1>

<h3>First Division is network i/o >> hanel in os kernal</h3>

> "About http request"

- epoll on Linux
- kqueue on OSX and other BSDs
- event ports on SunOS
- IOCP on Windows

  > kernel

<table>
  <th>
    <td>vedio</td>
    <td>link</td>
  </th>
  <tbody>
    <tr>
      <td>#1</td>
      <td>operating system kernel</td>
      <td>https://youtu.be/Ujd3zy2M2M4?si=0S5tyr8CdABL4Z9_</td>
    </tr>
  </tbody>
</table>
<hr>
<br>
<br>
<br>

  > status code
###
more information the status code in "mdn"
###
> https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#browser_compatibility

<table>
  <th>
    <td>code</td>
    <td>information</td>
    <td>more</td>
  </th>
  <tbody>
    <tr>
      <td>#1</td>
      <td>100 - 199</td>
      <td>Informational responses</td>
      <td>https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses</td>
    </tr>
    <tr>
      <td>#2</td>
      <td>200 - 299</td>
      <td>Successful responses</td>
      <td>https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses</td>
    </tr>
    <tr>
      <td>#3</td>
      <td>200</td>
      <td>status "ok" all requists and responses is done</td>
    </tr>
    <tr>
      <td>#4</td>
      <td>300 - 399</td>
      <td>Redirection messages</td>
      <td>https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages</td>
    </tr>
    <tr>
      <td>#5</td>
      <td>400 - 499</td>
      <td>Client error responses</td>
      <td>https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses</td>
    </tr>
    <tr>
      <td>#6</td>
      <td>404</td>
      <td>error not fount page, link, route, assets, any thing</td>
    </tr>
    <tr>
      <td>#7</td>
      <td>401</td>
      <td>often denoted as UNAUTHORIZED</td>
    </tr>
    <tr>
      <td>#8</td>
      <td>422</td>
      <td>validation error in data</td>
    </tr>
    <tr>
      <td>#9</td>
      <td>500 - 599</td>
      <td>Server error responses</td>
      <td>https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses</td>
    </tr>
  </tbody>
</table>

<hr>
<br>
<br>
<br>

<h1>Express information</h1>

  >  site https://expressjs.com/

  > install https://expressjs.com/en/starter/installing.html

  > middleware https://expressjs.com/en/guide/writing-middleware.html

  > morgan medelware node.js npm => https://www.npmjs.com/package/morgan | github => https://github.com/expressjs/morgan

###

<h2 align="center">database</h2>

  > [mongoDB](https://www.mongodb.com/)

  > [to use data base deffrrent mongo](https://sequelize.org/)
<br>
<h1>back end information and main data</h1> 

[what is password hashing](https://medium.com/@arunchaitanya/salting-and-hashing-passwords-with-bcrypt-js-a-comprehensive-guide-f5e31de3c40c)

