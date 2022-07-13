import './styles.css'
import Card from './components/card'

const root = document.querySelector('#root')

const main = root.insertAdjacentHTML("beforeend", 
`
    ${Card.join(' ')}
`)
