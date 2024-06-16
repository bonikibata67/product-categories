use ProductCategories;


CREATE OR ALTER PROCEDURE updateProductCategory(@Id VARCHAR(255) ,@TITLE VARCHAR(255) ,
@ProductId VARCHAR(255) , @CategoriesId VARCHAR(255)
)
AS
BEGIN

UPDATE ProductCategory SET TITLE=@TITLE,
ProductId=@ProductId , CategoriesId=CategoriesId
WHERE Id=@Id

END