import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'; // ✅ Import BrowserRouter
import './index.css';
import App from './App.jsx';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql', // Replace with your real GraphQL endpoint
    cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter> {/* ✅ Wrap App in BrowserRouter */}
                <App/>
            </BrowserRouter>
        </ApolloProvider>
    </StrictMode>
)
