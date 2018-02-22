import React from 'react';
import 'preact-material-components/List/style.css';
import 'preact-material-components/TextField/style.css';
import { TextField, Card, CardTitle, CardText } from 'react-md';
import { List, ListItem, FontIcon } from 'react-md';

import './style.css';
import { localizedText } from '../../../../utils';

const SwotCard = ({ items, text, cardType, onChange, onSubmit }) => {
  return (
    <div>
      <form method="POST" onSubmit={ (e) => {
        e.preventDefault();
        onSubmit(text, cardType);
      } }>
        <TextField
          id="id-is-required"
          onChange={ onChange }
          value={ text }
          label={ localizedText().swot.cardType[cardType] }
          lineDirection="center"
          placeholder={`Add ${localizedText().swot.cardType[cardType]}`}
        />
      </form>
      <Card className='swot-card'>
        <CardText>
          {
            items.length > 0 &&
            <List>
              {
                items.map((item, index) => (
                  <ListItem
                    key={ index }
                    primaryText={ item.text }
                    secondaryText={ `brownbear` }
                    rightIcon={<FontIcon>arrow_drop_up</FontIcon> }
                  >
                  </ListItem>
                ))
              }
            </List>
            || <CardTitle title={ localizedText().swot.cardType[cardType] } />
          }
        </CardText>
      </Card>
    </div>
  );
};

export default SwotCard;
