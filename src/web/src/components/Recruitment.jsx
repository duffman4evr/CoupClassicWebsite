import React from 'react';
import {
  Container,
  Divider,
  Header,
  Grid,
  Image,
  Popup
} from 'semantic-ui-react';
import Warrior from '../media/warrioricon.png';
import Priest from '../media/priesticon.png';
import Mage from '../media/mageicon.png';
import Warlock from '../media/warlockicon.png';
import Rogue from '../media/rogueicon.png';
import Druid from '../media/druidicon.png';
import Paladin from '../media/paladinicon.png';
import Hunter from '../media/huntericon.png';

const high = { Paladin };
const low = { Druid, Warrior };
const closed = { Priest, Mage, Warlock, Rogue, Hunter };
const totalClasses =
  Object.keys(high).length +
  Object.keys(low).length +
  Object.keys(closed).length;

const displayClasses = obj => (
  <Grid columns={totalClasses}>
    {Object.entries(obj).map(([key, value]) => (
      <Grid.Column>
        <Popup content={key} trigger={<Image src={value} />} />
      </Grid.Column>
    ))}
  </Grid>
);

const Recruitment = () => (
  <Container
    style={{ 'background-color': '#DEDEDE', height: 'calc(100vh - 50px)' }}
  >
    <Header as='h1'>Current Recruitment Needs</Header>
    <Divider />
    <Container text style={{ 'padding-bottom': '50px' }}>
      <Header as='h2'>High</Header>
      <Divider />
      {displayClasses(high)}
      <Header as='h2'>Low</Header>
      <Divider />
      {displayClasses(low)}
      <Header as='h2'>Closed</Header>
      <Divider />
      {displayClasses(closed)}
    </Container>
  </Container>
);

// const RecruitmentContainer = styled.div`
//   margin: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: black;
//   color: white;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   a {
//     text-decoration: none;
//     color: blue;
//   }
//   .recruitContent {
//     width: 90%;
//     h3 {
//       font-size: 4rem;
//       margin-top: 8vh;
//     }
//     p {
//       font-size: 2rem;
//     }
//   }
//   @media screen and (max-width: 420px) {
//     height: 60vh;
//     .recruitContent {
//       h3,
//       h1,
//       p {
//         font-size: 12px;
//         margin-top: 2vh;
//       }
//     }
//   }
// `;

// const RecruitmentIcons = styled.div`
//   background-repeat: no-repeat;
//   display: flex;
//   width: 100%;
//   align-items: center;
//   justify-content: space-between;
//   flex-direction: column;
//   .box {
//     border: 1px solid white;
//     margin: 2vw;
//     padding: 2vw;
//   }
//   h1 {
//     margin-top: 2vh;
//   }
//   @media screen and (max-width: 420px) {
//     .box {
//       width: 10vw;
//       height: 4vh;
//       padding: 2vw;
//       margin: 2vw;
//       font-size: 12px;
//     }
//   }
// `;

// const RecruitmentSection = styled.div`
//   display: flex;
//   margin: 1vh 0 1vh 0;
//   flex-direction: row;
//   width: 50%;
//   align-items: center;
//   justify-content: space-evenly;
//   @media screen and (max-width: 420px) {
//     padding: 0vw;
//     margin: 0vw;
//   }
// `;

// class Recruitment extends Component {
//   render() {
//     return (
//       <RecruitmentContainer>
//         <div className='recruitContent'>
//           <h3>Current Recruitment Needs:</h3>

//           <RecruitmentIcons>
//             <h1>High</h1>
//             <br />
//             <RecruitmentSection>
//               <div
//                 style={{
//                   backgroundImage: `url(${paladin})`,
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundSize: 'cover'
//                 }}
//                 className='box '
//               >
//                 Paladin
//               </div>
//             </RecruitmentSection>
//             <h1>Low</h1>
//             <RecruitmentSection>
//               <div
//                 style={{
//                   backgroundImage: `url(${druid})`,
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundSize: 'cover'
//                 }}
//                 className='box '
//               >
//                 Druid
//               </div>
//               <div
//                 style={{
//                   backgroundImage: `url(${warrior})`,
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundSize: 'cover'
//                 }}
//                 className='box'
//               >
//                 Warrior
//               </div>
//             </RecruitmentSection>
//             <h1>Closed</h1>
//             <RecruitmentSection>
//               <div
//                 style={{
//                   backgroundImage: `url(${hunter})`,
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundSize: 'cover'
//                 }}
//                 className='box '
//               >
//                 Hunter
//               </div>
//               <div
//                 style={{
//                   backgroundImage: `url(${warlock})`,
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundSize: 'cover'
//                 }}
//                 className='box '
//               >
//                 Warlock
//               </div>
//               <div
//                 style={{
//                   backgroundImage: `url(${mage})`,
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundSize: 'cover'
//                 }}
//                 className='box '
//               >
//                 Mage
//               </div>
//               <div
//                 style={{
//                   backgroundImage: `url(${rogue})`,
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundSize: 'cover'
//                 }}
//                 className='box '
//               >
//                 Rogue
//               </div>
//               <div
//                 style={{
//                   backgroundImage: `url(${priest})`,
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundSize: 'cover'
//                 }}
//                 className='box '
//               >
//                 Priest
//               </div>
//             </RecruitmentSection>
//           </RecruitmentIcons>

//           <p>
//             For more details on our recruitment process click{' '}
//             <a
//               href='https://docs.google.com/document/d/1fyi17yMVqoKDlBcIsfhcvyWeAQJbnvhCO0x3MTtrrvo/edit'
//               target='_blank'
//               rel='noopener noreferrer'
//             >
//               here
//             </a>
//           </p>
//         </div>
//       </RecruitmentContainer>
//     );
//   }
// }

export default Recruitment;
