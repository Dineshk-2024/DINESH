CREATE TABLE employee(
eid int,
ename VARCHAR(32),
esal float
);


 desc employee;

show tables;

SELECT * FROM employee;


INSERT INTO employee VALUES
(101,'Rahul',45000.00);
===================================
cmd>mysql -uroot -proot
mysql>system cls;
>show databases;

how TO DROP database?
DROP DATABASE 9am;

mysql> CREATE DATABASE 9am;
Query OK, 1 row affected (0.02 sec)

mysql> use 9am;
Database changed
mysql>

mysql> show tables;

CREATE TABLE employee(
eid int,
ename VARCHAR(32),
esal float,
age int
);


mysql> CREATE TABLE employee(
    -> eid int,
    -> ename VARCHAR(32),
    -> esal float,
    -> age int
    -> );
Query OK, 0 rows affected (0.05 sec)

mysql> desc employee;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| eid   | int         | YES  |     | NULL    |       |
| ename | varchar(32) | YES  |     | NULL    |       |
| esal  | float       | YES  |     | NULL    |       |
| age   | int         | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+

INSERT INTO employee VALUES
(101,'Rahul',45000.00,52);

INSERT INTO employee VALUES
(102,'Sonia',55000.00,80),
(103,'priyanka',65000.60,45),
(104,'modi',75000.00,80);

INSERT INTO employee(eid,ename) VALUES
(105,'Rajni'),
(106,'Vijay');

SELECT *FROM employee;

mysql> SELECT *FROM employee;
+------+----------+---------+------+
| eid  | ename    | esal    | age  |
+------+----------+---------+------+
|  101 | Rahul    |   45000 |   52 |
|  102 | Sonia    |   55000 |   80 |
|  103 | priyanka | 65000.6 |   45 |
|  104 | modi     |   75000 |   80 |
|  105 | Rajni    |    NULL | NULL |
|  106 | Vijay    |    NULL | NULL |
+------+----------+---------+------+
6 rows in set (0.00 sec)

mysql> select eid,ename,esal from employee;
+------+----------+---------+
| eid  | ename    | esal    |
+------+----------+---------+
|  101 | Rahul    |   45000 |
|  102 | Sonia    |   55000 |
|  103 | priyanka | 65000.6 |
|  104 | modi     |   75000 |
|  105 | Rajni    |    NULL |
|  106 | Vijay    |    NULL |
+------+----------+---------+
6 rows in set (0.00 sec)


SELECT eid AS Employee_Id, ename AS Name FROM employee;


SELECT eid AS 'Employee Id', ename AS Name FROM employee;

 SELECT eid AS Employee Id, ename AS Name FROM employee;


DELETE FROM employee;

drop table employee;

UPDATE employee
SET esal=75000.00;


mysql> UPDATE employee
    -> SET esal=75000.00;
Query OK, 5 rows affected (0.01 sec)
Rows matched: 6  Changed: 5  Warnings: 0

mysql> select *from employee;
+------+----------+-------+------+
| eid  | ename    | esal  | age  |
+------+----------+-------+------+
|  101 | Rahul    | 75000 |   52 |
|  102 | Sonia    | 75000 |   80 |
|  103 | priyanka | 75000 |   45 |
|  104 | modi     | 75000 |   80 |
|  105 | Rajni    | 75000 | NULL |
|  106 | Vijay    | 75000 | NULL |
+------+----------+-------+------+
6 rows in set (0.00 sec)


https://www.mockaroo.com/

CREATE TABLE USER(
id int, 
ename VARCHAR(32), 
email VARCHAR(32), 
gender VARCHAR(32), 
age int
);

mysql> select count(id) from user;
+-----------+
| count(id) |
+-----------+
|       556 |
+-----------+
1 row in set (0.00 sec)

DELETE FROM USER 
WHERE gender='Male';
=========================
class-3
-------------
mysql> show databases;
mysql> drop database 9am;
Query OK, 2 rows affected (0.06 sec)

CREATE DATABASE 9am;
USE 9am;

CREATE TABLE employee(
eid int,
ename VARCHAR(32),
eloc VARCHAR(32)
);


