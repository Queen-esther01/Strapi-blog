import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Hero from './components/Hero'
import Container from './components/Container'

const queryClient = new QueryClient()
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Container/>
        </QueryClientProvider>
    )
}

export default App
