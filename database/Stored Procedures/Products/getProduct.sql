use ProductCategories;


CREATE OR ALTER Procedure getProduct (@Id VARCHAR(255))
AS
BEGIN
SELECT * FROm Products WHERE Id =@Id
END