mysql> desc employee;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| eid   | int         | YES  |     | NULL    |       |
| ename | varchar(32) | YES  |     | NULL    |       |
| eloc  | varchar(32) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)

INSERT INTO employee value
(null,null,null);



mysql> select * from employee;
+------+-------+------+
| eid  | ename | eloc |
+------+-------+------+
| NULL | NULL  | NULL |
| NULL | NULL  | NULL |
| NULL | NULL  | NULL |
| NULL | NULL  | NULL |
| NULL | NULL  | NULL |
+------+-------+------+
5 rows in set (0.00 sec)

mysql> drop table employee;

CREATE TABLE employee(
eid INT UNIQUE,
ename VARCHAR(32) NOT NULL,
eloc VARCHAR(32)
);

UNIQUE - duplicate VALUES NOT allowed but NULL allowed one TIME.
NOT NULL - NULL VALUES NOT allowed, but duplicates are allowed.

INSERT INTO employee VALUES
(101,'Rahul','Bangalore'),
(101,'Sonia','Bangalore'),
(null,'priyanka','New Delhi');


mysql> INSERT INTO employee VALUES
    -> (101,'Rahul','Bangalore'),
    -> (101,'Sonia','Bangalore'),
    -> (null,'priyanka','New Delhi');
ERROR 1062 (23000): Duplicate entry '101' for key 'employee.eid'
mysql>

INSERT INTO employee VALUES
(101,'Rahul','Bangalore'),
(102,'Sonia','Bangalore'),
(null,'priyanka','New Delhi');


mysql> select * from employee;
+------+----------+-----------+
| eid  | ename    | eloc      |
+------+----------+-----------+
|  101 | Rahul    | Bangalore |
|  102 | Sonia    | Bangalore |
| NULL | priyanka | New Delhi |
+------+----------+-----------+
3 rows in set (0.00 sec)


INSERT INTO employee VALUES
(null,'Modi','New Delhi');

INSERT INTO employee VALUES
(103,null,'Bangalore');


CREATE TABLE employee(
eid INT unique,
ename VARCHAR(32) NOT null,
esal FLOAT NOT null,
eloc VARCHAR(32) DEFAULT 'Bangalore'
);

mysql> show tables;
Empty set (0.00 sec)


mysql> desc employee;
+-------+-------------+------+-----+-----------+-------+
| Field | Type        | Null | Key | Default   | Extra |
+-------+-------------+------+-----+-----------+-------+
| eid   | int         | YES  | UNI | NULL      |       |
| ename | varchar(32) | NO   |     | NULL      |       |
| esal  | float       | NO   |     | NULL      |       |
| eloc  | varchar(32) | YES  |     | Bangalore |       |
+-------+-------------+------+-----+-----------+-------+
4 rows in set (0.00 sec)


INSERT INTO employee(eid,ename,esal) VALUES
(101,'Rahul',45000.00),
(102,'Sonia',55000.00);

mysql> select * from employee;
+------+-------+-------+-----------+
| eid  | ename | esal  | eloc      |
+------+-------+-------+-----------+
|  101 | Rahul | 45000 | Bangalore |
|  102 | Sonia | 55000 | Bangalore |
+------+-------+-------+-----------+
2 rows in set (0.00 sec)

DROP TABLE employee;



CREATE TABLE employee(
eid INT unique,
ename VARCHAR(32) NOT null,
esal FLOAT NOT null,
eloc VARCHAR(32) DEFAULT 'Bangalore',
age INT CHECK (age > 18)
);


CREATE TABLE employee(
eid INT unique,
ename VARCHAR(32) NOT null,
esal FLOAT NOT null,
eloc VARCHAR(32) DEFAULT 'Bangalore',
age INT CHECK(age>18)
);

mysql> desc employee;
+-------+-------------+------+-----+-----------+-------+
| Field | Type        | Null | Key | Default   | Extra |
+-------+-------------+------+-----+-----------+-------+
| eid   | int         | YES  | UNI | NULL      |       |
| ename | varchar(32) | NO   |     | NULL      |       |
| esal  | float       | NO   |     | NULL      |       |
| eloc  | varchar(32) | YES  |     | Bangalore |       |
| age   | int         | YES  |     | NULL      |       |
+-------+-------------+------+-----+-----------+-------+
5 rows in set (0.00 sec)

