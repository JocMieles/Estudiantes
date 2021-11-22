CREATE PROCEDURE SPEstudiante


@i_TipoIdentificacion varchar(2),
@i_Identificacion varchar(15),
@i_Nombre1 varchar(20),
@i_Nombre2 varchar(20),
@i_Apellido1 varchar(20),
@i_Apellido2 varchar(20),
@i_Email varchar(50),
@i_Celular varchar(20),
@i_Direccion varchar(50),
@i_Ciudad varchar(50)

AS



 INSERT INTO [dbo].[Estudiante]
           ([TipoIdentificacion]
           ,[Identificacion]
           ,[Nombre1]
           ,[Nombre2]
           ,[Apellido1]
           ,[Apellido2]
           ,[Email]
           ,[Celular]
           ,[Direccion]
           ,[Ciudad])
     VALUES
           (@i_TipoIdentificacion
           ,@i_Identificacion
           ,@i_Nombre1
           ,@i_Nombre2
           ,@i_Apellido1
           ,@i_Apellido2
           ,@i_Email
           ,@i_Celular
           ,@i_Direccion
           ,@i_Ciudad)



Select * from [pruebaTe].[dbo].[Estudiante] WHERE [Id] = (Select max([Id]) from [pruebaTe].[dbo].[Estudiante])

GO
