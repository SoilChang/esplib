Template.allCollection.helpers({
	eachBooks: function(){
		var sortBy = Session.get("sortBy");
		var sortOrder = Session.get("sortQuery");
		var sortField = Session.get("fieldQuery");
		var spec = ["po", "ces", "es","nano"];
		if(sortBy === 'date'){
			return Books.find({},{sort:{date:sortOrder}});
		}

		// sort by module
		else if(sortBy === 'module'){			
			return Books.find({},{sort:{date:sortOrder}});
		}

		// sort by year
		else if(sortBy === 'year'){
			if(sortField === 1 || sortField === 2 || sortField === 34){
				return Books.find({relatedYear:sortField},{sort:{date:sortOrder}});
			}else{
				return Books.find({},{sort:{date:sortOrder}});
			}
		}

		// sort by specialisation
		else if(sortBy === 'specialisation'){
			if(_.indexOf(spec,sortField)>= 0) {
				return Books.find({relatedSpe:sortField},{sort:{date:sortOrder}});
			}else{
				return Books.find({},{sort:{date:sortOrder}});
			}	
		}
		
	},

	sortBy:function(){
		var string = Session.get("sortBy")
		if(typeof string === 'string'){
				return string.toUpperCase();
		}
	
	},
	sortByYear:function(){
		if(Session.get("sortBy") === "year"){
			return true;
		}else{
			return false;
		}
	},
	sortByDate:function(){
		if(Session.get("sortBy") === "date"){
			return true;
		}else{
			return false;
		}
	},
	sortByModule:function(){
		if(Session.get("sortBy") === "module"){
			return true;
		}else{
			return false;
		}
	},
	sortBySpecialisation:function(){
		if(Session.get("sortBy") === "specialisation"){
			return true;
		}else{
			return false;
		}
	},
});

Template.allCollection.onRendered(function(){
	// default sort by descending 
	Session.setDefault("sortQuery", -1);
	setSortQuery=function(query){
		if(query === "latest"){
			Session.set("sortQuery", -1);
		}else{
			Session.set("sortQuery", 1);
		}
	};
	setFieldQuery = function(query){
		Session.set("fieldQuery",query);
	}

	// set sort, default sort by date
	Session.setDefault("sortBy", "date");
	setSort=function(criteria){
		Session.set("sortBy",criteria);
	};
});