import React from "react";

import '../css/displayTransaction.css'


function DisplayTransaction (props){

    return (
     <div>

      <h1 style={{paddingTop:"5px"}}>Transaction history</h1>

         {props.list.map((item) => (
        <div style={{paddingTop:"5%"}} key={item.uid}>

         {item.transactionType == "Expense" ?(
          <div className="transaction-item">
             <div>
                <h4 style={{paddingLeft: '12px', paddingTop: "25px"}} >
                  
                  {item.name}
                  </h4>
            </div>

            <div>
            <h4 style={{paddingLeft:"290px" , paddingTop: "25px"}}>
            {item.amount}
              </h4>
            </div>

            <div className="expense-line"></div>

          </div>

       
         ):(

            <div className="transaction-item">
             <div>
                <h4 style={{paddingLeft: '12px', paddingTop: "25px"}} >{item.amount}</h4>
            </div>

            <div>
            <h4 style={{paddingLeft:"290px" , paddingTop: "25px"}}>{item.name}</h4>
            </div>

            <div className="income-line"></div>

          </div>


         )} 
            

         
        </div>

    ))}
      </div>

    );
}

export default DisplayTransaction;