from models import *
from server import db

properties = [
    {
        "name": "Home",
        "address": "285 South Poverty Ave",
        "price": 15000,
        "rent": 1000,
        "upgrade": 20000
    },
    {
        "name": "Home",
        "address": "287 South Poverty Ave",
        "price": 15000,
        "rent": 1000,
        "upgrade": 20000
    },
    {
        "name": "Home",
        "address": "289 South Poverty Ave",
        "price": 15000,
        "rent": 1000,
        "upgrade": 20000
    },
    {
        "name": "Home",
        "address": "291 South Poverty Ave",
        "price": 15000,
        "rent": 1000,
        "upgrade": 20000
    },
    {
        "name": "Home",
        "address": "293 South Poverty Ave",
        "price": 15000,
        "rent": 1000,
        "upgrade": 20000
    },
    {
        "name": "Home",
        "address": "785 West Prospect Street",
        "price": 30000,
        "rent": 2000,
        "upgrade": 40000
    },
    {
        "name": "Home",
        "address": "787 West Prospect Street",
        "price": 30000,
        "rent": 2000,
        "upgrade": 40000
    },
    {
        "name": "Home",
        "address": "789 West Prospect Street",
        "price": 30000,
        "rent": 2000,
        "upgrade": 40000
    },
    {
        "name": "Home",
        "address": "791 West Prospect Street",
        "price": 30000,
        "rent": 2000,
        "upgrade": 40000
    },
    {
        "name": "Home",
        "address": "793 West Prospect Street",
        "price": 30000,
        "rent": 2000,
        "upgrade": 40000
    },
    {
        "name": "Home",
        "address": "983 North Stable Street",
        "price": 60000,
        "rent": 4000,
        "upgrade": 80000
    },
    {
        "name": "Home",
        "address": "985 North Stable Street",
        "price": 60000,
        "rent": 4000,
        "upgrade": 80000
    },
    {
        "name": "Home",
        "address": "987 North Stable Street",
        "price": 60000,
        "rent": 4000,
        "upgrade": 80000
    },
    {
        "name": "Home",
        "address": "989 North Stable Street",
        "price": 60000,
        "rent": 4000,
        "upgrade": 80000
    },
    {
        "name": "Home",
        "address": "991 North Stable Street",
        "price": 60000,
        "rent": 4000,
        "upgrade": 80000
    },
    {
        "name": "Home",
        "address": "1083 East Prosperous Ave",
        "price": 120000,
        "rent": 8000,
        "upgrade": 160000
    },
    {
        "name": "Home",
        "address": "1085 East Prosperous Ave",
        "price": 120000,
        "rent": 8000,
        "upgrade": 160000
    },
    {
        "name": "Home",
        "address": "1087 East Prosperous Ave",
        "price": 120000,
        "rent": 8000,
        "upgrade": 160000
    },
    {
        "name": "Home",
        "address": "1089 East Prosperous Ave",
        "price": 120000,
        "rent": 8000,
        "upgrade": 160000
    },
    {
        "name": "Home",
        "address": "1091 East Prosperous Ave",
        "price": 120000,
        "rent": 8000,
        "upgrade": 160000
    },
    {
        "name": "Comercial",
        "address": "273 South Poverty Ave",
        "price": 20000,
        "rent": 1500,
        "upgrade": 25000
    },
    {
        "name": "Comercial",
        "address": "275 South Poverty Ave",
        "price": 20000,
        "rent": 1500,
        "upgrade": 25000
    },
    {
        "name": "Comercial",
        "address": "275 South Poverty Ave",
        "price": 20000,
        "rent": 1500,
        "upgrade": 25000
    },
    {
        "name": "Comercial",
        "address": "773 West Prospect Street",
        "price": 35000,
        "rent": 2500,
        "upgrade": 25000
    },
    {
        "name": "Comercial",
        "address": "775 West Prospect Street",
        "price": 35000,
        "rent": 2500,
        "upgrade": 25000
    },
    {
        "name": "Comercial",
        "address": "777 West Prospect Street",
        "price": 35000,
        "rent": 2500,
        "upgrade": 25000
    },
    {
        "name": "Comercial",
        "address": "973 North Stable Street",
        "price": 65000,
        "rent": 4500,
        "upgrade": 85000
    },
    {
        "name": "Comercial",
        "address": "975 North Stable Street",
        "price": 65000,
        "rent": 4500,
        "upgrade": 85000
    },
    {
        "name": "Comercial",
        "address": "977 North Stable Street",
        "price": 65000,
        "rent": 4500,
        "upgrade": 85000
    },
    {
        "name": "Comercial",
        "address": "1073 East Prosperous Ave",
        "price": 125000,
        "rent": 8500,
        "upgrade": 165000
    },
    {
        "name": "Comercial",
        "address": "1075 East Prosperous Ave",
        "price": 125000,
        "rent": 8500,
        "upgrade": 165000
    },
    {
        "name": "Comercial",
        "address": "1077 East Prosperous Ave",
        "price": 125000,
        "rent": 8500,
        "upgrade": 165000
    },
    {
        "name": "Stocks",
        "address": "South Poverty Ave",
        "price": "500",
        "rent": 500,
        "upgrade": 500
    },
    {
        "name": "Stocks",
        "address": "South Prospect Street",
        "price": "500",
        "rent": 500,
        "upgrade": 500
    },
    {
        "name": "Stocks",
        "address": "West Stable Street",
        "price": "500",
        "rent": 500,
        "upgrade": 500
    },
    {
        "name": "Stocks",
        "address": "East Prosperous Ave",
        "price": "500",
        "rent": 500,
        "upgrade": 500
    }
]

