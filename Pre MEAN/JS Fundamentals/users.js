function usersLanguages(user){
    for (var i = 0; i < user.length; i++){
        var interest = [];
        for (let key in user[i]['interests']){
            for (var j = 0; j < user[i]['interests'][key].length; j++){
                interest.push(" " + user[i]['interests'][key][j]) 
            }
        }
        console.log(user[i]['fname'] + " " + user[i]['lname'] + " knows " + user[i]['languages'] + ".")
        console.log(user[i]['fname'] + " is also interested in" + interest)
    }
    return
    
}


users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
]

usersLanguages(users)
