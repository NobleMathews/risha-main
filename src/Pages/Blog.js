import React from 'react'
import Footer from "../Components/Footer";
import FadeIn from 'react-fade-in';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import Masonry from 'react-masonry-css'
import {Image} from 'react-bootstrap';

const DivB = styled.div`
@media print {
  *,
  *:before,
  *:after {
    background: transparent !important;
    color: #000 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  a,
  a:visited {
    text-decoration: underline;
  }

  a[href]:after {
    content: " (" attr(href) ")";
  }

  abbr[title]:after {
    content: " (" attr(title) ")";
  }

  a[href^="#"]:after,
  a[href^="javascript:"]:after {
    content: "";
  }

  pre,
  blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }

  thead {
    display: table-header-group;
  }

  tr,
  img {
    page-break-inside: avoid;
  }

  img {
    max-width: 100% !important;
  }

  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }

  h2,
  h3 {
    page-break-after: avoid;
  }
}

html {
  font-size: 12px;
}

@media screen and (min-width: 32rem) and (max-width: 48rem) {
  html {
    font-size: 15px;
  }
}

@media screen and (min-width: 48rem) {
  html {
    font-size: 16px;
  }
}

body {
  line-height: 1.85;
}

p,
.splendor-p {
  font-size: 1rem;
  margin-bottom: 1.3rem;
}

h1,
.splendor-h1,
h2,
.splendor-h2,
h3,
.splendor-h3,
h4,
.splendor-h4 {
  margin: 1.414rem 0 .5rem;
  font-weight: inherit;
  line-height: 1.42;
}

h1,
.splendor-h1 {
  margin-top: 0;
  font-size: 3.998rem;
}

h2,
.splendor-h2 {
  font-size: 2.827rem;
}

h3,
.splendor-h3 {
  font-size: 1.999rem;
}

h4,
.splendor-h4 {
  font-size: 1.414rem;
}

h5,
.splendor-h5 {
  font-size: 1.121rem;
}

h6,
.splendor-h6 {
  font-size: .88rem;
}

small,
.splendor-small {
  font-size: .707em;
}

/* https://github.com/mrmrs/fluidity */

img,
canvas,
iframe,
video,
svg,
select,
textarea {
  max-width: 100%;
}

@import url(http://fonts.googleapis.com/css?family=Merriweather:300italic,300);

html {
  font-size: 18px;
  max-width: 100%;
}

body {
  color: #444;
  font-family: 'Merriweather', Georgia, serif;
  margin: 0;
  max-width: 100%;
}

/* === A bit of a gross hack so we can have bleeding divs/blockquotes. */

p,
*:not(div):not(img):not(body):not(html):not(li):not(blockquote):not(p) {
  margin: 1rem auto 1rem;
  max-width: 50rem;
  padding: .25rem;
}

div {
  width: 100%;
}

div img {
  width: 100%;
}

blockquote p {
  font-size: 1.5rem;
  font-style: italic;
  margin: 1rem auto 1rem;
  max-width: 48rem;
}

li {
  margin-left: 2rem;
}

/* Counteract the specificity of the gross *:not() chain. */

h1 {
  padding: 4rem 0 !important;
}

/*  === End gross hack */

p {
  height: auto;
  line-height: 1.45;
}

pre,
code {
  font-family: Menlo, Monaco, "Courier New", monospace;
}

pre {
  background-color: #fafafa;
  font-size: .8rem;
  overflow-x: scroll;
  padding: 1.125em;
}

a,
a:visited {
  color: #3498db;
}

a:hover,
a:focus,
a:active {
  color: #2980b9;
}
`
const DivA = styled.div`
.cardplus {

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}
.cardplus:hover {
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
}
.cardplus a {
  color: inherit;
  text-decoration: none;
}

.cardplus__date {
  background: #08c;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 13px;
  font-weight: bold;
  padding-top: 10px;
}
.cardplus__date__day {
  display: block;
  font-size: 14px;
}
.cardplus__date__month {
  display: block;
  font-size: 10px;
  text-transform: uppercase;
}

// .cardplus__thumb {
//   height: 235px;
//   overflow: hidden;
//   background-color: #000;
//   transition: height 0.3s;
// }
// .cardplus__thumb img {
//   display: block;
//   opacity: 1;
//   transition: opacity 0.3s, transform 0.3s;
//   transform: scale(1);
//   object-fit: cover;
//   height: -webkit-fill-available;
// }
.cardplus:hover .cardplus__thumb img {
  opacity: 0.6;
}

.cardplus__body {
  position: relative;
  padding: 20px;
  transition: height 0.3s;
}

.cardplus__category {
  position: absolute;
  top: -25px;
  left: 0;
  height: 25px;
  padding: 0 15px;
  background: #08c;
  color: #fff;
  font-size: 11px;
  line-height: 25px;
}
.cardplus__category a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
}

.cardplus__title {
  padding: 0 0 10px 0;
  margin: 0;
  font-size: 22px;
  font-weight: bold;
}

.cardplus__subtitle {
  margin: 0;
  padding: 0 0 10px 0;
  color: #08c;
  font-size: 19px;
}

.cardplus__description {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 65px;
  margin: 0;
  padding: 0;
  color: #666c74;
  font-size: 14px;
  line-height: 27px;
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
  transition-delay: 0s;
  transform: translateY(25px);
}

.cardplus__footer {
  position: absolute;
  color: #a3a9ab;
  bottom: 20px;
  left: 20px;
  right: 20px;
  font-size: 11px;
}
.cardplus__footer .icon--comment {
  margin-left: 10px;
}
`

