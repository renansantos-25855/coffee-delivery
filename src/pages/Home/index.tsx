// import { Card } from '../../components/Card'
import { Banner } from './components/Banner'
import { CoffeeList } from './styles'
import { Card } from '../../components/Card'
import { coffees } from '../../../data.json'

export interface Coffee {
  id: number
  image: string
  tags: string[]
  name: string
  description: string
  price: number
}

export function Home() {
  return (
    <div>
      <Banner />
      <CoffeeList>
        <h2>Nossos cafés</h2>
        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </div>
  )
}
