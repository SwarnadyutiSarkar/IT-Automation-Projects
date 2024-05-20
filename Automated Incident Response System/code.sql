CREATE DATABASE incident_db;
CREATE USER 'your_mysql_user'@'localhost' IDENTIFIED BY 'your_mysql_password';
GRANT ALL PRIVILEGES ON incident_db.* TO 'your_mysql_user'@'localhost';
FLUSH PRIVILEGES;
