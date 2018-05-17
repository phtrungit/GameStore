var Customer=require('../models/customer');
var mongoose=require('mongoose');
var mongoDB = 'admin://dhtstoredb:phtrungit@ds119080.mlab.com:19080/dhtstoredb';
mongoose.connect(mongoDB);

var customers =[ new Customer({
	imagePath:'http://bdfjade.com/data/out/111/6156622-game-images.jpg',
	name:'Pham Huynh Trung',
	mail:'phamhuynhtrung@gmail.com',
	phone:'01234567896'
}),new Customer({
	imagePath:'http://bdfjade.com/data/out/111/6156622-game-images.jpg',
	name:'Nguyen Van Hoan',
	mail:'nguyenvanhoan@gmail.com',
	phone:'01234567896'
}),new Customer({
	imagePath:'http://bdfjade.com/data/out/111/6156622-game-images.jpg',
	name:'Chu Minh Duc',
	mail:'chuminhduc@gmail.com',
	phone:'01234567896'
}),new Customer({
	imagePath:'http://bdfjade.com/data/out/111/6156622-game-images.jpg',
	name:'Nguyen Van A',
	mail:'nguyenvana@gmail.com',
	phone:'01234567896'
})];
var done=0;

for(var i=0;i <customers.length;i++)
{
 customers[i].save(function(err,result){
		done++;
		if(done= customers.length)
		{
			exit();
		}
	});
}
function exit()
{
	mongoose.disconnect();
}