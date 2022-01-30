import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Button from './Button';

storiesOf('Button', module).add('example', () => 
<Button 
    onPress={()=>{console.log("okok")}} 
    btnName="submit"
    // style={{ backgroundColor : "green" }}
    />);