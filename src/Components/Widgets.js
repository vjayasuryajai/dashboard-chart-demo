import React from 'react'
import {Card} from 'react-bootstrap'
import './Widgets.css'
 

function Widgets() {
    return (
        <div className="container">
           <div className="row mt-4">
              <div className="col">
                   <Card  className="cardItem">
                        fff
                   </Card>
              </div>
              <div className="col">
                    <Card  className="cardItem">
                        fff
                   </Card>
              </div>
              <div className="col">
                   <Card  className="cardItem">
                        fff
                   </Card>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col">
                  <Card  className="cardbig">
                         
                 </Card>
              </div>
            </div>
         </div>
    )
}

export default Widgets
