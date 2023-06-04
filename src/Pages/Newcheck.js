import React, { Component }from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const hide = "hidden"
const visible = "visible"

class Newcheck extends Component {
constructor(props){
  super(props);
  this.state = {visibility: hide};
  this.checkItem = this.checkItem.bind(this);
}
checkItem(){
  const check = this.state.visibility === hide? visible : hide;
  this.setState({visibility: check})
} 
render(){
  return (
    <Container fluid className='checklistSection'>
      <Row className='everythingButFooter'
      >
        <Col xs={{span: 10, offset: 1}} className='checklistContainer'>

        <Row className='checklistItem'>
          <Col>
          <h6>CEREMONY VENUE</h6>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
        
          <h6>CLOTHING</h6>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>
          
          </Col>
          <Col>
          <h6>PHOTOGRAPHY</h6>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>

          <h6>STATIONERY</h6>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>
        
          <h6>FLOWERS</h6>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>
          
          </Col>
          <Col>
          <h6>RECEPTION VENUE</h6>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>
          </Col>
          <Col>
          <h6>FOOD</h6>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>

          <h6>DRINKS</h6>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>
          </Col>
          <Col>
          <h6>FAVOURS</h6>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>

          <h6>RINGS</h6>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>

          <h6>HONEYMOON</h6>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum </span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor sit</span></div>
          <div onClick={this.checkItem}><span className='checked'><span style={{visibility: this.state.visibility}}>✔</span></span><span>Lorem ipsum dolor</span></div>
          </Col>

        </Row>

        </Col>
      </Row>
      </Container>
  )
}
}

export default Newcheck