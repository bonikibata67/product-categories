use ProductCategories;

CREATE OR ALTER PROCEDURE getCategory(@Id VARCHAR(255))
AS
BEGIN
SELECT * FROM ProductCategory WHERE Id=@Id
END