import React, { useState } from 'react';
import './App.css';
import Rating from './components/Rating'
import shortid from 'shortid';

const RatingVideo = Rating(Video);
const RatingArticle = Rating(Article);

function Article(props) {
    return (
        <div className="item item-article">
            <h3><a href="#0">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};

function Video(props) {
    return (
        <div className="item item-video">
            <iframe title="video" src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};

function List(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case 'video':
        return (
          <RatingVideo {...item} key={shortid.generate()} />
        );

      case 'article':
        return (
          <RatingArticle {...item} key={shortid.generate()} />
        );

      default:
        return '';
    }
  });
};

export default function App() {
  // eslint-disable-next-line no-unused-vars
    const [list, setList] = useState([
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            views: 50
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            views: 12
        },
        {
            type: 'article',
            title: 'Невероятные события в неизвестном поселке...',
            views: 175
        },
        {
            type: 'article',
            title: 'Секретные данные были раскрыты!',
            views: 1532
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            views: 4253
        },
        {
            type: 'article',
            title: 'Кот Бегемот обладает невероятной...',
            views: 12,
        },
    ]);

    return (
        <List list={list} />
    );
}
