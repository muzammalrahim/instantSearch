import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import moment from 'moment';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
// import './App.css';
export function convertMilliToDate(date) {
  return moment(date).format('MMMM D, YYYY');
}

const searchClient = algoliasearch(
  'CE2M18B8X2',
  'a6bc44f5a25deaf7dfe33c1fa075474e'
);

class Search extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <InstantSearch indexName="superpower_test" searchClient={searchClient}>
            {/* searchbar */}
            <div className='search-brand'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-md-3 col-sm-12'></div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-12 w-100'>
                        <div className='search-top w-100'>
                            <div className='s-inner'>
                                <SearchBox 
                                    reset={false}
                                    translations={{
                                        placeholder: 'Search',
                                    }}
                                />
                            </div>
                        </div> 
                    </div> 
                    <div className='col-md-3'></div>
                </div>
                </div>
            </div>
            
            {/* searchbar */}
            <div className="search-bar">
              <div className='container-fluid'>
                  {/* searchcontent */}
                  <div className='row bi-content'>
                      {/* <ClearRefinements /> */}
                      <div className='col-lg-3 col-md-4 col-sm-12'>
                          <div className='brands-ls'>
                            <h2>Brands</h2>
                            <RefinementList className="brand" attribute="tags" />
                            <Configure hitsPerPage={8} /> 
                          </div>
                      </div>
                      
                      <div className='col-lg-9 col-md-8 col-sm-12'>
                        {/* <div className='row'>
                            <div className='col-md-4 col-sm-12'>
                                <Hits hitComponent={Hit} />
                            </div> 
                        </div> */}
                        <div className='content-rs'>
                            <Hits hitComponent={Hit} />
                        </div>
                      </div>
                  </div>
                  {/* searchcontent */}
                 
            </div>
            
          </div>
          <div className="peg-row">
            <div className='container-fluid'>
              <div className='row bi-content'>
                    <div className='col-md-12'>
                        <div className='pagination-rs'>
                            <Pagination 
                                className="pagination-image"
                                totalPages={10}
                                showFirst={false}
                                translations = {{
                                    previous: `‹ Prev`,
                                    next: 'Next ›',
                                }}
                            />
                        </div>
                    </div> 
              </div>
            </div>
          </div>
          
          
            
          {/* <div className="left-panel">
            <ClearRefinements />
            <h2>Brands</h2>
            <RefinementList className="brand" attribute="tags" />
            <Configure hitsPerPage={8} />
          </div> */}
          
            
            {/* <Hits hitComponent={Hit} /> */}
            
          
        </InstantSearch>
      </div>
    );
  }
}
function Hit(props) {
  console.log('hits', props.hit);
  return (
    <div className=''>
         
        {props.hit.tags.map((tag) => {
        return <div className="hit-tags">{tag}</div>;
      })}
      {/* <Highlight attribute="tags[0]" hit={props.hit} /> */}

      {/* <div className="hit-tags">
        <Highlight attribute="tags[1]" hit={props.hit} />
      </div> */}
      <div className='test'>
         <div className="hit-name">
        <h4>
          <Highlight attribute="name" hit={props.hit} />
        </h4>
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <hr/>
      <div className="hit-date">
        {convertMilliToDate(props.hit.last_updated)}
          </div> 
      </div>
      
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Search;
