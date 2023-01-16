## SQL Injection Research
# What is the impact of a successful SQL injection attack?

SQLi or SQL Injection has been a regular customer in the owasp top 10.
The attack are a type of injection attacks, in which SQL commands are injected into data-plane 
input in order to effect the execution of predefined SQL commands.

## What is SQL injection?
#### Library strategy of Dot-Framework
SQL injection, also known as SQLi, is a type of web security vulnerability that enables an attacker to interfere with the queries an application makes to its database. 
This type of attack generally allows malicious users to view data that they would not normally be able to access. 
This data can include information belonging to other users, or any other data that the application 
itself is able to access. In some cases, an attacker can even modify or delete the data, resulting in persistent changes to the application’s content or behavior.

In more extreme cases, an attacker can even escalate an SQL injection attack to gain access to the underlying server or other back-end infrastructure or execute a denial-of-service attack. 
It is important for organizations to take steps to protect against the potential risks of SQL injection, such as employing effective input validation to identify malicious parameters used in the attack.

## What types of SQL injection are there?
#### Library and Lab strategy of Dot-Framework
SQL injection has a wide array of vulnerabilities, attacks, and techniques. 
These vulnerabilities can arise in many situations. 

Some of the most common examples of SQL injection include: 
1. retrieving hidden data by modifying an SQL query to return more results;
2. subverting application logic by changing a query to interfere with the application's logic; 
3. UNION attacks, which allow attackers to retrieve data from different database tables; 
4. Examining the database to obtain information about the version and structure of the database; 
5. blind SQL injection, where the results from a query that an attacker controls are not returned to the application's responses.

## How to detect SQL injection vulnerabilities?
The majority of SQL injection vulnerabilities can be quickly and dependably identified using the Burp Suite web vulnerability scanner. 
Additionally, SQL injection can be manually identified by employing a systematic set of tests against every entry point in the application.
This can include submitting the single quote character ' and looking for errors or other anomalies; 
submitting some SQL-specific syntax that evaluates to the base (original) value of the entry point, and to a different value, and looking for systematic differences in the resulting application responses; 
submitting Boolean conditions such as OR 1=1 and OR 1=2, and looking for differences in the application's responses; submitting payloads designed to trigger time delays when executed within an SQL query, and looking for differences in the time taken to respond; 
and submitting OAST payloads designed to trigger an out-of-band network interaction when executed within an SQL query, and monitoring for any resulting interactions. 
It is important to note that this process should be performed for each entry point in the application in order to identify any SQL injection vulnerabilities. 
Additionally, organizations should be aware of the potential risks associated with SQL injection and take steps to mitigate them, such as providing effective input validation to weed out any malicious parameters used in the attack.


## How to prevent SQL injection?
#### dot-framework strategey :