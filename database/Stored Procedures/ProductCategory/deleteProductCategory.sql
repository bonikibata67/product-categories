use ProductCategories;

CREATE OR ALTER PROCEDURE deleteProductCategory(@Id VARCHAR(255))
AS
BEGIN
DELETE FROM ProductCategory WHERE Id=@Id
END