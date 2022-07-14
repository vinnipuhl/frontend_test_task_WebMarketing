import * as dataArray from '../../dataset.json'
import first from '../img/1.jpg'
import second from '../img/2.jpg'
import third from '../img/3.jpg'
import fourth from '../img/4.jpg'
import fifth from '../img/5.jpg'
import sixth from '../img/6.jpg'

let data = dataArray
data = data.stock

const images = [first, second, third, fourth, fifth, sixth]

class TagsForSort extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="tags custom"
        style="margin-left: 8px;">
            <p
            class='txtDescriptions'
            style="color: white;
            line-height: 30px">${this.innerHTML}</p></div>`
    }
}

customElements.define( 'tag-for-sort', TagsForSort)

function falseSize(i){
    return( i === 0 ? 'width: 237px;' : 'width: 224px;')
}

const card = data.map((car, i) => {
    return(
`
<div class='card' 
style='
    display: flex;
    width: 850px;
    height: 200px;
    background-color: white;
    margin-top: 16px;
    border-radius: 10px' 
id={i}>
    <div class='frameForImage'
    style="
    margin: 16px;
    margin-right: 0;
    ${falseSize(i)}
    height: 168px;
    border-radius: 10px">
        <img
        style="
        border-radius: 10px;
        object-fit: contain;
        width: 100%;
        height: 100%;"
        src=${images[i]}
        alt=${car.model}/>
    </div>
    <div style="width: 610px;">
        <div style="
        width: 100%;
        display: flex">
            <p
            class='txtStrong'
            style='
            margin:16px;
            margin-bottom: 0;
            width: 80%'
            >${car.title}</p>
            <div style="
            width: 20%;
            margin: 0 0 0 auto;
            margin-right: 16px;">
                <p
                class='txtStrong'
                style="
                text-align: end;
                width: 100%;
                font-size: 16px">
                ${car.price_currency} ${car.price} 
                </p>
            </div>
        </div>

        <p
        class='txtDescriptions'
        style="
        color:#828282;
        margin-left: 16px;
        margin-top: 7px"
        >
        Description: ${car.model}. </br>
        ${car.make}</br>
        ${car.type}
        </p>

        <div style="display: flex;
        margin: 8px;">
            <tag-for-sort>${car.year}</tag-for-sort>
            <tag-for-sort>${car.mileage} ${car.mileage_measure}</tag-for-sort>
            <tag-for-sort>${car.mileage} ${car.mileage_measure}</tag-for-sort>
            <tag-for-sort>${car.axle_configuration}</tag-for-sort>
            <tag-for-sort>${car.power} ${car.power_measure}</tag-for-sort>
            <tag-for-sort>${car.payload}</tag-for-sort>
            <tag-for-sort>${car.gross_weight}</tag-for-sort>
        </div>
    </div>
</div>
`)
})

const cardList = `
<div
id='cardList'
style="width: 850px">
${card.join(' ')}
</div>`

export default cardList