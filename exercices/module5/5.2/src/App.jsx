import { VoteProvider } from './contexts/opinion.context'
import OpinionForm from './components/OpinionForm'
import OpinionsList from './components/OpinionsList'
import './App.css'

function App() {
  return (
    <VoteProvider>
        <OpinionsList />
        <OpinionForm />
    </VoteProvider>
  )
}

export default App