INSERT INTO employee VALUES
(101,'rahul',45000.00,'Wayanad',15);


mysql> INSERT INTO employee VALUES
    -> (101,'rahul',45000.00,'Wayanad',15);
ERROR 3819 (HY000): Check constraint 'employee_chk_1' is violated.
mysql>

============================

INSERT INTO employee VALUES
(101,'rahul',45000.00,'Wayanad',51),
(102,'sonia',55000.00,'New Delhi',71);

DROP TABLE employee;

CREATE TABLE employee(
eid INT PRIMARY key,
ename VARCHAR(32) NOT null,
esal FLOAT NOT null,
eloc VARCHAR(32) DEFAULT 'Bangalore',
age INT CHECK(age>18)
);


CREATE TABLE employee(
eid INT,
ename VARCHAR(32) NOT null,
esal FLOAT NOT null,
eloc VARCHAR(32) DEFAULT 'Bangalore',
age INT CHECK(age>18),
PRIMARY KEY(eid)
);


INSERT INTO employee(eid,ename,esal,age) VALUES
(101,'rahul',45000.00,19);


INSERT INTO employee(eid,ename,esal,age) VALUES
(null,'rahul',45000.00,19);


mysql> INSERT INTO employee(eid,ename,esal,age) VALUES
    -> (101,'rahul',45000.00,19);
ERROR 1062 (23000): Duplicate entry '101' for key 'employee.PRIMARY'
mysql> INSERT INTO employee(eid,ename,esal,age) VALUES
    -> (null,'rahul',45000.00,19);
ERROR 1048 (23000): Column 'eid' cannot be NULL

===================================================
class-4
show databases;

mysql> drop database 9am;
Query OK, 1 row affected (0.06 sec)

CREATE DATABASE 9am;

USE 9am;

show tables;

CREATE TABLE BUNIT(
bu_id int,
bu_name VARCHAR(32) NOT NULL,
bu_loc  VARCHAR(32) NOT NULL,
PRIMARY KEY(bu_id)
);

mysql> desc BUNIT;
+---------+-------------+------+-----+---------+-------+
| Field   | Type        | Null | Key | Default | Extra |
+---------+-------------+------+-----+---------+-------+
| bu_id   | int         | NO   | PRI | NULL    |       |
| bu_name | varchar(32) | NO   |     | NULL    |       |
| bu_loc  | varchar(32) | NO   |     | NULL    |       |
+---------+-------------+------+-----+---------+-------+
3 rows in set (0.01 sec)

CREATE TABLE employee(
eid int,
ename VARCHAR(32) NOT NULL,
esal float NOT NULL,
b_id INT,
age INT CHECK(age>18),
PRIMARY KEY(eid),
FOREIGN KEY(b_id) REFERENCES BUNIT(bu_id)
);



mysql> select * from bunit;
Empty set (0.01 sec)

mysql> select * from employee;
Empty set (0.00 sec)


INSERT INTO employee VALUES
(101,'Rahul',45000.00,4,52);
Error: Foriegn KEY CONSTRAINT error. 

INSERT INTO BUNIT VALUES
(1,'ATT','Banglaore'),
(2,'Voda','Chennai'),
(3,'Airtel','Mysore'),
(4,'COLT','New Delhi');

mysql> select * from BUNIT;
+-------+---------+-----------+
| bu_id | bu_name | bu_loc    |
+-------+---------+-----------+
|     1 | ATT     | Banglaore |
|     2 | Voda    | Chennai   |
|     3 | Airtel  | Mysore    |
|     4 | COLT    | New Delhi |
+-------+---------+-----------+
4 rows in set (0.00 sec)

INSERT INTO employee VALUES
(101,'Rahul',45000.00,4,52);

mysql> select *from employee;
+-----+-------+-------+------+------+
| eid | ename | esal  | b_id | age  |
+-----+-------+-------+------+------+
| 101 | Rahul | 45000 |    4 |   52 |
+-----+-------+-------+------+------+
1 row in set (0.00 sec)


