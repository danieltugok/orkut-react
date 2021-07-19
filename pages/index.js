import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />          
    </Box>
  )
}

export default function Home() {
  const githubUser = 'danieltugok';

  const pessasFavoritas = [
    'juunegreiros',
    'omariosouto', 
    'peas', 
    'marcobrunodev', 
    'felipefialho',
    'rafaballerini'
  ];

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        {/* <Box style="grid-area: profileArea"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea'}}>
          <ProfileSideBar githubUser={githubUser}/>
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessasFavoritas.length})
            </h2>

            <ul>

              {pessasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/user/${itemAtual}`} key="{itemAtual}">
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )

              })}

            </ul>

          </ProfileRelationsBoxWrapper>
        </div>      
      </MainGrid>
    </>
  )
}
