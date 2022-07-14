import './styles.css'
import CardList from './components/cardList'
import SortBar from './components/sortBar'

const root = document.querySelector('#root')

root.insertAdjacentHTML("beforeend", 
`
<div style='display: flex'>
    ${SortBar}
    ${CardList}
</div>
`)
