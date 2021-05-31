import FlexCore from './components/FlexCore/index'

const Home = (): any => {
  return (
    <>
      <div
        style={{
          width: '1200px',
          height: '100vh',
          margin: '0 auto',
          background: '#fff',
          textAlign: 'center',
          padding: '30px',
        }}
      >
        <h1>Flex tools</h1>
        <FlexCore />
      </div>
    </>
  )
}

export default Home
