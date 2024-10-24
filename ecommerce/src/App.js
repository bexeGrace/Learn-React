// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
// import Badge from 'react-badge';
import Navabar from './Components/Navabar'
import Content from "./Components/Content";
import ImgTH1 from './Assets/Images/image-product-1-thumbnail.jpg'
import ImgTH2 from "./Assets/Images/image-product-2-thumbnail.jpg"
import ImgTH3 from "./Assets/Images/image-product-3-thumbnail.jpg"
import ImgTH4 from "./Assets/Images/image-product-4-thumbnail.jpg"
import Img1 from './Assets/Images/image-product-1.jpg'
import Img2 from './Assets/Images/image-product-2.jpg'
import Img3 from './Assets/Images/image-product-3.jpg'
import Img4 from './Assets/Images/image-product-4.jpg'

function App() {
  //Variables necessary for the appliation

  const Images = [Img1, Img2, Img3, Img4]
  const imageTHs =[ImgTH1, ImgTH2, ImgTH3, ImgTH4]

  //States necessary for the application

  const [currentPicture, setCurrentPicture] = useState(Images[0])
  const [counter, setCounter] = useState(0)
  const [showCart, setShowCart] = useState(false)
  const [itemInCart, setItemInCart] = useState({
    itemName:"",
    itemNumber:0,
    itemPrice:''
  })

  //Functions or methods to run the system

  function changeCurrentPicture(event){
    let currImg;
    if (event.target.className === 'picture--image img1'){
      currImg = Images[0]
    }else if(event.target.className === 'picture--image img2'){
      currImg = Images[1]
    }else if(event.target.className === 'picture--image img3'){
      currImg = Images[2]
    }else{
      currImg = Images[3]
    }
    setCurrentPicture(prevState =>{
      return(
        currImg
      ) 
    })
  }

  function changeCounter(event){
    setCounter(prevState => {
      return(
        event.target.id === 'plus' ? prevState + 1 : counter > 0 && prevState - 1 
      )
    } )
  }

  function addToCart(){
    setItemInCart(prevState=>{
      const num = counter
      if(num){
        return({
          ...prevState,
          itemName:"Sneaker",
          itemNumber: num,
          itemPrice: "$125:00"
        })
      }else{
        return(prevState)
      }
    })
    setCounter(0) 
  }


  let tempNum = itemInCart.itemPrice.slice(1,itemInCart.itemPrice.length - 3)
  const numToPrint = '$' + String(parseInt(tempNum) * itemInCart.itemNumber) + '.00'
  const fullCart = 
    <div className='nav--cart-full'>
      <div id='ls'>
        <img src={ImgTH1} alt='showed item'/>
        <div id='txtNAV'>
          <p>Fall Limited Edition Sneakers</p>
          <p>{`${itemInCart.itemPrice} x ${itemInCart.itemNumber}`} <b>{'  ' + numToPrint}</b></p>
        </div>
        <svg onClick={deleteItem} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
</svg>

      </div>
      <div className='button'>Checkout</div>
    </div>

  const addToCartHandle = 
      <div className= {showCart ?"nav--cart": 'nav--cart-hide'}>
        <div className="nav--cart-nav">
          <h3>Cart</h3>
        </div>
        <div className="nav--cart-main">
          {itemInCart.itemNumber ? fullCart: "Your cart is empty"} 
        </div>
      </div>
  
  function cartClickHandle(){
    setShowCart(prevState=>!prevState)
  }

  function deleteItem() {
    setItemInCart(prevState =>{
      return({
        ...prevState,
        itemName:'',
        itemNumber:0
      })
    })
  }



  return (
    <div className="App">
      <Navabar 
        count={counter}
        item={itemInCart}
        popUp={addToCartHandle}
        click={cartClickHandle}
      />
      <Content 
        currentPicture={currentPicture}
        imageTHs={imageTHs}
        changeCurrentPicture={changeCurrentPicture}
        changeCounter={changeCounter}
        count={counter}
        addToCart={addToCart}
      />
    </div>
  );
}


export default App;





