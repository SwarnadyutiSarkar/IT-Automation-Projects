CREATE DATABASE patch_management_db;
CREATE USER 'your_mysql_user'@'localhost' IDENTIFIED BY 'your_mysql_password';
GRANT ALL PRIVILEGES ON patch_management_db.* TO 'your_mysql_user'@'localhost';
FLUSH PRIVILEGES;
