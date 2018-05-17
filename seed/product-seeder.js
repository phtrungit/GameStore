var Product=require('../models/product');
var mongoose=require('mongoose');
var mongoDB = 'mongodb://admin:phtrungit@ds119080.mlab.com:19080/dhtstoredb';
mongoose.connect(mongoDB);
var products =[ new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/7940/header.jpg',
	title:'Call of Duty® 4: Modern Warfare®',
	description:'The new action-thriller from the award-winning team at Infinity Ward, the creators of the Call of Duty® series, delivers the most intense and cinematic action experience ever. Call of Duty 4: Modern Warfare arms gamers with an arsenal of advanced and powerful modern day firepower and transports them to the most treacherous hotspots around the globe to take on a rogue enemy group threatening the world.\nAs both a U.S Marine and British S.A.S. soldier fighting through an unfolding story full of twists and turns, players use sophisticated technology, superior firepower and coordinated land and air strikes on a battlefield where speed, accuracy and communication are essential to victory. The epic title also delivers an added depth of multiplayer action providing online fans an all-new community of persistence, addictive and customizable gameplay.\nAuthentic Advanced Weaponry - Featuring an available arsenal of more than 70 new and authentic weapons and gear from assault rifles with laser sites, claymore mines, .50 caliber sniper rifles, and M-249 SAW machine guns. With accessories like night-vision goggles and ghillie suits, for maximum concealment, Call of Duty 4: Modern Warfare has players locked and loaded to accomplish the mission.\nCoordinated Assault and Support - Delivering the most visceral action thriller ever, the title covers modern battle from the soldier to the satellite, where the need for air support is critical to success. The adrenaline rush deployment enlists gamers to fast-rope from tactical helicopters, ride in an armada of attack choppers, utilize jets to remove enemy strongholds and even engage hostiles from thousands of feet above the ground inside a state of the art aerial gunship.\nCinematic Quality Graphics and Sound - Featuring stunning next-generation graphics, players will be drawn into the cinematic intensity of Call of Duty 4: Modern Warfare. Amazing special effects, including realistic depth of field, rim-lighting, character self-shadowing, texture streaming as well as physics-enabled effects will enlist players into the most photo-realistic gaming experience. Combine the lifelike graphics and the realistic battle chatter with the Call of Duty award-winning sound design and players will face battle as they have never before.\nUnparalleled Depth to Multiplayer - Multiplayer builds from the success of Call of Duty 2 delivering a persistent online experience for greater community interaction. Featuring create-a-class options allowing players to customize gear that is best suited for play, to experience points enabling unlockables and perks, all the way to matchmaking and leaderboards for the latest in tracking, Call of Duty 4: Modern Warfare\'s multiplayer is set to deliver easily accessible and addictive online play for all.',
	price:100000,
	category:'Action',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/550/header.jpg',
	title:'Left 4 Dead 2',
	description:'Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008.<br>                    This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans across five expansive campaigns.<br>                    You\'ll play as one of four new survivors armed with a wide and devastating array of classic and upgraded weapons. In addition to firearms, you\'ll also get a chance to take out some aggression on infected with a variety of carnage-creating melee weapons, from chainsaws to axes and even the deadly frying pan.<br>                    You\'ll be putting these weapons to the test against (or playing as in Versus) three horrific and formidable new Special Infected. You\'ll also encounter five new uncommon common infected, including the terrifying Mudmen.<br>                    Helping to take L4D\'s frantic, action-packed gameplay to the next level is AI Director 2.0. This improved Director has the ability to procedurally change the weather you\'ll fight through and the pathways you\'ll take, in addition to tailoring the enemy population, effects, and sounds to match your performance. L4D2 promises a satisfying and uniquely challenging experience every time the game is played, custom-fitted to your style of play.<br>                    <ul class="bb_ul"><li>Next generation co-op action gaming from the makers of Half-Life, Portal, Team Fortress and Counter-Strike.<br>                    </li><li>Over 20 new weapons &amp; items headlined by over 10 melee weapons – axe, chainsaw, frying pan, baseball bat – allow you to get up close with the zombies<br>                    </li><li>New survivors. New Story. New dialogue. <br>                    </li><li>Five expansive campaigns for co-operative, Versus and Survival game modes.<br>                    </li><li>An all new multiplayer mode.<br>                    </li><li>Uncommon common infected. Each of the five new campaigns contains at least one new uncommon common zombies which are exclusive to that campaign. <br>                    </li><li>AI Director 2.0: Advanced technology dubbed The AI Director drove L4D\'s unique gameplay – customizing enemy population, effects, and music, based upon the players’ performance. L4D 2 features The AI Director 2.0 which expands the Director’s ability to customize level layout, world objects, weather, and lighting to reflect different times of day.<br>                    </li><li>Stats, rankings, and awards system drives collaborative play<br></li></ul>',
	price:100000,
	category:'Action',
	amount:100,
	status:'available'
}),

