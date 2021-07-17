import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `



export default function Home() {
  return (
    <MainGrid>
      {/* <Box style="grid-area: profileArea"> */}
      <div className="profileArea" style={{ gridArea: 'profileArea'}}>
        <Box>
          <img src="https://github.com/danieltugok.png" />          
        </Box>
      </div>

      <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
        <Box>
          Bem vindo
        </Box>
      </div>

      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
        <Box>
          Comunidade
        </Box>
      </div>

      
    </MainGrid>
  )
}
