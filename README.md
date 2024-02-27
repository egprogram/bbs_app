# bbs_app

## genarate DB

create database bbs_app_db;

create table bbs (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    message VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    PRIMARY KEY(id)
 );
