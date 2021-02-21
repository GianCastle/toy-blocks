import React from 'react';
import BlockList from './BlockList'
import { create } from "react-test-renderer";

describe('BlockList', () => {
    it("should match snapshot", () => {
        const component = create(
            <BlockList />
        );
        const tree = component.toJSON();
    
        expect(tree).toMatchSnapshot();
      });
})