# import pymysql
import mysql.connector

from app import app
from config import mysql
from flask import jsonify
from tabulate import tabulate
from flask import flash, request
import json


@app.route('/getAllData', methods=['GET'])
def get_SalesData():
    try:

        # getting all lists
        conn = mysql.connect()
        cursor = conn.cursor()
        cursor.execute("SELECT sum(SALES) as Total_Sales, PRODUCTLINE, YEAR_ID, CITY, STATE, COUNTRY from sales_data_sample GROUP BY "
                       "PRODUCTLINE, YEAR_ID HAVING sum(SALES) > 500000")
        columns = cursor.fetchall()
        print(columns)
        data_list = []
        for x in columns:
            data = {'totalSales': x[0], 'productLine': x[1], 'year': x[2], 'city': x[3], 'state': x[4], 'country': x[5]}
            data_list.append(data)
            print(data_list)
        json_data = json.dumps(data_list)
        response = jsonify(json_data)
        response.status_code = 200
        return response
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()


if __name__ == "__main__":
    app.run()
