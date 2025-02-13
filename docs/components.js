module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'String',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"Title task",
                        example:"Trip list"
                    },
                    completed:{
                        type:'boolean',
                        description:"task status",
                        example:false
                    }
                }
            }
        }
    }
}
