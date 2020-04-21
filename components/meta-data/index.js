/* eslint  prefer-rest-params: 0 */

import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MetaData = ({subreddit, isDefault}) => {
  React.useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    const gtag = () => {
      window.dataLayer.push(arguments);
    };
    gtag('js', new Date());
    gtag('config', 'UA-69537450-6');
  }, [])

  const getDescription = () => {
    const subredditMsg = isDefault ? 'any subreddit' : `r/${subreddit}`;
    return `Turn ${subredditMsg} into a Youtube playlist. Find hundreds of new songs everyday from reddit r/listentothis, music, hiphopheads, deephouse, videos, darkstep, country and more.`;
  }

  const getTitle = () => {
    const titleMsg = isDefault ? 'Reddit' : `r/${subreddit}`;
    return `UNTUNE | ${titleMsg} to Youtube Playlist`;
  }

  const getSubreddit = () => {
    return isDefault ? '' : subreddit;
  }

  return (
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Sarabun:300,400&display=swap" rel="stylesheet" />
      <link rel="icon" href="/images/favicon.ico" />

      <title>{getTitle()}</title>
      <meta name="description" content={getDescription()} />
      <meta httpEquiv="content-language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={`https://untune.io/${getSubreddit()}`} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://untune.io" />
      <meta property="og:title" content={getTitle()} />
      <meta property="og:description" content={getDescription()} />
      <meta property="og:image" content="https://untune.io/images/meta-image.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://untune.io" />
      <meta property="twitter:title" content={getTitle()} />
      <meta property="twitter:description" content={getDescription()} />
      <meta property="twitter:image" content="https://untune.io/images/meta-image.png" />

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-69537450-6" />
    </Head>
  );
}

MetaData.propTypes = {
  subreddit: PropTypes.string.isRequired,
  isDefault: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  subreddit: state.reddit.subreddit,
  isDefault: state.reddit.isDefault,
});

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(MetaData);
