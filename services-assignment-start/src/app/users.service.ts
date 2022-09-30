export class Users{
    activeUsers=["a", "b" , "c"]
    inactiveUsers=["d"]
    constructor(){

    }
    getUsers(type: string){
        if (type!="active") return this.inactiveUsers
        return this.activeUsers;
    }
    updateUsers(status: number , Name : string){
        console.log(Name)
        if (Name =="active"){
         
            this.inactiveUsers.push(this.activeUsers[status])
            this.activeUsers.splice(status,1)
            
        }else{            
            this.activeUsers.push(this.inactiveUsers[status])
            this.inactiveUsers.splice(status,1)
        }
            console.log(this.activeUsers, this.inactiveUsers)
        
    }
}