INSERT INTO employee VALUES
(102,'Sonia',55000.00,4,72),
(103,'Priyanka',65000.00,4,42),
(104,'Modi',75000.00,4,72),
(105,'Vijay',85000.00,2,52),
(106,'Rajni',95000.00,2,72),
(107,'Kamal',45000.00,2,62),
(108,'Thaygu',55000.00,1,21),
(109,'Lokesh',65000.00,1,23),
(110,'MR Harsha',75000.00,1,23),
(111,'Narasimha',85000.00,3,41),
(12,'Yasin',95000.00,1,22);


mysql> select *from employee;
+-----+-----------+-------+------+------+
| eid | ename     | esal  | b_id | age  |
+-----+-----------+-------+------+------+
|  12 | Yasin     | 95000 |    1 |   22 |
| 101 | Rahul     | 45000 |    4 |   52 |
| 102 | Sonia     | 55000 |    4 |   72 |
| 103 | Priyanka  | 65000 |    4 |   42 |
| 104 | Modi      | 75000 |    4 |   72 |
| 105 | Vijay     | 85000 |    2 |   52 |
| 106 | Rajni     | 95000 |    2 |   72 |
| 107 | Kamal     | 45000 |    2 |   62 |
| 108 | Thaygu    | 55000 |    1 |   21 |
| 109 | Lokesh    | 65000 |    1 |   23 |
| 110 | MR Harsha | 75000 |    1 |   23 |
| 111 | Narasimha | 85000 |    3 |   41 |
+-----+-----------+-------+------+-----



INSERT INTO employee VALUES
(112,'Sahith',25000.00,7,22);

Auto_Increment:
==============
eid
student_id

CASE1:
CREATE 10 employees?
CREATE 10 new student?

CREATE TABLE USER(
uid INT AUTO_INCREMENT,
uname VARCHAR(32),
uloc VARCHAR(32) DEFAULT 'Banglaore',
PRIMARY KEY(uid)
);


mysql> desc user;
+-------+-------------+------+-----+-----------+----------------+
| Field | Type        | Null | Key | Default   | Extra          |
+-------+-------------+------+-----+-----------+----------------+
| uid   | int         | NO   | PRI | NULL      | auto_increment |
| uname | varchar(32) | YES  |     | NULL      |                |
| uloc  | varchar(32) | YES  |     | Banglaore |                |
+-------+-------------+------+-----+-----------+----------------+
3 rows in set (0.00 sec)

INSERT INTO USER(uname,uloc) VALUES
('Rahul','Wayand'),
('Sonia','New Delhi'),
('Priyanka','Chennai');



mysql> drop table User;
Query OK, 0 rows affected (0.04 sec)

mysql> show tables;
+---------------+
| Tables_in_9am |
+---------------+
| bunit         |
| employee      |
+---------------+
2 rows in set (0.00 sec)


CREATE TABLE USER(
uid INT AUTO_INCREMENT,
uname VARCHAR(32),
uloc VARCHAR(32) DEFAULT 'Banglaore',
PRIMARY KEY(uid)
) AUTO_INCREMENT=1000;

===========================
class=4
class=5

CREATE TABLE employee(
eid INT,
ename VARCHAR(32) NOT Null,
esal INT NOT Null,
eloc VARCHAR(32) DEFAULT 'Bangalore',
age INT CHECK(age>18),
PRIMARY KEY(eid)
);

mysql> desc employee;
+-------+-------------+------+-----+-----------+-------+
| Field | Type        | Null | Key | Default   | Extra |
+-------+-------------+------+-----+-----------+-------+
| eid   | int         | NO   | PRI | NULL      |       |
| ename | varchar(32) | NO   |     | NULL      |       |
| esal  | int         | NO   |     | NULL      |       |
| eloc  | varchar(32) | YES  |     | Bangalore |       |
| age   | int         | YES  |     | NULL      |       |
+-------+-------------+------+-----+-----------+-------+
5 rows in set (0.02 sec)


INSERT INTO employee VALUES
(101,'Rahul',45000,'New Delhi',45),
(102,'Sonia',55000,'New Delhi',45),
(103,'Priyanka',65000,'Wayanad',45),
(104,'Modi',75000,'Varanasi',45),

