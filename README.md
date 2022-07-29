# wroggi-employee-tracker

## Description
Purpose:
The purpose of this project is to create and maintain an employee database using command line prompts and MySQL to update and store data for departments, roles and their associated departments and salaries, and employees (and all information related to each). By using inquirer to prompt for any information, MySQL to store that data in the relevant tables, and console table to view those tables, we can easily keep tack of company and employee information in one place. This also allows us to easily update that information should anything change (add new employees, drop past ones, update salary or job information, etc) to keep our information up to date. By making our means of storing, changing, and viewing information on our business and employees more efficient, we are able to free up some time to spend on other important tasks. This is particularly relevant given the overwhelming amount of work involved in running any business. 

This project uses JavaScript and SQL to create and manage data, adds inquirer to loop questions and allow command line navigation, and console table to more easily view our tables. MySQL is used to create our tables, update them, and maintain their information. Queries are used with literals to update and create new information or simply to select which table should be displayed. Hence, to select our table, we use 
```
db.query("SELECT * FROM department;", function(err, results) {
```
To use SQL language to select all columns of our department table, and inside our function
```
console.table(results) });
```
To show our department table in the command line.

## Credits
Credit of course to my housemate Lyra for helping me fix some original looping and closing issues, and clearing up what was expected and some possible structure for achieving that. Credit to Max (mdunn with AskBCS) as well for helping me figure out I was using db.query incorrectly to insert values.

## License
This project falls under the MIT license.

## Author
Damien Armstrong can be found on: <a href="https://www.linkedin.com/in/damien-armstrong-412319138/">Linkedin</a>, <a href="https://github.com/pirosvs">Github</a>