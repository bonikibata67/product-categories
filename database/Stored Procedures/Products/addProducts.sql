use ProductCategories;
CREATE OR ALTER PROCEDURE addProduct (@Id VARCHAR(255), @TITLE VARCHAR(255))
AS
BEGIN

INSERT INTO Products(Id, TITLE) VALUES(@Id, @TITLE)
END
