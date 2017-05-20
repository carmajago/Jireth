create or replace package jireth
as 

/*
Agrega un nuevo cliente a la base de datos
*/
procedure agregar_clientes(id clientes.id%type,
							nombre clientes.nombre%type , 
							apellido clientes.apellido%type, 
							correo clientes.correo%type);

/*
Agrega un nuevo servicio a la base de datos 
*/
procedure agregar_servicios(codigo servicios.codigo%type, 
							nombre servicios.nombre%type,
							costoServicio servicios.costoServicio%type,
							tiempoHoras servicios.tiempoHoras%type,							
							descripcion servicios.descripcion%type);

/*
Agrega un nuevo producto a la base de datos
*/
procedure agregar_productos(codigo productos.codigo%type, 
							nombre productos.nombre%type,
							valor_compra productos.valor_compra%type,
							valor_venta productos.valor_venta%type,
							disponibles productos.disponibles%type,
							ruta_imagen productos.ruta_imagen%type,
							descripcion productos.descripcion%type);


/**
*Procedimiento que actualiza algún producto
param codigo ,Este es el código del producto que se desea actualizar
param dato_actualizar ,datos que de desea actualizar(
param actualizar ,dato que se va a actualizar.se coloca en la invocacion  "codigo" o "nombre" o "cantidad" etc......
**/
procedure actualizar_productos(codigo  productos.codigo%type,dato_actualizar varchar,actualizar varchar);

procedure actualizar_servicios(codigo  servicios.codigo%type,dato_actualizar varchar,actualizar varchar);

procedure eliminar_producto(codigo productos.codigo%type);

procedure eliminar_servicio(codigo servicios.codigo%type);

end jireth;
/
show errors;

create or replace package body jireth as
	procedure agregar_clientes(id clientes.id%type,
							nombre clientes.nombre%type, 
							apellido clientes.apellido%type, 
							correo clientes.correo%type)
		as
	begin
	insert into clientes values(id,nombre,apellido,correo);
	end agregar_clientes;

	procedure  agregar_productos(codigo productos.codigo%type, 
							nombre productos.nombre%type,
							valor_compra productos.valor_compra%type,
							valor_venta productos.valor_venta%type,
							disponibles productos.disponibles%type,
							ruta_imagen productos.ruta_imagen%type,
							descripcion productos.descripcion%type)
	as
	begin
	insert into productos values(codigo,nombre,valor_compra,valor_venta,disponibles,ruta_imagen,descripcion);
	end agregar_productos;

	procedure  agregar_servicios(codigo servicios.codigo%type, 
							nombre servicios.nombre%type,
							costoServicio servicios.costoServicio%type,							
							tiempoHoras servicios.tiempoHoras%type,
							descripcion servicios.descripcion%type)
	as
	begin
	insert into servicios values(codigo,nombre,costoServicio,tiempoHoras,descripcion);
	end agregar_servicios;

	procedure actualizar_productos(codigo  productos.codigo%type,dato_actualizar varchar,actualizar varchar)
	as
	begin

	if(actualizar='codigo') then
			update productos set codigo=dato_actualizar where codigo=codigo;
	elsif(actualizar='nombre') then
		update productos set nombre=dato_actualizar where codigo=codigo;
	elsif(actualizar='valor_compra') then
		update productos set valor_compra=dato_actualizar where codigo=codigo;
	elsif(actualizar='valor_venta') then
			update productos set valor_venta=dato_actualizar where codigo=codigo;
	elsif( actualizar='ruta_imagen') then
			update productos set ruta_imagen=dato_actualizar where codigo=codigo;
	elsif( actualizar='descripcion') then
			update productos set descripcion=dato_actualizar where codigo=codigo;
	end if;
	end actualizar_productos;

	procedure actualizar_servicios(codigo  servicios.codigo%type,dato_actualizar varchar,actualizar varchar)
	as
	begin

	if(actualizar='codigo') then
			update servicios set codigo=dato_actualizar where codigo=codigo;
	elsif(actualizar='nombre') then
			update servicios set nombre=dato_actualizar where codigo=codigo;
	elsif(actualizar='costoServicio') then
			update servicios set costoServicio=dato_actualizar where codigo=codigo;
	elsif( actualizar='tiempoHoras') then
			update servicios set tiempoHoras=dato_actualizar where codigo=codigo;
	elsif( actualizar='descripcion') then
			update servicios set descripcion=dato_actualizar where codigo=codigo;
	end if;
	end actualizar_servicios;

	procedure eliminar_producto(codigo productos.codigo%type)
	as
	begin
	delete from productos where codigo=codigo;
	end eliminar_producto;

	procedure eliminar_servicio(codigo servicios.codigo%type)
	as
	begin
	delete from servicios where codigo=codigo;
	end eliminar_servicio;
end jireth;
/

show errors;