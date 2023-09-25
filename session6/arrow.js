const student = {
    name: "Pouria",
    lastName: "J",
    printName: function(){
        console.log("My name", this.name)
    }
}

function log(){
    console.log(this);
}

log = log.bind({"salam":2})
log();