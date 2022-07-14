
const string = 'Current results'

class InputKeyword extends HTMLElement {
    connectedCallback(){
        this.innerHTML =
            `<input 
            style="width: 238px; 
            height: 35px; 
            border-radius: 5px; 
            border: 1px solid #BDBDBD; 
            box-sizing: border-box;" 
            placeholder="Keyword"/>`
    }
}

customElements.define( 'input-keyword', InputKeyword)

const sortBar = `
<div
style="width: 270px;
height: 566px;
background: white;
border-radius: 10px;
margin: 16px;
margin-left: 32px">
<div style="margin: 16px;
margin-top: -16px">
    <p style="padding-top: 16px">${string}<p>
    <hr style="width: 238px;
    color: #BDBDBD;
    border: 1px solid #BDBDBD;"/>

    <p>Param 1</p>
    <label><input type="checkbox"/>value 1</label>
    <label><input type="checkbox"/>value 2</label>
    <label><input type="checkbox"/>value 3</label>
    <label><input type="checkbox"/>value 4</label>
    <label><input type="checkbox"/>value 5</label>

    <p>Param 2</p>
    <label><input type="radio" name='param2'/>value 1</label>
    <label><input type="radio" name='param2'/>value 2</label>
    <label><input type="radio" name='param2'/>value 3</label>

    <p>Param 3</p>
    <input 
    type="number"
    min='1000'
    style="width:112px; height: 35px; 
    border-radius: 5px; border: 1px solid #BDBDBD; box-sizing: border-box;" placeholder="min"/>
    <input
    type="number"
    max='100000' 
    style="width:112px; height: 35px; 
    border-radius: 5px; border: 1px solid #BDBDBD; box-sizing: border-box;" placeholder="max"/>

    <p>Param 4</p>
    <input-keyword></input-keyword>

    <button
    type="button"
    style="width: 238px; height: 35px; 
    border-radius: 5px; box-sizing: border-box;
    cursor:pointer;
    background: #56CCF2; border: none;
    margin-top: 18px">
    SEARCH
    </button>
    </div>
</div>`

export default sortBar
