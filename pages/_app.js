import React from 'react';
import App from 'next/app';

// Redux
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import initStore from 'redux/store';

// eslint-disable jsx-props-no-spreading

class RootApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(initStore)(RootApp);
