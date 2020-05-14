var userName="zx";
var time=Date.parse(new Date());
var data={
    'username':userName,
    'registTime':time
};
var db=connect('shop');
db.user.insert(data);
print('insert success');