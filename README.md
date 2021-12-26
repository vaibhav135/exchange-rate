# exchange-rates
Check the latest or historical exhange-rate data against US dollars and see the data in a visualized form.

### Content
- [About](#About)
- [Project installation](#Installing-project-in-local-machine)
- [Project Structure](#Project-Structure)
- [Architecture](#Architecture)


### About
The project is created to check the latest and historical exchange-rate with US dollar as the base currency. The project uses openexchangerates api free tier. For the frontend part the project is created with react.js, typescirpt, react-chart2js, axios and for the backend part the project uses Express.js, javascipt, axios.

> To know more api openexchangerates visit [here](https://openexchangerates.org/)

### Installing project in local machine
 - First, clone the git repo from [here](https://github.com/vaibhav135/exchange-rate)
 - Before installing the project we need to provide .env files to both frontend and backend.
 - example of .env for frontend
 `REACT_APP_BACKEND_URL=BACKEND_URL_HERE`
> note:- your backend url could look something like this
> http://localhost:5000

- example of .env for backend
   ```
   PORT=YOUR_BACKEND_PORT_NO
   APP_ID_FOR_API=YOUR_EXCHANGE_RATES_APP_ID
   BASE_URL_API=https://openexchangerates.org
   ```

- **To run and install the fronend of the project**
	- go the frontend folder and run `npm install` or `yarn install` in your terminal.
	-  To run frontend execute `npm start` in the root of frontend folder.
-  **To install the backend of the project**
	-	go to the backend folder and excute the same installation command as above.
	-	To run backend execute  `npm run server` in the root of backend folder.

### Project Structure
The project uses a simple modular folder strucuture for both frontend and backend which gets inspired from SOLID and DRY principles. The structure differentiates each module and their behavaiour and prevents the files from getting clunky and dense. This make the components more sophisticated and easy to read.

   > To read about SOLID Principle visit [here](https://en.wikipedia.org/wiki/SOLID)
	> and for DRY principles visit [here](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)



## Architecture
The project uses **Three tier architecture**.
The chief benefit of three-tier architecture is that because each tier runs on its own infrastructure, each tier can be developed simultaneously by a separate development team, and can be updated or scaled as needed without impacting the other tiers.
To read more about three tier architecture visit [here](https://www.ibm.com/in-en/cloud/learn/three-tier-architecture) .
