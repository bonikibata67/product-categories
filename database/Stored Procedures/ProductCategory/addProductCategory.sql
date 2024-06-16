use ProductCategories;

CREATE OR ALTER PROCEDURE addProductCategory(@Id VARCHAR(255) ,@TITLE VARCHAR(255),
@ProductId VARCHAR(255) , @CategoriesId VARCHAR(255)
)
AS
BEGIN

INSERT INTO ProductCategory(Id,TITLE,ProductId,CategoriesId)
VALUES(@Id,@TITLE,@ProductId,@CategoriesId)
END