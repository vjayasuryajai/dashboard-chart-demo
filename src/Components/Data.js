import React, { Component } from 'react'
import axios from 'axios'
export class Data extends Component {


    constructor(props) {
        super(props)
        this.state = {  co : [],
           newData :[],
           ob : []
        }
        this.fetchdata = this.fetchdata.bind(this) 
    }
    


          componentDidMount(){ this.fetchdata()}

     fetchdata(){
      axios.get(`https://api.covid19india.org/v4/min/data.min.json`)
    .then(data=> {
    
         this.setState({co : data.data.TN})


    })
    .catch(err=> console.log(err))


}


    render() {  
     
         const data = this.state.co.districts
           
        
        return (
            <div>
              //  {console.log(data)}
            </div>
        )
    }
}

export default Data
