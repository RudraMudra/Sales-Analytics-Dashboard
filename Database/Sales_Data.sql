SELECT * FROM sales.sales_data_sample
where ORDERNUMBER = '3333';

insert into sales_data_sample
values('10108',45,56.76,'34',567.9,'12/12/2021 0:00','Shipped',4,5,2003,'Classic Cars',56,'S10_1677','UK Collectables, Ltd.','90-57693923',
'keskatu 45','level 5','Singapore','CA','56789','KA','NA','George','Simon','Large');

SELECT sum(SALES) as Total_Sales, PRODUCTLINE, STATUS, YEAR_ID, CITY, STATE, COUNTRY, TERRITORY from sales_data_sample GROUP BY 
                       PRODUCTLINE, YEAR_ID HAVING sum(SALES) > 100000;
                       
SELECT * FROM sales.sales_data_sample
WHERE PRODUCTLINE IN ('Motorcycles', 'Classic Cars', 'Trucks and Buses', 'Vintage Cars');
SELECT * FROM sales.sales_data_sample
where YEAR_ID IN (2003, 2004, 2005);
SELECT * FROM sales.sales_data_sample
where CITY IN ('NYC', 'Paris', 'Burbank', 'Brickhaven');
SELECT * FROM sales.sales_data_sample
where Country IN ('USA', 'Norway', 'France');
SELECT * FROM sales.sales_data_sample
where State IN ('NY', 'CA', 'MA');
SELECT * FROM sales.sales_data_sample
where TERRITORY IN ('NA', 'EMEA', 'Japan', 'APAC');
