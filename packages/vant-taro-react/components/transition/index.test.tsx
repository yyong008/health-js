import React from 'react';
import { mount } from '@cypress/react';
import TransitionManage from './index';

it('test render transition-manage', () => {
    mount(<TransitionManage show={true}/>);
})