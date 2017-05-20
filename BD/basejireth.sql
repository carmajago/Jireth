drop table productos;
drop table clientes;
drop table productosporventa;
drop table registro_ventas;
drop table servicios;

create table servicios(
codigo varchar2(15)    primary key not null,
nombre varchar2(30) not null,
costoServicio number(8),
tiempoHoras number(2,1),
descripcion  varchar2(1000)
);
create table productos(
codigo varchar2(15)    primary key not null,
nombre varchar2(20) not null,
valor_compra number (20) not null,
valor_venta number(20) not null,
disponibles number(8),
ruta_imagen varchar2(100),
descripcion  varchar2(1000)
);
create table clientes(
id varchar2(20) not null primary key,
nombre varchar2(15) not null,
apellido varchar2(15) not null,
correo varchar2 (50) not null
);

create table registro_ventas(
id_venta number(30) primary key not null,
fecha timestamp,
valor_venta  number(20),
nombre_producto varchar2(15),
cantidad number
);

create table productosporventa(
id_venta number(30),
codigo_producto varchar2(15),
nombre varchar2(15),
cantidad number,
CONSTRAINT ventaFK
    FOREIGN KEY(id_venta) REFERENCES registro_ventas(id_venta) 
);
