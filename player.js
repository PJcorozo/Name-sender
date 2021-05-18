class Player{
    constructor(){

    }

    //read the playerCount value from the database
    getCount(){
        db.ref("playerCount").on("value",function(data){
            playerCount = data.val()
        })
    }

    //writing the playerCount value to the database
    updateCount(count){
        db.ref("/").update({
            playerCount:count
        })
    }

    //writing the player name value to the database
    updateInfo(name){
        db.ref("player"+playerCount).set({
            name:name
        })
    }
}