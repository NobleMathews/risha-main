import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components'
import Footer from "../../Components/Footer";
import useFirestore from '../../hooks/useEzStore';
import AddNewsForm from './forms/AddNewsForm'
import EditNewsForm from './forms/EditNewsForm'
import NewsTable from './tables/NewsTable'
var _ = require('lodash');

const Title = styled.div`

  width:80%;
  margin: 0 auto;

  :root{
    --primary: #efb6b2;
    --secondary: #4e4e4e;
    --error: #ff4a4a;
  }
  h1{
    color: #efb6b2!important;
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-weight: normal;
  }
  h2,p{
    text-align: center;
  }
  h2{
    margin-top: 60px;
    font-size: 2.6rem;
  }

  /* upload form styles */
form{
  margin: 30px auto 10px;
  text-align: center;
}
label input{
  display: none;
}
label{
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 0 !important;
  line-height: 30px;
  color: var(--primary);
  font-weight: bold;
  font-size: 32px;
}

label span{
  display: inline-block;
  vertical-align:top;
}

label:hover{
  color: #F65314;
}
.output{
  height: 60px;
  font-size: 0.8rem;
}
.error{
  color: var(--error);
}

`;

const PubAdmin = () => {
  const firestore = useFirestore();
  // const [newsData, setDocument] = useState([]);

  const initialFormState = { id: null, date: '', desc: '' }

  // Setting state
	const [ news, setNews ] = useState([])
	const [ currentNews, setCurrentNews ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

  function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  } 

	// CRUD operations
	const addNews = inews => {
		// news.id = news.length + 1
		// setNews([ ...news, inews ])
    firestore.saveCollection('news',inews);
	}

	const deleteNews = id => {
		setEditing(false)
		// setNews(news.filter(news => news.id !== id))
    firestore.deleteDocument('news', id);
	}

	const updateNews = (id, updatedNews) => {
		setEditing(false)
		setNews(news.map(news => (news.id === id ? updatedNews : news)))
    firestore.saveDocument( 'news',id,updatedNews);
	}

	const editRow = news => {
		setEditing(true)
		setCurrentNews({ id: news.id, date: news.date, desc: news.desc })
	}

  useEffect(()=>{
    let isSubscribed = true;

    firestore.getCollection('news',
    (snap) => {
      let documents = [];
      snap.forEach(doc => {
        documents.push({date:doc.data().date, desc:doc.data().desc, id: doc.id});
      });
      if (isSubscribed){
      setNews(documents);
    }
    }
    );
    return () => (isSubscribed = false)
  },[])
  
  return (
    <>
    <Title>
    <h2>News - Admin</h2>
    <p>Add more news to the feed !!</p>
    <div className="container">
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit news</h2>
							<EditNewsForm
								editing={editing}
								setEditing={setEditing}
								currentNews={currentNews}
								updateNews={updateNews}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add news</h2>
							<AddNewsForm addNews={addNews} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2 style={{paddingBottom:"15px"}}>View news</h2>
					<NewsTable news={news} editRow={editRow} deleteNews={deleteNews} />
				</div>
			</div>
		</div>
    </Title>
    <Footer/>
    </>
  )
}

export default PubAdmin;