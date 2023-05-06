import { useState } from 'react'
import './App.css'

export default function App() {

  const [val, setVal] = useState(''),
        [valDate, setValDate] = useState(''),
        [valCVV, setValCVV] = useState('');

  const change = e => { 

      const formattedCardNumber =  formatCardNumber (e.target.value);
      setVal(formattedCardNumber); 

    };
  const changeDateInput = e => { 

      const formattedDate =  formatDate(e.target.value);
      setValDate(formattedDate); 

    };

  const changeCVVinput = e => { 

      const formattedDate =  formatCVV(e.target.value);
      setValCVV(formattedDate); 

    };  


    return (
      <div className="App">
        <p className="card_add">Добавление карты</p>
        <div className="card_no">Номер карты</div>
        <input type="text" className="card_input" 
              onChange={e => change(e)} value ={val} />
        <div className="card_underline" ></div>
        <input type="text" className="date_input" placeholder='мм/гг' 
              onChange={e => changeDateInput(e)} value ={valDate}  />
        <div className="date_underline"></div>
        <input type="text" placeholder='CVV' className="cvv_input"
        onChange={e => changeCVVinput(e)} value ={valCVV} />
        <div className = "add_button_box" ></div>
        <div className="add_button_box"><p>Добавить</p></div>
  
      </div>
    )


function formatCardNumber (value) {

    if (!value) return value;

       const cardNumber  = value.replace(/[^\d]/g, '');

    if (cardNumber.length<5) {
        return cardNumber ; 
        }
  
    if (cardNumber.length<9) {
        return `${cardNumber.slice(0, 4)} ${cardNumber.slice(4, 8)}`;
        }
  
  
    if (cardNumber.length<13){
        return`${cardNumber.slice(0, 4)} ${cardNumber.slice(4, 8)} ${cardNumber.slice(8, 12)}`;
        }

    if (cardNumber.length>=13){

          return`${cardNumber.slice(0, 4)} ${cardNumber.slice(4, 8)} ${cardNumber.slice(8, 12)} ${cardNumber.slice(12, 16)}`;
          }
          }
    
    


function formatDate (value) {

    if (!value) return value;


       const expDate  = value.replace(/[^\d]/g, '');

    if (expDate.length<3) {
        return expDate; 
        }
  
    if (expDate.length>=3) {

        return `${expDate.slice(0, 2)}/${expDate.slice(2, 4)}`;
        

              }
        }
  }

  function formatCVV (value) {

    if (!value) return value;

       const CVV_number = value.replace(/[^\d]/g, '');

    if (CVV_number.length<4) {
        return CVV_number ; 
        }

    if (CVV_number.length>=4) {  

            return CVV_number.slice(0, 3);
        }
      }
   