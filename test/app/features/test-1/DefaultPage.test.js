import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, shallow } from 'enzyme';
import { expect } from 'chai';
import ConnectedDefaultPage, { DefaultPage } from 'features/test-1/DefaultPage';

const pageProps = {
  test1: {},
  actions: {},
};

const store = createStore(state => state, pageProps);

describe('test-1/DefaultPage', () => {
  it('redux connect works', () => {
    const wrapper = render(
      <Provider store={store}>
        <ConnectedDefaultPage />
      </Provider>
    );

    expect(
      wrapper.find('.test-1-default-page').length
    ).to.equal(1);
  });

  it('renders node with correct dom structure', () => {
    const renderedComponent = shallow(
      <DefaultPage {...pageProps} />
    );

    expect(
      renderedComponent.find('.test-1-default-page').node
    ).to.exist;
  });
});