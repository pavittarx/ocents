import * as React from 'react';
import * as Adapter from "enzyme-adapter-react-16";
import {shallow, mount, configure} from 'enzyme';
import IndexPage from '../pages/index';

configure({adapter: new Adapter()});

describe('Pages', () => {
  describe('Index', () => {
    it('The page should exist', function () {
      expect(IndexPage).toBeDefined();
    })

    it('Shallow Copy', ()=>{
      const wrapper = shallow(<IndexPage />);
      expect(wrapper.exists()).toBeTruthy();
    })
  })  
})