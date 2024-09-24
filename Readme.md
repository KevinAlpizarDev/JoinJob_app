Estructura de proyecto 

23/9/2024 

On development




services:
  django:
    image: django_app
    container_name: django_app
    build:
      context: ./djangoApp
    ports:
      - "8000:8000"
    volumes:
      - ./djangoApp:/app
    command: >
      bash -c "./wait-for-it.sh mysql:3306 -- echo 'MySQL is up!' && python manage.py runserver 0.0.0.0:8000"
    depends_on:
      - mysql

  react:
    container_name: react_app
    image: react_app
    build:
      context: ./reactApp
    volumes:
      - ./reactApp:/app
      - /app/node_modules
    ports:
      - "5173:5173"

  mysql:
    image: mysql:latest
    ports:
      - "3307:3306"
    environment:
      - MYSQL_ROOT_PASSWORD=root
      - MYSQL_DATABASE=django-react
    volumes:
      - django_react_data:/var/lib/mysql
      - ./dumps:/docker-entrypoint-initdb.d:ro

volumes:
  django_react_data:
