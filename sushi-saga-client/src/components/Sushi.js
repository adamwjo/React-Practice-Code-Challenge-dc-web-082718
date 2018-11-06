import React, { Fragment } from 'react'

class Sushi extends React.Component{

  clickHandler = (event) => {
    console.log(this.props.sushi)
    this.props.eatSushi(this.props.sushi)
  }



  render(props){
    return (
      <div className="sushi">
        <div className="plate"
              onClick={this.clickHandler}>
          {
            /* Tell me if this sushi has been eaten! */
            this.props.isEaten ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }

}

export default Sushi
