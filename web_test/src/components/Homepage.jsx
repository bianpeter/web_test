import React from 'react'
import '../App.scss';
import MenuB from './MenuB';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { styled } from '@material-ui/core/styles';

const MyPlayArrowIcon = styled(PlayArrowIcon)({
  width: 100,
  height:100,
  border: "solid 1px white",
  borderRadius: "50px",
  color: 'white',
  position: "absolute",
  left:"33%",
  top:"30%",
});

function Homepage() {

  
  return (
    <div>
      <h1>MEDIA APPEREANCES</h1>
      <MenuB/>
      <div className="content">
        <div className="block">
          <h3>Science</h3>
          <h3>Magazine</h3>
          <h3>11.12.2018</h3>
          <p>Want to master your professional and social networks to maximize recognition? Want to build productive teams that create lasting impact? In his new book, The Formula: The Universal Laws of Success, Albert-László Barabási translates almost a decade of scholarly research on the science of success into a lively...</p>
          <h4>READ MORE</h4>
        </div>
        <div className="block white">
          <h3>Nature</h3>
          <h3>27.11.2018</h3>
          <p className="white">Originally printed by the National Academies of Sciences as a poster to accompany the publication of a research paper on how diseases connect, it was subsequently reproduced by the New York Times and included in the Mapping It Out: Atlas of Contemporary Cartographies exhibition at the Serpentine Gallery in London...</p>
          <h4>READ MORE</h4>
        </div>
        <div className="block">
          <MyPlayArrowIcon/>
          <h3 id="bottom-h3">Lecture at NYU</h3>
          <h4 >WATCH</h4>
        </div>
      </div>
    </div>
  )
}

export default Homepage
