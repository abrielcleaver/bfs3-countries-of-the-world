# Countries of the World (BFS3)
- Due Dec 8, 2021
- Example of the final product -> https://alchemy-react-countries.netlify.app/

## Learning Objectives
- Use useEffect hook with a dependency array to retrieve data when a component first mounts
- Use the Supabase Javascript client to retrieve data from a database
- Use useState to manage component state
- Use the network tab to examine (and debug) the request being sent to a server and the response received from a server
- Use the async/await pattern to make our asynchronous code easier to read

## Description
There is a database provided to you that contains all the countries in the world. Your goal is to query that data using the Supabase Javascript client and then the useEffect hook to display the data. You should also use the flagpedia API to load each country’s flag. The API uses the 2 character ISO code to identify countries which is saved in the iso2 column of the database. Finally, your app should allow users to filter by continent, and search by name.

## Acceptance Criteria
    [ ] Must use the Supabase client to get the list of countries
    [ ] Must use the useEffect hook to call the service layer to get the list of countries
    [ ] Users should see a list of all the countries of the world with their flag
    [ ] Users should be able to filter by continent, and search by name for the countries

## Rubric
    [ ] Supabase client correctly retrieves the list of countries	4
    [ ] useEffect correctly loads the list of countries when the component renders	4
    [ ] Users can filter by continent	4
    [ ] Users can search by name	4
    [ ] Deployed on Netlify	4

### Stretch (up to 3 points)
    [ ] Allow users to sort by name (+2) 
    [ ] Show the users a loading state when the data is loading (+1)

### Supabase Credentials
- REACT_APP_SUPABASE_URL=https://ibfimxopxwngijoyxknw.supabase.co
- REACT_APP_SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjY4NDQ3MSwiZXhwIjoxOTUyMjYwNDcxfQ.ewbC-sV1ELppz_IP21q0P7QEX_VoDqbi_ZZ1__Uphvs