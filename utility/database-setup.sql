use TestDB
go

drop table Company; 
drop table Product; 

create table Company(
    CompanyID int primary key, 
    CompanyName varchar(50) not null
); 

insert into company values
(1, 'ikea'), 
(2, 'marcos'), 
(3, 'liddy'), 
(4, 'caressa');

create table Product(
    ProductID int primary key, 
    ProductName varchar(50) not null, 
    ProductPrice float not null, 
    Featured int default 0, 
    CompanyID int foreign key references Company(CompanyID) on delete cascade on update cascade
); 