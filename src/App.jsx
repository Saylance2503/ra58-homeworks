import React from 'react';
import useJsonFetch from './useJsonFetch';

function DataComponent() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data', {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <p>Data: {JSON.stringify(data)}</p>;
}

function ErrorComponent() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error', {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <p>Data: {JSON.stringify(data)}</p>;
}

function LoadingComponent() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading', {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <p>Data: {JSON.stringify(data)}</p>;
}

function App() {
  return (
    <div>
      <DataComponent />
      <ErrorComponent />
      <LoadingComponent />
    </div>
  );
}

export default App;
