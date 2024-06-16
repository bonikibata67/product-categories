use ProductCategories;


CREATE OR ALTER Procedure deleteProduct (@Id VARCHAR(255))
AS
BEGIN

Delete FROM Products WHERE Id=@id
END;