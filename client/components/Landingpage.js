import React, {Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

class Landingpage extends Component {
    render() {
        return(
           <div className='landingpageborder'>
            <br></br>
            <br></br>
            <div className='firsthalf'>
            <img className='mainimage' src='https://i.pinimg.com/564x/4f/0b/f6/4f0bf658c073ccab6bedf2fa0b9466ca.jpg' height="450" width ="400" ></img>
            
            <div className='definition'>
            <h1>cocktails </h1>
            <hr className='definitionhr'/>
            <p className='italic'>| kok-teyl | noun. </p>
            <h2>an alcoholic drink consisting of a spirit or several spirits mixed with other ingredients. can improve dance moves.</h2>
            </div>
            </div>
            <br></br>
            <br></br>

            <div className='row1'>
  <div className='topdrinksforfall'>
  <div className='drinktitle'>Top 5 Drinks for Fall</div>
  <hr /> 

  <br></br>
  <Carousel responsive={responsive}  ssr={true} renderButtonGroupOutside={true}>

<div className='falldrinks1'><img className='falldrinks' src='https://i.pinimg.com/564x/f3/2f/09/f32f092e26a537d4ee0855b70d5883fe.jpg' height="250" width ="200" ></img>
    <div className='info'>
        <hr/>
        <h3>Pear Vanilla</h3>
        <hr/>
    </div>
</div>
<div className='falldrinks1'><img className='falldrinks' src='https://i.pinimg.com/564x/58/05/74/5805749ab0ded90a1d6ce5361e60d169.jpg' height="250" width ="200" ></img>
    <div className='info'>
        <hr/>
        <h3>White Pumpkin Cocktail</h3>
        <hr/>
    </div>
</div>
<div className='falldrinks1'><img className='falldrinks' src='https://i.pinimg.com/564x/dc/f3/2c/dcf32c35dba54b740f48eed184f146b7.jpg' height="250" width ="200" ></img>
    <div className='info'>
    <hr/>
    <h3>Honey Rose</h3>
    <hr/>
    </div>
</div>
<div className='falldrinks1'><img className='falldrinks' src='https://i.pinimg.com/236x/73/49/47/7349478e073d72990267d8857b51bbbc.jpg' height="250" width ="200" ></img>
    <div className='info'>
    <hr/>
    <h3>Bourbon Pear</h3>
    <hr/>
    </div>
</div>
<div className='falldrinks1'><img className='falldrinks' src='https://i.pinimg.com/236x/0e/3d/44/0e3d442d9d285fcf6ecd45cee6e46937.jpg' height="250" width ="200" ></img>
    <div className='info'>
    <hr/>
    <h3>Cinnamon Bourbon</h3>
    <hr/>
    </div>
</div>
       </Carousel> 
  </div>

  <div className='topdrinksforfall'>
  <div>Cocktails for Apple Season</div>
  <hr /> 

  <br></br>
  <Carousel responsive={responsive}  ssr={true}>

  <div className='falldrinks1'><img className='falldrinks' src='https://i.pinimg.com/564x/6a/50/da/6a50da84299148953ff99f26255fdef4.jpg' height="250" width ="200" ></img>
     <div className='info'>
        <hr/>
        <h3>Apple Cider Magarita</h3>
        <hr/>
    </div>
    </div>
         <div className='falldrinks1'><img className='falldrinks' src='https://i.pinimg.com/564x/3f/5a/f3/3f5af3d4cd432b8a7258cb23f403fc99.jpg' height="250" width ="200" ></img>
     <div className='info'>
        <hr/>
        <h3>Apple Cider Bourbon</h3>
        <hr/>
    </div>
    </div>
       <div className='falldrinks1'><img className='falldrinks' src='https://i.pinimg.com/564x/c8/d0/51/c8d051b1ce2c85cd51262f067f1aa92f.jpg' height="250" width ="200" ></img>
     <div className='info'>
        <hr/>
        <h3>Sour Apple Cocktail</h3>
        <hr/>
    </div>
    </div>
       <div className='falldrinks1'><img className='falldrinks' src='https://i.pinimg.com/564x/f3/d8/61/f3d861396234a13b40c136d3f055ee3d.jpg' height="250" width ="200" ></img>
     <div className='info'>
        <hr/>
        <h3>Honey Crisp Sangria</h3>
        <hr/>
    </div>
    </div>
         <div className='falldrinks1'><img className='falldrinks' src='https://i.pinimg.com/564x/7e/82/c8/7e82c8d1a0f922b45db048843a0733b2.jpg' height="250" width ="200" ></img>
     <div className='info'>
        <hr/>
        <h3>Caramel Apple</h3>
        <hr/>
    </div>
    </div>
       </Carousel> 
  </div>

  <div className='topdrinksforfall'>
  <div>Whiskey Cocktails</div>
  <hr /> 

  <br></br>
  <Carousel responsive={responsive}  ssr={true}>

  <div className='falldrinks1'><img className='falldrinks' src='https://i.pinimg.com/564x/08/96/ec/0896ec44bbd36590acac73bc8a5c3d6c.jpg' height="250"
    width ="200" ></img>
      <div className='info'>
        <hr/>
        <h3>Maple Whiskey Sour</h3>
        <hr/>
    </div>
    </div>
         <div className='falldrinks1'><img className='falldrinks' src='https://i.pinimg.com/564x/17/3a/b5/173ab58b27d0ca2a4aaf1670148a2f5a.jpg' height="250"
    width ="200" ></img>
      <div className='info'>
        <hr/>
        <h3>Lemon Whiskey</h3>
        <hr/>
    </div>
    </div>
       <div className='falldrinks1'><img className='falldrinks' src='https://i.pinimg.com/564x/3a/8d/1a/3a8d1a84ee3d17a5936f77b4bf2b370d.jpg' height="250"
    width ="200" ></img>
    <div className='info'>
        <hr/>
        <h3>Smoke and Cinnamon</h3>
        <hr/>
    </div>
    </div>
       <div className='falldrinks1'><img className='falldrinks' src='https://i.pinimg.com/564x/15/00/75/150075a68634a399f7fdc240821efa75.jpg' height="250"
    width ="200" ></img>
      <div className='info'>
        <hr/>
        <h3>Blood Orange Whiskey</h3>
        <hr/>
    </div>
    </div>
         <div className='falldrinks1'><img className='falldrinks' src='https://i.pinimg.com/564x/5c/6d/e9/5c6de909a64b5252f0c2ea85695dc1ea.jpg' height="250"
    width ="200" ></img>
      <div className='info'>
        <hr/>
        <h3>Vanilla Whiskey</h3>
        <hr/>
    </div>
    </div>
       </Carousel> 
  </div>
  </div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  </div>
        )
    }
}

export default Landingpage




