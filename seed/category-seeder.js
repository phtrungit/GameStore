var Category=require('../models/category');
var mongoose=require('mongoose');
var mongoDB = 'mongodb://admin:phtrungit@ds119080.mlab.com:19080/dhtstoredb';
mongoose.connect(mongoDB);

var category =[ new Category({
	
}),
new Category({
	name:'Action'
}),

new Category({
	name:'RPG'
}),
new Category({
	name:'Action'
}),
new Category({
	name:'Indie'
}),
new Category({
	name:'Sports'
}),
new Category({
	name:'Adventure'
}),
new Category({
	name:'Racing'
}),
new Category({
	name:'Simulation'
}),
new Category({
	name:'Casual'
})
];
var done=0;

for(var i=0;i<category.length;i++)
{
	category[i].save(function(err,result){
		done++;
		if(done==category.length)
		{
			exit();
		}
	});
}
function exit()
{
	mongoose.disconnect();
}