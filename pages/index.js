import Head from 'next/head'

export default function Home() {
  return (
    <div style={{ padding: '50px', fontFamily: 'Arial, sans-serif' }}>
      <Head>
        <title>well2</title>
        <meta name="description" content="Auto-generated project from deven.site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#0070f3', marginBottom: '20px' }}>
          Welcome to well2! 🚀
        </h1>
        
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
          This project was automatically generated and deployed via deven.site automation.
        </p>
        
        <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
          <h2 style={{ color: '#333' }}>Quick Start</h2>
          <p>Edit <code style={{ backgroundColor: '#e1e1e1', padding: '2px 4px' }}>pages/index.js</code> to customize this page.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://nextjs.org/docs"
            style={{
              padding: '10px 20px',
              backgroundColor: '#0070f3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px'
            }}
          >
            📚 Documentation
          </a>
          <a
            href="https://github.com/vercel/next.js"
            style={{
              padding: '10px 20px',
              backgroundColor: '#333',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px'
            }}
          >
            💻 GitHub
          </a>
        </div>
      </main>
    </div>
  )
}
