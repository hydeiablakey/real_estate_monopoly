## Initial set up
- **Create a virtual environment to manage packages:**
  -  ensure you're inside /back-end folder
  -  open a terminal and type ```python3 -m venv monopoly-env```
- **Activate Virtual env:**
  -  On Windows, run: ```monopoly-env\Scripts\activate.bat```
  -  On Unix or MacOS, run: ```source monopoly-env/bin/activate```
- If you have trouble visit: https://docs.python.org/3/tutorial/venv.html

- **Install all the required packages:**
  -  ```pip install -r requirements.txt```


## Running the server
- ```python server.py```
- Server will be running on http://127.0.0.1:5000/


## Tutorials
https://medium.com/@dushan14/create-a-web-application-with-python-flask-postgresql-and-deploy-on-heroku-243d548335cc  


## Database Migration
First run: ```python manage.py db init```  
This will create a folder named migrations in our project folder. To migrate using these created files,   
run ```python manage.py db migrate```

Now apply the migrations to the database using  
```python manage.py db upgrade```
