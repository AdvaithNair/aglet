import React from 'react';
import './App.css';

import {graphql} from 'react-apollo';
import {RECEIVE, UPDATE_OWNERSHIP, DELETE} from './Actions.js';
import {flowRight as compose} from 'lodash';

import Header from './Header/Header.js';
import ListItem from './List/ListItem.js';
import Entry from './Entry/Entry.js';

import {sortByName, sortByRank, sortByPrice, sortByColorway, sortByOwnership} from './Sorting.js';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

//Material Icons
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import SortIcon from '@material-ui/icons/Sort';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

//Main App
class App extends React.Component {
  //State Machine of Sorting
  //SortType 0 = Name, 1 = Rank, 2 = Price, 3 = Color, 4 = Ownership
  state = {
    sortType: 0
  };

  //Gets Order of Sorting
  getOrder = (list) => {
    let type = this.state.sortType;
    if(type === 0) {
      return sortByRank(list);
    } if(type === 1) {
      return sortByName(list);
    } if (type === 2) {
      return sortByPrice(list);
    } if (type === 3) {
      return sortByColorway(list);
    } if (type === 4) {
      return sortByOwnership(list);
    }
  }

  //Updates Ownership (swaps ownership boolean and updates)
  updateOwnership = async (sneaker) => {
    await this.props.updateOwnership({
      variables: {
        id: sneaker.id,
        ownership: !sneaker.ownership
      },
      refetchQueries:[{
        query: RECEIVE
      }]
    });
  };

  //Deletes Sneaker (deletes from database and updates)
  deleteSneaker = async (sneaker) => {
    await this.props.deleteSneaker({
      variables: {
        id: sneaker.id
      },
      refetchQueries:[{
        query: RECEIVE
      }]
    });
  };

  //Updates State for Sort Type
  updateSortType(type) {
    this.setState({sortType: type});
  }

  //Gets HTML Element for Ranking Sorting Block
  getSortRank = () => {
    if(this.state.sortType === 0) {
        return <div className = "sort-select"><SortIcon className = "in-div" /></div>;
    } else {
        return <div className = "sort-not-selected"><SortIcon className = "in-div" /></div>;
    }
  }

  //Gets HTML Element for Name Sorting Block
  getSortName = () => {
      if(this.state.sortType === 1) {
          return <div className = "sort-select"><SortByAlphaIcon className = "in-div" /></div>;
      } else {
          return <div className = "sort-not-selected"><SortByAlphaIcon className = "in-div" /></div>;
      }
  }

  //Gets HTML Element for Price Sorting Block
  getSortPrice = () => {
      if(this.state.sortType === 2) {
          return <div className = "sort-select"><AttachMoneyIcon className = "in-div" /></div>;
      } else {
          return <div className = "sort-not-selected"><AttachMoneyIcon className = "in-div" /></div>;
      }
  }

  //Gets HTML Element for Colorway Sorting Block
  getSortColor = () => {
      if(this.state.sortType === 3) {
          return <div className = "sort-select"><ColorLensIcon className = "in-div" /></div>;
      } else {
          return <div className = "sort-not-selected"><ColorLensIcon className = "in-div" /></div>;
      }
  }

  //Gets HTML Element for Ownership Sorting Block
  getSortOwnership = () => {
      if(this.state.sortType === 4) {
          return <div className = "sort-select"><ThumbsUpDownIcon className = "in-div" /></div>;
      } else {
          return <div className = "sort-not-selected"><ThumbsUpDownIcon className = "in-div" /></div>;
      }
  }

  //Renders App
  render() {
    const {isFetching} = this.state;
    const {data: {loading, getList}} = this.props;

    if (loading) {
      return null;
    }

    return (
      <div>
        {
          isFetching ? <div>Loading...</div> : (
            <div>
              <Header />
              <div style = {{display: "flex"}}>
                <div style = {{margin: "auto", width: "80%"}}>
                  <Tabs className = "tabs" defaultIndex = {0} onSelect = {index => this.updateSortType(index)}>
                    <TabList className = "tab-list">
                        <Tab className = "tab">{this.getSortRank()}</Tab>
                        <Tab className = "tab">{this.getSortName()}</Tab>
                        <Tab className = "tab">{this.getSortPrice()}</Tab>
                        <Tab className = "tab">{this.getSortColor()}</Tab>
                        <Tab className = "tab">{this.getSortOwnership()}</Tab>
                    </TabList>
                    <TabPanel /><TabPanel /><TabPanel /><TabPanel /><TabPanel />
                  </Tabs>
                  <h1 className = "wish-count">Your Collection ({getList.length})</h1>
                  {this.getOrder(getList).map(sneaker => (
                      <ListItem key = {`${sneaker.id}-item`} sneaker = {sneaker} 
                      updateOwnership = {() => this.updateOwnership(sneaker)} 
                      delete = {() => this.deleteSneaker(sneaker)} />
                  ))}
                </div>
              </div>
              <Entry currentRank = {getList.length + 1}/>
            </div>
          )
        }
      </div>
    );
  }
}

//Exports Packages
export default compose(
  graphql(RECEIVE),
  graphql(UPDATE_OWNERSHIP, {name: 'updateOwnership'}),
  graphql(DELETE, {name: 'deleteSneaker'})
)(App);