(105,'Rajni',85000,'Chennai',65),
(106,'Kamal',95000,'Chennai',65),
(107,'Vijay',45000,'Chennai',45),
(108,'VS',96000,'Chennai',45),
(109,'Surya',75000,'Chennai',50),

(110,'Thyagu',25000,'Mysore',21),
(111,'Eswar',35000,'Mysore',22),
(112,'Muni',45000,'Trivendram',22),
(113,'Yasin',65000,'Trivendram',22),

(114,'Bindu',46000,'Bangalore',21),
(115,'Shalini',47000,'Bangalore',21);


Q1) Display ALL employees belongs TO location chennai.
SELECT *FROM employee
WHERE eloc="Chennai"

SELECT  ename, eloc FROM employee
WHERE eloc="Chennai"

SELECT  ename AS Name, eloc AS Location FROM employee
WHERE eloc="Chennai";


Q2)display ALL employee belongs loc "chennai and age more than 50;

SELECT * FROM employee 
WHERE eloc='Chennai' AND age>=50;

mysql> SELECT * FROM employee
    -> WHERE eloc='Chennai' AND age>=50;
+-----+-------+-------+---------+------+
| eid | ename | esal  | eloc    | age  |
+-----+-------+-------+---------+------+
| 105 | Rajni | 85000 | Chennai |   65 |
| 106 | Kamal | 95000 | Chennai |   65 |
| 109 | Surya | 75000 | Chennai |   50 |
+-----+-------+-------+---------+------+
3 rows in set (0.00 sec)

Q3)display no OF employees based ON location.

SELECT COUNT(eid),eloc FROM employee
GROUP BY eloc;

SELECT COUNT(ename),eloc FROM employee
GROUP BY eloc;


SELECT COUNT(eid) AS No_Of_Employees, eloc AS Location
FROM employee
GROUP BY eloc;

SELECT COUNT(eid) AS xyz, eloc AS Location
FROM employee
GROUP BY eloc;


SELECT COUNT(eid) AS 'No Of employee', eloc AS Location
FROM employee
GROUP BY eloc;


select avg(esal) from employee;

select COUNT(eid) AS 'No of Employees', eloc AS Location from employee group by eloc;


select COUNT(eid) AS 'No of Employees', AVG(esal) AS 'Avarage Salary', eloc AS Location from employee group by eloc;


Q)display ALL employees their salary more than avarage salary OF employee table?

SELECT * FROM employee
WHERE esal > 58000;

mysql> SELECT * FROM employee
    -> WHERE esal > (select avg(esal) from employee);
+-----+----------+-------+------------+------+
| eid | ename    | esal  | eloc       | age  |
+-----+----------+-------+------------+------+
| 103 | Priyanka | 65000 | Wayanad    |   45 |
| 104 | Modi     | 75000 | Varanasi   |   45 |
| 105 | Rajni    | 85000 | Chennai    |   65 |
| 106 | Kamal    | 95000 | Chennai    |   65 |
| 108 | VS       | 96000 | Chennai    |   45 |
| 109 | Surya    | 75000 | Chennai    |   50 |
| 113 | Yasin    | 65000 | Trivendram |   22 |
+-----+----------+-------+------------+------+
7 rows in set (0.01 sec)



SELECT *FROM employee
WHERE ename LIKE 'V%';

SELECT *FROM employee
WHERE ename LIKE '_a%';

==================================
class - 6
MySQL - joins

CREATE TABLE dept(
dept_id int,
dname VARCHAR(32) NOT Null,
dloc VARCHAR(32) NOT Null,
demail VARCHAR(32) NOT Null,
PRIMARY KEY(dept_id)
);

mysql> desc dept;
+---------+-------------+------+-----+---------+-------+
| Field   | Type        | Null | Key | Default | Extra |
+---------+-------------+------+-----+---------+-------+
| dept_id | int         | NO   | PRI | NULL    |       |
| dname   | varchar(32) | NO   |     | NULL    |       |
| dloc    | varchar(32) | NO   |     | NULL    |       |
| demail  | varchar(32) | NO   |     | NULL    |       |
+---------+-------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

