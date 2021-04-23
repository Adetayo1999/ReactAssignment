import React from 'react'
import "./Converter.css"
function Converter() {
    return (
        <div className="converter">
            <div className="converter__top">
              <p>Select Currency:</p>
            </div>
            <div className="converter__bottom">
             <form>
                 <div className="form__group">
                     <select >
                        
                         <option value="NGN">TOKEN</option>
                     </select>
                     <input type="text" name="" id="" placeholder="0.00000001"/>
                 </div>
                  <div className="btns">
                  <button type="submit">SEND</button>
                  <button type="submit">RECEIVE</button>
                  </div>
             </form>
            </div>
        </div>
    )
}

export default Converter