// const DivUn = styled.div`
// `
// class UncontrolledComponentUsingThirdPartyLibrary extends React.Component {
//   constructor(props) {
//     super(props);
//     this._myUncontrolledComponent = React.createRef();
//   }

//    shouldComponentUpdate() {
//      return false;
//    }
   
//    componentDidMount(){
//     const numCols = 3;
//     const colHeights = Array(numCols).fill(0);
//     const container = this._myUncontrolledComponent;
//     Array.from(container.children).forEach((child, i) => {
//       const order = i % numCols;
//       child.style.order = order;
//       colHeights[order] += parseFloat(child.clientHeight);
//     })
//     container.style.height = Math.max(...colHeights) + 'px';
//     }

//     render(){
//       return (
//       <DivUn>
//         <ul ref={this._myUncontrolledComponent}>
//             {["tom","hanks"].map((person, index) => 
//                   <li key={`uncontrolled-item-${index}`}>
//                     { person }
//                  </li>) 
//             }
//             </ul>
//       </DivUn>
//       )
//     }
// }


const breakpointColumnsObj = {
  default: 4,
  1200: 3,
  1100: 2,
  500: 1
};

function Blog() {
  const { id } = useParams();
  const webpackRequireContext = require.context('!markdown-with-front-matter-loader!./_posts', false, /.md$/);
  const blogs = webpackRequireContext.keys().reduce((memo, fileName) => memo.set(fileName.match(/.\/([^.]+).*/)[1], webpackRequireContext(fileName)), new Map())
  console.log(blogs);
  const blog = blogs.get(id);
return (
    <>
    <hr/>
    <FadeIn>
    {blog&&
      <DivB dangerouslySetInnerHTML={{__html: blog.__content}} />
    }
    {!blog&&
    <div className="container">
      <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
        {[...blogs.keys()].map((blogc)=>(
          <DivA>
            <a href={`/blog/${blogc}`}>
            <article class="cardplus">
        {blogs.get(blogc).image &&
              <header class="cardplus__thumb">
                <Image src={blogs.get(blogc).image} fluid />
              </header>
        }
              <div class="cardplus__body mylight">
              {blogs.get(blogc).image &&
                <div class="cardplus__category">{blogs.get(blogc).category}</div>
              }
                <div class="cardplus__title">{blogs.get(blogc).title}</div>
                <div class="cardplus__subtitle">{blogs.get(blogc).subtitle}</div>
              </div>
            </article>
            </a>
          </DivA>
        ))}
      </Masonry>
    </div>
    }
    </FadeIn>
    <Footer/>
    </>
  );
}

export default Blog;
