import React from 'react'
import fetch from 'isomorphic-unfetch';

import Layout from '../components/layout';

export default class extends React.Component {
  static async getInitialProps() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    return { series: data };
  }

  render() {
    return (
      <Layout title="Batman series">
        {this.props.series.map((serie) => (
          <div key={serie.name}>
            {serie.show.name}
          </div>
        ))}
      </Layout>
    )
  }
}