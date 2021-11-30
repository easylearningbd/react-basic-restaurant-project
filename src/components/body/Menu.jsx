import React, { Component } from 'react'
import { Container, Row,Modal,Button } from 'react-bootstrap'
import DISHES from '../../data/dishes.js'
import DishDetail from './DishDetail.jsx'
import MenuItem from './MenuItem.jsx'

export class Menu extends Component {

     state = {
          dishes:DISHES,
          selectedDish: null,
          show: false
     }

     modalClose = () => this.setState({show:false});
     modalOpen = () => this.setState({show:true});

     onDishSelect = dish => {
           
          this.setState({selectedDish:dish, show:!this.state.show });
     }


     render() {

          const menu = this.state.dishes.map(item => {
               return (
                    <MenuItem dish={item} key={item.id} 
                    DishSelect = {() => this.onDishSelect(item)}  />
               )
          })

          let dishDetail = null;
          if(this.state.selectedDish != null){
               dishDetail = <DishDetail dish={this.state.selectedDish} />
          }

          return (
               <Container fluid={true}>
                    <Row lg={3} md={3} sm={6} xs={6}>
               {menu}
                    </Row>




       <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
     
            <Modal.Body> 
             {dishDetail}
              </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.modalClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>





               </Container>
          )
     }
}

export default Menu
