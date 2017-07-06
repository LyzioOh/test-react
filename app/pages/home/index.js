import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CharacterCard from '../shared/CharacterCard.jsx';
import { deleteCharacterAction } from '../../reducers/character';

import './home.scss';

const Home = ({ characters, properties, actions }) => (
  <div className="home">
    <div className="button" onClick={() => browserHistory.push(`/character`)}>Add a character</div>
    <div className="characters">
      <div className="characters__item characters__item--head">
        {properties.map((property, i) => (
          <div key={i} className="characters__property">{property.label}</div>
        ))}
        <div className="characters__property characters__property--button">Edit</div>
        <div className="characters__property characters__property--button">Delete</div>
      </div>
      {characters.map((character, i) => (
        <div key={i} className="characters__item">
          {properties.map((property, j) => (
            <div key={j}className="characters__property">{character[property.key]}</div>
          ))}
          <div className="characters__property button" onClick={() => browserHistory.push(`/character/${i}`)}>Edit</div>
          <div className="characters__property button button--red" onClick={() => actions.deleteCharacterAction(i)}>Delete</div>
        </div>
      ))}
      <div className="character">
      <div className="character-body">
        <div className='character-name'>
          John Doe
        </div>
        <div className='properties'>
          <div className='property-name'>
            Plant
            <img src='https://www.iconexperience.com/_img/g_collection_png/standard/512x512/plant.png'/>
          </div>
          <div className='property'>
            <div className='property-name'>
              Birth:
            </div>
            <div className='property-value'>
              15/06/2013
            </div>
          </div>
                </div>
          <div className='footer'>
            <div className='footer-item'>
              <div className="characters__property button" onClick={() => browserHistory.push(`/character/${i}`)}>Edit</div>
            </div>
            <div className='footer-item'>
              <div className="characters__property button button--red" onClick={() => actions.deleteCharacterAction(i)}>Delete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  characters: state.character.characters,
  properties: state.character.properties
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
