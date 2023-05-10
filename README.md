# Node-Express-mysql

#CRUD
Create
Read/List
Update
Delete

# Create (C)
INSERT INTO me_live_code_api.users (`fname`,`lname`,`username`,`password`,`avatar`) Values 
('Ivy',"Cal","ivy.cal@melivecode.com","0000","https://www.melivecode.com/users/2.png")

# Read (R)
SELECT * FROM me_live_code_api.users where id = 1;
SELECT id, fname FROM me_live_code_api.users where id = 1;

# Update (U)
Update me_live_code_api.users SET `fname` = 'Keng',`lname` = 'Gang' where id = 1

# Delete (D)
DELETE FROM me_live_code_api.users where id = 2
