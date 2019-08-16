import React from 'react';
import './App.css';
import Widget from './components/Widget';
import List from './components/List'
import ListItem from './components/Listitem'
import Link from './components/Link'

const headings = [];
const topNews = [];
const finance = [];
const searchMenu = [];
const popular = [];

function App() {
  return (
    <div className="App">

      <Widget className="widget news">
        <List className="list headings">
          {headings.map((item) => <ListItem key={item.id}><Link href={item.href} title={item.title} /></ListItem>)}
        </List>
        {/* <Date /> */}
        <List className="list top-news">
          {topNews.map((item) => <ListItem key={item.id}><span className="icon">{item.icon}</span><Link href={item.href} title={item.title} /></ListItem>)}
        </List>
        <List className="list finance">
          {finance.map((item) => <ListItem key={item.id}><Link href={item.href} title={item.title} /></ListItem>)}
        </List>
      </Widget>

      <Widget className="education">
      {/* content */}
      </Widget>

      <Widget className="search">
        <List className="list search-menu">
          {searchMenu.map((item) => <ListItem key={item.id}><Link href={item.href} title={item.title} /></ListItem>)}
        </List>
        <form></form>
      </Widget>
      
      <Widget className="popular">
        <List className="list popular">
          {popular.map((item) => <ListItem key={item.id}><Link href={item.href} title={item.title} />{item.content}</ListItem>)}
        </List>
        <form></form>
      </Widget>

    </div>
  );
}

export default App;
