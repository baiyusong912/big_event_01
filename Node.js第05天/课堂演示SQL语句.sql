-- select * from users;

-- insert into users (username,password) values ('钢铁侠',"abc123")

-- select * from users

-- update users set password='888888',status=0 where id=3

-- select * from users

-- delete from users where id=4

-- select * from users

-- select * from users where id=2

-- select * from users where id!=2

-- select * from users where id<3

-- select * from users where id>1

-- select * from users where username='lisi' and id<3

-- select * from users where username='zhangsan' or id=3

-- select * from users order by id desc

-- select count(*) from users where status=0

select count(*) as total from users where status=0