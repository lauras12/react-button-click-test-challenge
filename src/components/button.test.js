import React from 'react';
import {shallow} from 'enzyme';
import jest from 'jest';

import Button from './button';

describe('<Button />', () => {
    it('Should call props.onClick when the button is clicked', () => {
        let onClick = jest.fn();
        
        const wrapper = shallow(<Button onClick={onClick} />);
        expect(onClick.call.length)toBe(0);                   
        wrapper.find('button').simulate('click');
        expect(onClick.call.length)toBe(1); 
    });
});
