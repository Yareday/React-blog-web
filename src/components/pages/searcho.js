import React from 'react';
import Elasticsearch from 'react-elasticsearch';
const MySearchComponent = () => (
    <Elasticsearch url="http://example.org/search">
      <SearchBox id="mainSearch" />
      <Facet id="actors" fields={["actors"]} />
      <Facet id="releasedYear" fields={["releasedYear"]} />
      <Results
        id="results"
        items={data =>
          // Map on result hits and display whatever you want. 
          data.map(item => <MyCardItem key={item._id} source={item._source} />)
        }
      />
    </Elasticsearch>
  );