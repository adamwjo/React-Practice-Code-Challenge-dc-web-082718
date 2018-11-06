import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props)
  return (
    <Fragment>

      <div className="belt">
        {

          props.displayedSushi.map(sushiObj => {

            if (props.eatenSushi.includes(sushiObj.id)) {

              return <Sushi
                isEaten={true}
                eatSushi={props.eatSushi}
                key={sushiObj.id}
                sushi={sushiObj}/>

            }
            else {

              return <Sushi
                isEaten={false}
                buySushi={props.buySushi}
                eatSushi={props.eatSushi}
                key={sushiObj.id}
                sushi={sushiObj}/>

            }

          })

        }

            <MoreButton nextFour={props.nextFour} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
