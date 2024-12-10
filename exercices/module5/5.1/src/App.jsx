import './App.css'
import { VoteProvider } from './contexts/vote.context'
import Vote from './components/votes/Vote'


function App() {
  return (
    <VoteProvider>
      <div>
        <Vote />
      </div>
    </VoteProvider>
  )
}

export default App
