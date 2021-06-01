import {Card} from 'react-bootstrap'
import './Widgets.css'
import React, { Component } from 'react'
import {Line ,Pie } from 'react-chartjs-2'
export class Widgets extends Component {

   constructor(props) {
        super(props)
   
        this.state = {
       data  :{

               labels : ['Jan','Feb','Mar','Apr'],

               datasets: [{
                    label: 'My First dataset',
                   // lineTension: 0.1,
                   // borderColor: 'rgba(75,192,192,1)',
                   // backgroundColor : 'black',
                    //pointBorderColor:'red',
                    backgroundColor: [
                         'rgb(255, 99, 132)',
                         'rgb(54, 162, 235)',
                         'rgb(255, 205, 86)',
                         "green"
                         
                       ],

                    data: [65, 59, 80,88]
               }]
               
               }
              
        }

      
   }
   

  

     render() {
          return (
               <div className="container">
           <div className="row mt-4">
              <div className="col">
                   <Card  className="cardItem">
                      <Pie 
                      data={this.state.data}
                  width={10}
                  height={10}
                  options={{ maintainAspectRatio: false }} /> 
                      
                      
                   </Card>
              </div>
              <div className="col">
                    <Card  className="cardItem">
                    <Card.Body className="D">
                    <Line
                    data={this.state.data}
                    width={10}
                    height={10}
                    options={{ maintainAspectRatio: false }} /> 
                    </Card.Body>
                   </Card>
              </div>
              <div className="col">
                   <Card  className="cardItem">
                   <Card.Body className="D">
                   <Line
                   data={this.state.data}
                   width={10}
                   height={10}
                   options={{ maintainAspectRatio: false }} /> 
                   </Card.Body>
                   </Card>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col">
                  <Card  className="cardbig">
                    <Card.Body className="D">
                  <Line
                  data={this.state.data}
                  width={10}
                  height={10}
                  options={{ maintainAspectRatio: false }} /> 
                  </Card.Body>
                 </Card>
              </div>
            </div>
         </div>
          )
     }
}

export default Widgets

