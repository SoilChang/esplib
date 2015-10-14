var data = [
	{
		title:"To Kill a Mockingbird",
		author:["Harper Lee"],
		description:"The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.",
		relatedModule: ["PC1433"],
		relatedYear: 1,
		relatedSpe: null,
		sponsoredBy:"Chang Ho Huan",
		date: 'Tue Oct 12 2015 19:04:53 GMT+0800 (China Standard Time)',
	},
	{
		title:"Harry Potter and the Sorcerer's Stone",
		author:["J.k. Rowling","Mary GrandPre(Illustrator)"],
		description:"The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.",
		relatedModule: ["ESP1107"],
		relatedYear: 2,
		relatedSpe: "po",
		sponsoredBy:"Chang Ho Huan",
		date: 'Tue Oct 11 2015 19:04:53 GMT+0800 (China Standard Time)',
	},
	{
		title:"Pride and Prejudice",
		author:["Jane Austen", "Anna Quindlen (Introduction)"],
		description:'"It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife." So begins Pride and Prejudice, Jane Austen\'s witty comedy of manners--one of the most popular novels of all time--that features splendidly civilized sparring between the proud Mr.',
		relatedModule: ["ESP1108","ESP3206"],
		relatedYear: 34,
		relatedSpe: "ces",
		sponsoredBy:"Chang Ho Huan",
		date: 'Tue Oct 10 2015 19:04:53 GMT+0800 (China Standard Time)',
	},
	{
		title:"The Diary of a Young Girl",
		author:["Anne Frank", "Eleanor Roosevelt (Introduction)", "B.M. Mooyart-Doubleday(Translator)"],
		description:'Discovered in the attic in which she spent the last years of her life, Anne Frank\'s remarkable diary has since become a world classic—a powerful reminder of the horrors of war and an eloquent testament to the human spirit.',
		relatedModule: ["PC1433","PC2506"],
		relatedYear: 34,
		relatedSpe: "nano",
		sponsoredBy:"Chang Ho Huan",
		date: 'Tue Oct 9 2015 19:04:53 GMT+0800 (China Standard Time)',
	}
]

var len = data.length;
for(var i=0; i<len; i++){
	var object = Books.findOne({title:data[i].title});
	if(!object){
		Books.insert(data[i]);
	}else{
		Books.remove({_id: object._id});
		_.extend( data[i], {_id:object._id});
		Books.insert(data[i]);
	}
}