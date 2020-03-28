import React, { Component } from 'react';
import {Carousel, Container} from 'react-bootstrap';
import {PokemonContext} from '../Context';
import BoxImage from './BoxImage';


export default class CarouselHome extends Component {

  static contextType = PokemonContext

  render() {

    const { featured, aquirable, weakers} = this.context;


    
    
    return(
      <Container className="carousel-slide-pokemons">
      
      <Carousel>
        {featured.map((item) => {
          return <Carousel.Item>
                    
                    <BoxImage id={item.Row}/>
                      <p className="pokemon-info">{item.Name}</p>
                      <div className="featured-top">
                      <p>Featured</p>
                      </div>
                    
                  
                  </Carousel.Item>
        }
        )
  }
      </Carousel>
      <Carousel>
        {aquirable.map((item) => {

          let id = item.Row < 100?`0${item.Row}`:item.Row
          let firstid = item.Row < 10?`00${item.Row}`:id

          return <Carousel.Item>
                    
                    <BoxImage id={firstid || id}/>
                      <p className="pokemon-info">{item.Name}</p>
                      <div className="featured-top">
                      <p>The Firsts</p>
                      </div>
                  
                  </Carousel.Item>
        }
        )
  }
      </Carousel>
      <Carousel>
        {weakers.map((item) => {
          let id = item.Row < 100?`0${item.Row}`:item.Row
          let firstid = item.Row < 10?`00${item.Row}`:id

          return <Carousel.Item>
                  
                    <BoxImage id={firstid || id}/>
                      <p className="pokemon-info">{item.Name}</p>
                      <div className="featured-top">
                      <p>Weakers</p>
                      </div>
                  
                  </Carousel.Item>
        }
        )
  }
      </Carousel>
      </Container>
    )

  }
}
  