CREATE TABLE employee(
eid int,
ename VARCHAR(32) NOT null,
esal INT NOT null,
age INT CHECK(age>18),
deptId int,
PRIMARY KEY(eid),
FOREIGN KEY(deptid) REFERENCES dept(dept_id)
);

mysql> desc employee;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| eid    | int         | NO   | PRI | NULL    |       |
| ename  | varchar(32) | NO   |     | NULL    |       |
| esal   | int         | NO   |     | NULL    |       |
| age    | int         | YES  |     | NULL    |       |
| deptId | int         | YES  | MUL | NULL    |       |
+--------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

===================================
INSERT INTO dept VALUES
(10,'IT','it@ibm.com','Bangalore'),
(11,'Sales','sales@ibm.com','Bangalore'),
(12,'Marketing','marketing@ibm.com','Chennai'),
(13,'Accounts','ac@ibm.com','Hyderabad'),
(14,'HR','hr@ibm.com','Pune');

INSERT INTO employee VALUES
(101,'Rahul',45000,52,10);

INSERT INTO employee VALUES
(102,'Sonia',55000,52,10),
(103,'Priyanka',65000,52,10),
(104,'Modi',75000,52,13),
(105,'Kamal',85000,52,11),
(106,'Rajni',85000,52,11),
(107,'Vijay',85000,52,11),
(108,'VS',75000,52,11),
(109,'TR',35000,52,12),
(110,'Harsha',25000,52,12),
(111,'Ekrishan',25000,52,12),
(112,'Chandra',42000,52,12),
(113,'Deepan',25000,52,14),
(114,'Keerti Suresh',25000,52,14),
(115,'Nayanatara',25000,52,14);


=========================
SELECT eid,ename,esal,dname,dloc
FROM employee
INNER JOIN dept 
WHERE employee.deptid = dept.dept_id;


PRINT only IT dept employees;

SELECT * FROM employee 
JOIN dept
WHERE employee.deptid=dept.dept_id  AND dept.dname='IT'


SELECT eid,ename,dname,dloc 
FROM employee 
JOIN dept
WHERE employee.deptid=dept.dept_id  AND dept.dname='IT'


=============================
dept  -
manager 

CREATE TABLE manager(
mid int,
mname VARCHAR(32) NOT null,
dept_id int,
PRIMARY KEY(mid),
FOREIGN KEY(dept_id)  references dept(dept_id)
);


employee

CREATE TABLE employee(
eid int,
ename VARCHAR(32) NOT null,
esal INT NOT null,
age INT CHECK(age>18),
deptId int,
mid int,
PRIMARY KEY(eid),
FOREIGN KEY(deptid) REFERENCES dept(dept_id),
FOREIGN KEY(mid) REFERENCES manager(mid)
);


INSERT INTO manager VALUES
(1001,'Modi',10),
(1002,'vijay',11),
(1003,'Rahul',12),
(1004,'Sonia',12),
(1005,'Kamal',14);


INSERT INTO employee VALUES
(102,'Sonia',55000,52,10,1001),
(103,'Priyanka',65000,52,10,1001),
(104,'Modi',75000,52,13,1002),
(105,'Kamal',85000,52,11,1002),
(106,'Rajni',85000,52,11,1003),
(107,'Vijay',85000,52,11,1004),
(108,'VS',75000,52,11,1004),
(109,'TR',35000,52,12,1001),
(110,'Harsha',25000,52,12,1002),
(111,'Ekrishan',25000,52,12,1001),
(112,'Chandra',42000,52,12,1001),
(113,'Deepan',25000,52,14,1001),
(114,'Keerti Suresh',25000,52,14,1002),
(115,'Nayanatara',25000,52,14,1003);

SELECT eid,ename,esal,dname,dloc,mname
FROM employee
INNER JOIN dept
WHERE employee.deptid = dept.dept_id 
INNER JOIN manager
WHERE employee.mid = manager.mid;

SELECT eid,ename,dname,mname
FROM employee
JOIN dept,manager
WHERE employee.deptid = dept.dept_id AND 
employee.mid =manager.mid;


 select * from employee join dept, manager
    -> where employee.deptid = dept.dept_id and employee.mid=manager.mid;