new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/322330/header.jpg',
	title:'Don\'t Starve Together',
	description:'Don\'t Starve Together is the standalone multiplayer expansion of the uncompromising wilderness survival game, Don\'t Starve. Now Including, A New Reign: Part 1, the first episode of a series of updates. Built for multiplayer A New Reign explores the world of Don\'t Starve now that Charlie has taken over.<br><br>Don\'t Starve Together also includes <i>Reign of Giants</i>; adding new characters, seasons, creatures, biomes, and <strong>Giant</strong> new challenges.<br><br>Enter a strange and unexplored world full of strange creatures, dangers, and surprises. Gather resources to craft items and structures that match your survival style. Play your way as you unravel the mysteries of this strange land. <br><br>Cooperate with your friends in a private game, or take your chances with strangers online. Work with other players to survive the harsh environment, or strike out on your own.<br><br>Do whatever it takes, but most importantly, Don\'t Starve.',
	price:100000,
	category:'Adventure',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/377160/header.jpg',
	title:'Fallout 4',
	description:'Bethesda Game Studios, the award-winning creators of Fallout 3 and The Elder Scrolls V: Skyrim, welcome you to the world of Fallout 4 – their most ambitious game ever, and the next generation of open-world gaming.<br><br>As the sole survivor of Vault 111, you enter a world destroyed by nuclear war. Every second is a fight for survival, and every choice is yours. Only you can rebuild and determine the fate of the Wasteland. Welcome home.<h2 class="bb_tag">Key Features:</h2><ul class="bb_ul"><li><strong>Freedom and Liberty!</strong><br>Do whatever you want in a massive open world with hundreds of locations, characters, and quests. Join multiple factions vying for power or go it alone, the choices are all yours.<br><br></li><li><strong>You’re S.P.E.C.I.A.L!</strong><br>Be whoever you want with the S.P.E.C.I.A.L. character system. From a Power Armored soldier to the charismatic smooth talker, you can choose from hundreds of Perks and develop your own playstyle.<br> <br></li><li><strong>Super Deluxe Pixels!</strong><br>An all-new next generation graphics and lighting engine brings to life the world of Fallout like never before. From the blasted forests of the Commonwealth to the ruins of Boston, every location is packed with dynamic detail. <br><br></li><li><strong>Violence and V.A.T.S.!</strong><br>Intense first or third person combat can also be slowed down with the new dynamic Vault-Tec Assisted Targeting System (V.A.T.S) that lets you choose your attacks and enjoy cinematic carnage.<br><br></li><li><strong>Collect and Build!</strong><br>Collect, upgrade, and build thousands of items in the most advanced crafting system ever. Weapons, armor, chemicals, and food are just the beginning - you can even build and manage entire settlements.</li></ul>',
	price:100000,
	category:'Action',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/435150/header.jpg',
	title:'Divinity: Original Sin 2',
	description:'In a world where the Gods are dead, you play a wielder of forbidden magic, quarantined in the prison colony of Fort Joy. The Magisters of the Divine Order want to \"cure\" you of your powers. But the Order has secrets of its own. Secrets that threaten everyone. If the world remains godless, chaos will rule. It\'s time for a new Divinity.\n\nChoose your race and origin story and see how differently the world reacts. Gather your party and blast your opponents with different elements in deep tactical turn-based combat. Explore the vast and layered world of Rivellon alone or with up to 4 players in drop-in/drop-out cooperative play.\n\nDivinity: Original Sin 2 is an entirely new experience built on the next-gen Divinity Engine, with a new UI, an all-new art-style, and advanced roleplay systems. Everything that made the original great returns: Go anywhere you want, kill anyone, find endless ways to solve problems and gather your ultimate RPG party.',
	price:100000,
	category:'RPG',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/624090/header.jpg',
	title:'Football Manager 2018',
	description:'They say football is a game of opinions and everyone has theirs, but it’s only yours that counts around here. <br><br>You make the decisions now, from who you sign and who you sell, to how you manage your budget. Will you build tactics around the players at your disposal or train them in your vision of how the game should be played? Who you pick and who you bench will affect squad harmony, and it’s up to you to manage it. Every decision comes back to you.<br><br>Get it right and you’ll be the star of the show, grabbing the newspaper headlines and dominating trends on social media. They’ll write your name in footballing folklore…if you succeed, of course. <br><br>With unparalleled choices both on and off the pitch, all within the immersive footballing world, it’s time to decide what kind of manager do you want to be?<br><br><ul class="bb_ul"><li>Try your hand in 50 of the biggest footballing countries<br></li><li>Win the title with any one of world’s top 2500 clubs<br></li><li>Play the transfer market with over 600,000 real players and staff<br></li><li>Watch your football vision come to life before your very eyes</li></ul><br>All purchases of Football Manager 2018 also include a free copy of Football Manager Touch 2018 for PC/Mac and Linux.<br><br><strong>New for this season!</strong><br><br>Dynamics – A harmonious squad produces better results on the pitch. By building partnerships amongst your players – both on and off the pitch – and maintaining a good dressing room atmosphere you’ll get the best performances out of your squad.<br><br>Matchday Live – A brand new graphics engine produces the best lighting, stadiums and player models in the series’ history, alongside a sleeker match interface and modernised presentation that bring your fixtures to life.<br><br>Real World Scouting System – A true-to-life representation of the techniques used by the world’s biggest clubs including more detailed data analysis that, combined with a wider range of scouting options, give you a better overview of any potential signing.<br><br>Sports Science – The new Medical Centre gives you a more complete overview of your squad’s injury situation, with your medical team providing advice on feedback on individual players’ injury risks and how to avoid injuries occurring during training.<br><br>Tactics – A redesigned tactics screen puts analysis at its heart, giving you a clear view of whether your tactic is working. The new pre-match briefing allows you to be better prepared for your upcoming fixtures, while new player roles give you more ways to exploit your players’ abilities.<br><br>Fantasy Draft – Redesigned with a new interface that is perfect for streaming and with several new setup options that help tailor the Fantasy Draft experience to you, including a bigger squad budget and a Quick Start option.<br><br>Football Intelligence – A realistic transfer market that reflects the inflated transfer fees and contract values, more clauses to help finalise that blockbuster deal and the more intelligent transfer and board AI that take into account more contextual information from the game world.',
	price:100000,
	category:'Simulation',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/673950/header.jpg',
	title:'Farm Together',
	description:'<h2 class=\"bb_tag\">The ultimate farming experience!</h2><br>From the creators of Avatar Farm comes <strong>Farm Together</strong>, the ultimate farming experience!<br><br>Start from scratch, with a small plot, and end with a huge farm that extends further than the eye can see!<h2 class=\"bb_tag\">Grow your farm</h2><br>Grow crops, plant trees, take care of the animals, and much more! Spend your hard-earned money in new buildings and items for your farm! Earn experience and unlock even more items and buildings!<br><br>Hop onto your tractor and speed up the tasks, but watch out or you\'ll run out of gas!<h2 class=\"bb_tag\">Chill out</h2><br>Stay for as  long as you want! In <strong>Farm Together</strong> time advances even if you\'re not online, so you can be sure you\'ll have something to do when you come back later.<br><br>Manage your farm all by yourself, allow entrance only to your friends, or open it to the public and start cultivating together! A simple permission system allows you to limit what strangers can do, so they can help with it without risks of vandalizing.<h2 class=\"bb_tag\">Customize your farm and your looks</h2><br>You\'ll have plenty of customization items at your disposal: Fences, roads, buildings, decorations... Show your gardening and decoration skills to your neighbours!<br><br>And don\'t forget about your clothes! Customize your avatar and your tractor to your liking, and go visit your friends\' farms!',
	price:100000,
	category:'Action',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/552520/header.jpg',
	title:'Far Cry 5 - Standard Edition',
	description:'Far Cry comes to America in the latest installment of the award-winning franchise.<br><br>Welcome to Hope County, Montana, land of the free and the brave but also home to a fanatical doomsday cult known as Eden’s Gate. Stand up to cult leader Joseph Seed, and his siblings, the Heralds, to spark the fires of resistance and liberate the besieged community.<br><br><strong>FIGHT AGAINST A DEADLY CULT</strong><br>Free Hope County in solo or two-player co-op. Recruit Guns and Fangs for hire to help defeat the cult.<br><br><strong>A WORLD THAT HITS BACK</strong><br>Wreak havoc on the cult and its members but beware of  the wrath of Joseph Seed and his followers.<br><br><strong>CARVE YOUR OWN PATH</strong><br>Build your character and choose your adventure in the largest customizable Far Cry game ever!<br><br><strong>DYNAMIC TOYS</strong><br>Take control of iconic muscle cars, ATV\'s, planes and a lot more to engage the cult forces in epic fights.<br><br><strong>RE-DEFINED STEALTH MECHANICS</strong><br>Enhance your gameplay with eye tracking. Tag enemies by looking at them to increase your stealth skills and help your teammates spot threats. <br>Compatible with all Tobii Eye Tracking gaming devices.<br><br>Additional notes:<br>Eye tracking features available with Tobii Eye Tracking.',
	price:100000,
	category:'Action',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg',
	title:'Counter-Strike: Global Ofensive',
	description:'Counter-Strike: Global Offensive (CS: GO) will expand upon the team-based action gameplay that it pioneered when it was launched 14 years ago.<br><br>CS: GO features new maps, characters, and weapons and delivers updated versions of the classic CS content (de_dust, etc.). In addition, CS: GO will introduce new gameplay modes, matchmaking, leader boards, and more.<br><br>\"Counter-Strike took the gaming industry by surprise when the unlikely MOD became the most played online PC action game in the world almost immediately after its release in August 1999,\" said Doug Lombardi at Valve. \"For the past 12 years, it has continued to be one of the most-played games in the world, headline competitive gaming tournaments and selling over 25 million units worldwide across the franchise. CS: GO promises to expand on CS\' award-winning gameplay and deliver it to gamers on the PC as well as the next gen consoles and the Mac.\"',
	price:100000,
	category:'Action',
	amount:100,
	status:'available'
}),
new Product({
	imagePath:'https://steamcdn-a.akamaihd.net/steam/apps/578080/header.jpg',
	title:'PlayerUnknown\'s Battlegrounds PUBG',
	description:'PlayerUnknown\'s Battlegrounds: Đấu trường sinh tử. Là một tựa game sinh tồn thế giới mở , nơi mà 100 người chơi được đặt vào bắn giết lẫn nhau cho tới khi còn lại 1 người cuối cùng. PUBG phát triển nhanh chóng trở thành game được chơi nhiều nhất trên Steam và đang được đề cử danh hiệu Game Of The Year 2017.',
	price:100000,
	category:'Action',
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