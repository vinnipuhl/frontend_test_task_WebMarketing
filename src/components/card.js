import * as dataArray from '../../dataset.json'
import first from '../img/1.jpg'
import second from '../img/2.jpg'
import third from '../img/3.jpg'
import fourth from '../img/4.jpg'
import fifth from '../img/5.jpg'
import sixth from '../img/6.jpg'

let data = dataArray
data = data.stock
console.log(data)

const images = [first, second, third, fourth, fifth, sixth]
console.log(images)

const card = data.map((car, i) => {
    return(
`<div class='card' id=${i}>
    <div class='frameForImage'>
        <img
        class="fit-picture"
        src='${images[i]}'
        alt="Grapefruit slice atop a pile of other slices"/>
    </div>
</div>`)
})


export default card