drop database if exists callwatch_db;
create database callwatch_db;
use callwatch_db;


drop table if exists Category;
create table Category(
ID int primary key not null auto_increment,
Nombre varchar(30)
);

insert into category (Nombre) 
values ("Bronce"),
("Plata"),
("Oro"),
("Platino");


drop table if exists Users;
create table Users (
ID int primary key not null auto_increment,
Nombre varchar(50) not null,
Usuario varchar(25) not null,
Email varchar(50) not null unique,
Password varchar(250) not null,
Imagen longblob,
IdCategory int,
constraint FK_IdCategory foreign key (IdCategory) references category(ID) 
);

insert into users (Nombre, Usuario, Email, Password, Imagen, IdCategory)
values ("Lucas Sequeira","LuquitasHD","lucas123@gmail.com","lucasss12", null, 1),
("Gonzalo Rozas","GonzaHD","gonza123@gmail.com","gonzaaa34", null, 2),
("Braian Romero","BraianHD","braian123@gmail.com","braiannn56", null, 3),
("Valentina Espindola","ValenHD","valen123@gmail.com","valennn78", null, 4),
("Boris Gallegos","BorisHD","boris123@gmail.com","borisss910", null, 1);



drop table if exists Talle;
create table Talle(
ID int primary key not null auto_increment,
Talle tinyint not null
);

insert into talle (Talle)
values (34),
(35),
(36),
(37),
(38),
(39),
(40),
(41),
(42),
(43),
(44),
(45),
(46);


drop table if exists Category_Products;
create table Category_Products(
ID int primary key not null auto_increment,
Nombre varchar(35) not null
);

insert into category_products (Nombre) 
values ("Unisex"),
("Mujer"),
("Hombre"),
("Niños"),
("Smart Watch"),
("Vintage");


drop table if exists Color;
create table Color(
ID int primary key not null auto_increment,
Color varchar(20) not null
);

insert into color(Color)
values ("Marrón"),
("Negro"),
("Azul"),
("Blanco"),
("Verde"),
("Rojo");


drop table if exists Products;
create table Products(
ID int primary key not null auto_increment,
Nombre varchar(100) not null,
Descripcion text not null,
Imagen longblob,
Precio int not null,
IdColor int,
IdTalle int,
IdCategoryProducts int,
constraint FK_IdColor_Color foreign key (IdColor) references Color(id),
constraint FK_IdTalle_Talle foreign key (IdTalle) references Talle(id),
constraint FK_IdCategory_CategoryProducts foreign key (IdCategoryProducts) references Category_Products(id)
);

insert into products (Nombre, Descripcion, Imagen, Precio, IdColor, IdTalle, IdCategoryProducts)
values("Callwatch Fendi P-98", "1 Con un diseño sobrio y ultradelgado, el Master Callwatch superará sus expectativas siendo una de las mejores opciones en el mercado. Este reloj captura el ADN de la marca gracias a su forma arquitectónica de caja.  Este reloj minimalista de dos agujas se asegura con una pulsera de malla o una correa de cuero suave.", null,25730 , 1, 13, 1),
("Callwatch Sauza Silver", "2 Con un diseño sobrio y ultradelgado, el Master Callwatch superará sus expectativas siendo una de las mejores opciones en el mercado. Este reloj captura el ADN de la marca gracias a su forma arquitectónica de caja.  Este reloj minimalista de dos agujas se asegura con una pulsera de malla o una correa de cuero suave.", null, 26440, 2, 12, 2),
("Callwatch Sprouts", "3 Con un diseño sobrio y ultradelgado, el Master Callwatch superará sus expectativas siendo una de las mejores opciones en el mercado. Este reloj captura el ADN de la marca gracias a su forma arquitectónica de caja.  Este reloj minimalista de dos agujas se asegura con una pulsera de malla o una correa de cuero suave.", null, 24610, 3, 11, 3),
("Callwatch Platinium Grape", "4 Con un diseño sobrio y ultradelgado, el Master Callwatch superará sus expectativas siendo una de las mejores opciones en el mercado. Este reloj captura el ADN de la marca gracias a su forma arquitectónica de caja.  Este reloj minimalista de dos agujas se asegura con una pulsera de malla o una correa de cuero suave.", null, 20550, 4, 10, 4),
("Callwatch Kieths N-900", "5 Con un diseño sobrio y ultradelgado, el Master Callwatch superará sus expectativas siendo una de las mejores opciones en el mercado. Este reloj captura el ADN de la marca gracias a su forma arquitectónica de caja.  Este reloj minimalista de dos agujas se asegura con una pulsera de malla o una correa de cuero suave.", null, 19949, 5, 9, 5),
("Callwatch Golden-Cherry", "6 Con un diseño sobrio y ultradelgado, el Master Callwatch superará sus expectativas siendo una de las mejores opciones en el mercado. Este reloj captura el ADN de la marca gracias a su forma arquitectónica de caja.  Este reloj minimalista de dos agujas se asegura con una pulsera de malla o una correa de cuero suave.", null, 28650, 6, 8, 6),
("Callwatch Toku Katsuo", "7 Con un diseño sobrio y ultradelgado, el Master Callwatch superará sus expectativas siendo una de las mejores opciones en el mercado. Este reloj captura el ADN de la marca gracias a su forma arquitectónica de caja.  Este reloj minimalista de dos agujas se asegura con una pulsera de malla o una correa de cuero suave.", null, 19490, 1, 7, 6),
("Callwatch Peach P-200", "8 Con un diseño sobrio y ultradelgado, el Master Callwatch superará sus expectativas siendo una de las mejores opciones en el mercado. Este reloj captura el ADN de la marca gracias a su forma arquitectónica de caja.  Este reloj minimalista de dos agujas se asegura con una pulsera de malla o una correa de cuero suave.", null, 15950, 2, 6, 5),
("Callwatch Blue Brizard", "9 Con un diseño sobrio y ultradelgado, el Master Callwatch superará sus expectativas siendo una de las mejores opciones en el mercado. Este reloj captura el ADN de la marca gracias a su forma arquitectónica de caja.  Este reloj minimalista de dos agujas se asegura con una pulsera de malla o una correa de cuero suave.", null, 13960, 3, 5, 4),
("Callwatch Margarine F-670", "10 Con un diseño sobrio y ultradelgado, el Master Callwatch superará sus expectativas siendo una de las mejores opciones en el mercado. Este reloj captura el ADN de la marca gracias a su forma arquitectónica de caja.  Este reloj minimalista de dos agujas se asegura con una pulsera de malla o una correa de cuero suave.", null, 24690, 4, 4, 3),
("Callwatch Pink SmartWatch P-90", "11 Con un diseño sobrio y ultradelgado, el Master Callwatch superará sus expectativas siendo una de las mejores opciones en el mercado. Este reloj captura el ADN de la marca gracias a su forma arquitectónica de caja.  Este reloj minimalista de dos agujas se asegura con una pulsera de malla o una correa de cuero suave.", null, 15000, 5, 3, 2);

