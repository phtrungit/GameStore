var Product=require('../models/product');
var mongoose=require('mongoose');
var mongoDB = 'mongodb://admin:phtrungit@ds119080.mlab.com:19080/dhtstoredb';
mongoose.connect(mongoDB);
var products =[ new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/251570/header.jpg',
	title:'7 Days to Die',
	description:'<h2 class=\"bb_tag\"><strong>HOW LONG WILL YOU SURVIVE?</strong></h2><strong>7 Days to Die</strong> has redefined the survival genre, with unrivaled crafting and world-building content. Set in a brutally unforgiving post-apocalyptic world overrun by the undead, 7 Days to Die is an open-world game that is a unique combination of first person shooter, survival horror, tower defense, and role-playing games. It presents combat, crafting, looting, mining, exploration, and character growth, in a way that has seen a rapturous response from fans worldwide. Play the definitive zombie survival sandbox RPG that came first. Navezgane awaits!<h2 class=\"bb_tag\"><strong>GAME FEATURES</strong></h2><ul class=\"bb_ul\"><li><strong>Explore</strong> – Huge, unique and rich environments, offering the freedom to play the game any way you want with many unique biomes.<br></li><li><strong>Craft</strong> – Craft and repair weapons, clothes, armor, tools, vehicles, and more with nearly 400 recipes.<br></li><li><strong>Build</strong> – Take over a ruin, or build from the ground-up. Design your fortress to include traps and defensive positions to survive the undead - the world is fully destructible and moldable.<br></li><li><strong>Cooperate or Compete</strong> – Work together cooperatively to build settlements or work against each other raiding other player’s bases, it’s really up to you in a wasteland where zombies and outlaws rule the land.<br></li><li><strong>Create</strong> - Unleash your creativity and build the ultimate world by yourself or with friends. Enjoy unlimited access to nearly 400 in-game items and 1,200 unique building blocks in creative mode.<br></li><li><strong>Improve</strong> – Increase your skills in a multitude of active and passive disciplines. 7 Days to Die is the only true survival RPG with nearly 50 multi-tiered skill and perk groups.<br></li><li><strong>Choose</strong> – Play the Navezgane campaign world, or dive back in with friends in a randomly-generated world with cities, towns, lakes, mountains, valleys, roads, caves and wilderness locations. The possibilities are infinite with over 300 locations.<br></li><li><strong>Combat</strong> – Encounter a wide variety zombie archetypes including special infected with unique behaviors and attacks.<br></li><li><strong>Survive</strong> – Experience real hardcore survival mechanics with over 45 buff boosts/ailments along with dynamic cold and hot weather to contend with.<br></li><li><strong>Destroy </strong>– Buildings and terrain formations can collapse under their own weight from structural damage or poor building design.<br></li><li><strong>Loot </strong>– Scavenge the world for the best guns, weapons, tools, armor, clothing, and vehicle parts which have quality ranges which govern attributes to provide hundreds of thousands of item permutations.<br></li><li><strong>Quest </strong>– Find dynamic treasure maps left by survivors and dig for real buried loot. Discover quest notes and complete them for rewards and skill points.<br></li><li><strong>Customize</strong> – Create your own character or pick a preset and customize in-game even more with a huge selection of clothing and armor you can craft or loot in the world.<br></li><li><strong>Drive</strong> – Enjoy the badass vehicle system where you find all the parts, learn all the recipes and craft and augment your own vehicle.<br></li><li><strong>Farm or Hunt </strong>– Plant and grow gardens for sustainable resources or head out into the wilderness and hunt wild animals.</li></ul>',
	price:100000,
	category:'RPG',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/437250/header.jpg',
	title:'A House of Many Doors',
	description:'strong>Welcome to the House. You are not welcome.</strong><br><br>Explore the House, a parasite dimension that steals from other worlds, in a train that scuttles on mechanical legs. <br><br>Uncover secrets. Open locked doors. Lead a crew of dysfunctional characters. Write procedurally-generated poems. Fight in turn-based combat. Explore a strange new setting, dripping with atmosphere, crusted with lore. Escape. Escape. Escape.<br><br>You are an explorer, poet and spy, launching yourself into the unknown in search of adventure. Rig an election in the city of the dead. Visit a village lit by the burning corpse of a god (careful not to inhale the holy smoke). Sell your teeth to skittering spider-things for a moment in their library. Over 90 bizarre locations await discovery in the dust and the dark.<br><br><strong>A House of Many Doors</strong> is a 2D exploration RPG that takes inspiration from Sunless Sea, China Mieville, Planescape: Torment and Italo Calvino\'s Invisible Cities. It features over 300,000 words of branching original story and over 770 trillion bad poems.<h2 class=\"bb_tag\">WARNING.</h2>Please be aware that this game contains the following romance options:<br><ul class=\"bb_ul\"><li>Men.<br></li><li>Women.<br></li><li>Goatman.<br></li><li>Ten million crows.<br></li><li>An oil rig.</li></ul><br><strong>A House of Many Doors</strong> has benefited from the kind support and partial funding of Failbetter Games, makers of Sunless Sea and Fallen London.',
	price:100000,
	category:'RPG',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/506040/header.jpg',
	title:'Abandoned Backpack',
	description:'Abandoned Backpack',
	price:100000,
	category:'RPG',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/607880/header.jpg',
	title:'Accel World VS. Sword Art Online Deluxe Edition',
	description:'Svart Alfheim and the Accelerated World have begun to merge. In the midst of the chaos, Yui has gone missing. Kirito must challenge the Seven Kings of pure color from the Accelerated World to gain access to her location.',
	price:100000,
	category:'RPG',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/317250/header.jpg',
	title:'Airscape - The Fall of Gravity',
	description:'Airscape: The Fall of Gravity is a fast-paced, gravity-shifting action platformer about a deep-sea octopus who has been kidnapped by a mechanical alien race. <br><br>Control a Dumbo Octopus (<i>Grimpoteuthis abyssicola</i>) on a skybound adventure to save its family from the clutches of the motorized menace.<br>Jump, dodge, and swim through a breathtaking environment full of floating islands, water formations, and robotic terrors. There\'s no fighting in Airscape - you\'ll have to rely on your wits, speed, and reflexes to navigate through the deadly gauntlets.<br><br><ul class=\"bb_ul\"><li><strong>18 devious zones - </strong> including 60+ unique levels!<br></li><li><strong>Tight controls - dodge bullets, outsmart seekers, and avoid mines with ease, optimized for gamepads and keyboards! </strong> <br></li><li><strong>Hardcore difficulty - </strong> life as an octopus is tough, but frequent checkpoints and quick respawn times get you back to the action in no time!<br></li><li><strong>Five playable characters - </strong> each with their own unique strengths and weaknesses!<br></li><li><strong>Swim like an octopus - </strong> you\'ll transition smoothly between running on land and swimming through impossibly suspended water blobs!<br></li><li><strong>Full Orchestral Soundtrack - </strong> Your thumbs may hate you, but your ears will love you!</li></ul>',
	price:100000,
	category:'RPG',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/290970/header.jpg',
	title:'1849',
	description:'The year is 1849, and gold has just been discovered in California. You decide to head out west, to seek fame and wealth in the approaching Gold Rush.',
	price:100000,
	category:'Indie',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/466500/header.jpg',
	title:'35MM',
	description:'Post-apocalyptic story about two travelers who set out on a long journey in the wasteland, left by people after the global epidemic. The disaster destroyed much of the world\'s population, the infrastructure went wrong and the common life remained only in memories. The times when a human has adapted the environment for himself have end and now, in order to survive, he will have to adapt to changes. You will have to play the character whose path runs through the deserted towns and cities in Russia, fields and forests of a vast country and even a secret underground facility. Who are we, where are we from and where do we go – we will be lucky to know it only at the end!',
	price:100000,
	category:'Indie',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/368360/header.jpg',
	title:'60 Seconds!',
	description:'As Ted, a responsible citizen and a family man, you are faced with a slight disturbance to your happy, suburban lifestyle. THE NUCLEAR APOCALYPSE.\n\nWith only 60 seconds left to impact, guide Ted in a mad, intense and action packed dash through his house in search of his family and useful supplies. Everything will be against you - time, your very own furniture, the house that\'s different every time you play and the fundamental question - what to take with you and who to leave behind?',
	price:100000,
	category:'Indie',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/704830/header.jpg',
	title:'Esports Life: Ep.1 - Dreams of Glory',
	description:'Esports Life is the absolute pro-gamer simulator in which you feel the thrill of competitive gaming as you try to balance it with your academic and social life. Show your skills in the two most popular esports genres –FPS and MOBA– and defeat your rivals one by one. Train hard and reach the peak of popularity in this multi-episodic story-driven life-sim tycoon.',
	price:100000,
	category:'Sports',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/488310/header.jpg',
	title:'Eleven: Table Tennis VR',
	description:'The ultimate Table Tennis simulator. Play opponents in online multiplayer or practice against the advanced AI. With physics designed to be as real as ever achieved in a Table Tennis simulator, you will forget you are in VR.',
	price:100000,
	category:'Sports',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/635260/header.jpg',
	title:'CarX Drift Racing Online',
	description:'CarX Drift Racing is a racing simulator dedicated to the motorsport of drifting. Legendary cars, detailed tuning settings and a real-time multiplayer mode in full HD at 60 fps. All this awaits you in the PC version of this popular mobile game!',
	price:100000,
	category:'Racing',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/287340/header.jpg',
	title:'Colin McRae Rally',
	description:'Colin McRae Rally features the car and track list from last year’s top selling mobile title and features THIRTY amazing rally stages in three environments taken from the PlayStation classic Colin McRae 2.0. for this PC and Mac edition. With a combined distance of over 130km, go flat out through the dirt and the dust of the Australian outback, take on dramatic climbs through the mountains of Greece and get sideways on the tight and twisty roads of Corsica. ',
	price:100000,
	category:'Racing',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/397270/header.jpg',
	title:'A Kiss For The Petals - Remembering How We Met',
	description:'The season is Fall... as the uniforms transition from Summer to Winter garments, Risa suddenly has a pang of nostalgia. It was this very uniform she was wearing on her first day at St. Michael’s... The day she met her future girlfriend Miya.',
	price:100000,
	category:'Adventure',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/384190/header.jpg',
	title:'ABZU',
	description:'From the art director of Journey® and Flower®, ABZÛ is a beautiful underwater adventure that evokes the dream of diving.\n\nmmerse yourself in a vibrant ocean world full of mystery and bursting with color and life. Perform fluid acrobatics as the Diver using graceful swimming controls. Discover hundreds of unique species based on real creatures and form a powerful connection with the abundant sea life. Interact with schools of thousands of fish that procedurally respond to you, each other, and predators. Linger in epic seascapes and explore aquatic ecosystems modeled with unprecedented detail. Descend into the heart of the ocean where ancient secrets lie forgotten. But beware, dangers lurk in the depths. "ABZÛ" is from the oldest mythologies; AB, meaning water, and ZÛ, meaning to know. ABZÛ is the ocean of wisdom.',
	price:100000,
	category:'Adventure',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/324310/header.jpg',
	title:'Bus Simulator 16',
	description:'A gigantic, freely accessible world is waiting for you in Bus Simulator 16. Transport your passengers to their destinations across five authentic city districts safely and on time. Drive a two-door, three-door, or a true-to-life articulated bus through commuter traffic at rush hour, watch out for emergency vehicles, and take detours around construction sites. Make sure that you are always aware of your surroundings or you will get into trouble for accidents and traffic violations!',
	price:100000,
	category:'Simulation',
	amount:100,
	status:'available'
})
];
var done=0;

for(var i=0;i<products.length;i++)
{
	products[i].save(function(err,result){
		done++;
		if(done==products.length)
		{
			exit();
		}
	});
}
function exit()
{
	mongoose.disconnect();
}