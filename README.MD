You have two Sequelize models: User and Post. The User model has the following attributes:
id (integer)
name (string)
email (string)
The Post model has the following attributes:
id (integer)
title (string)
content (text)
userId (integer)
Your task is to write a Sequelize query that retrieves all posts along with the name and email of the user who created each post. The query should return an array of objects, where each object represents a post and contains the post’s title, content, and the name and email of the corresponding user.
