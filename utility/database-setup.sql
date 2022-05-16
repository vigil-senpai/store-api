use TestDB;

drop table Company; 
drop table Product; 

create table Company(
    CompanyID char(36) primary key, 
    CompanyName varchar(50) not null
); 

create table Product(
    ProductID char(36) primary key, 
    ProductName varchar(50) not null, 
    ProductPrice int not null, 
    ProductRating float default 4.0, 
    Featured int default 0, 
    CompanyID char(36) not null, 
    foreign key(CompanyID) references Company(CompanyID)
); 