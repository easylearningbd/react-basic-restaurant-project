import React, { Component } from 'react'
import DISHES from '../../data/dishes.js'
import MenuItem from './MenuItem.jsx'

export class Menu extends Component {

     state = {
          dishes:DISHES
     }



     render() {

          const menu = this.state.dishes.map(item => {
               return (
                    <MenuItem dish={item} key={item.id}  />
               )
          })



          return (
               <div className="container">
                    <div className="row">
                         <div className="col-6">
               {menu}
                         </div>

                         <div className="col-6">
                         <h1>Col 6 Right</h1>
                           </div>

                    </div>
                    
               </div>
          )
     }
}

export default Menu
