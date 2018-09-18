var kickstarter ={
	name: "Axolote Hex: 3d hex dungeons",
	description: "3d printable files for hex based dungeons, compatible with Fantasy RPG, Gloomhaven and Shadespire.",
	img:"17d341af08d3643cdf71e4e4ec0fad80_original.png",
	link:"https://ksr-ugc.imgix.net/assets/022/494/606/17d341af08d3643cdf71e4e4ec0fad80_original.png?ixlib=rb-1.1.0&crop=faces&w=1024&h=576&fit=crop&v=1536472047&auto=format&q=92&s=2a15ac13f94df77bf203020506b05d3b",
	pledged: "Pledged: " + 6769,
	backers: "Backers: " + 156,

	//pledgedLevels[0].name

	pledgedLevels: [{
		name: "Tavern Regular",
		price: "$" + 1,
		includes: ["gets updates", " and follow the campaign"],
		available: false
	},
	{
		name: "Dungeoneer",
		price: "$" + 15,
		includes: ["the bundle of traps", " and decorations."],
		available: false
	},
	{
		name: "Adventurer",
		price: "$" + 40,
		includes: ["Dungeon Set", " Cave Set", " and Tavern Set", " Grassland Set."],
		available: false
	},
	{
		name: "Dungeon Delver",
		price: "$" + 50,
		includes: ["Dungeon Set", " Cave Set", " Tavern Set", " Grassland Set", " and Traps and Decorations."],
		available: false
	}]
}
	
	var timeLeft= setInterval(function() {
		// var second = 1000,
		// 	munite = 1000 * 60,
		// 	hour = 1000 * 60 * 60,
		// 	day = 1000 * 60 * 60 * 24;
		// var timer;

		var end = new Date("Oct 10, 2018 11:59:59").getTime(),
			now = new Date().getTime();

		var distance = end - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var	hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var	munite = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var	seconds =Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("timer").innerHTML = days + "d " + hours + "h " + munite + "m " + seconds + "s";

		if (distance < 0) {
        	clearInterval(timeLeft);
        	document.getElementById("timer").innerHTML = "EXPIRED";
    	}
		// return [days, hours, munite, seconds];
	}, 1000);

	var title= kickstarter.name,	
		description= kickstarter.description, 
		pledged= kickstarter.pledged,
		backers= kickstarter.backers,
		pl0n= kickstarter.pledgedLevels[0].name,
		pl0p= kickstarter.pledgedLevels[0].price,
		pl0i= kickstarter.pledgedLevels[0].includes,
		pl1n= kickstarter.pledgedLevels[1].name,
		pl1p= kickstarter.pledgedLevels[1].price,
		pl1i= kickstarter.pledgedLevels[1].includes,
		pl2n= kickstarter.pledgedLevels[2].name,
		pl2p= kickstarter.pledgedLevels[2].price,
		pl2i= kickstarter.pledgedLevels[2].includes,
		pl3n= kickstarter.pledgedLevels[3].name,
		pl3p= kickstarter.pledgedLevels[3].price,
		pl3i= kickstarter.pledgedLevels[3].includes;


	var nameElement1 = document.getElementById("title"),
		nameElement2 = document.getElementById("description"),
		nameElement3 = document.getElementById("image"),
		nameElement4 = document.getElementById("pledged"),
		nameElement5 = document.getElementById("backers"),
		nameElement6 = document.getElementById("pl0n"),
		nameElement7 = document.getElementById("pl0p"),
		nameElement8 = document.getElementById("pl0i"),
		nameElement9 = document.getElementById("pl1n"),
		nameElement10 = document.getElementById("pl1p"),
		nameElement11 = document.getElementById("pl1i"),
		nameElement12 = document.getElementById("pl2n"),
		nameElement13 = document.getElementById("pl2p")
		nameElement14 = document.getElementById("pl2i"),
		nameElement15 = document.getElementById("pl3n"),
		nameElement16 = document.getElementById("pl3p"),
		nameElement17 = document.getElementById("pl3i");

	nameElement1.textContent = title;
	nameElement2.textContent = description;
	nameElement3.textContent = image;
	nameElement4.textContent = pledged;
	nameElement5.textContent = backers;
	nameElement6.textContent = pl0n;
	nameElement7.textContent = pl0p;
	nameElement8.textContent = pl0i;
	nameElement9.textContent = pl1n;
	nameElement10.textContent = pl1p;
	nameElement11.textContent = pl1i;
	nameElement12.textContent = pl2n;
	nameElement13.textContent = pl2p;
	nameElement14.textContent = pl2i;
	nameElement15.textContent = pl3n;
	nameElement16.textContent = pl3p;
	nameElement17.textContent = pl3i;

	image.src = "17d341af08d3643cdf71e4e4ec0fad80_original.png";

	// nameElement.append(name);nameElement.append(name);