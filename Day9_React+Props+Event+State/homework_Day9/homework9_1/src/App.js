
import './App.css';
import PictureCard from './PictureCard';

function App() {

  let data = [
    {
      id:101,
      imgSrc : 'https://i1.wp.com/www.a-bellamy.com/wp-content/uploads/2016/11/doctor-strange-movie-composer-cumberbatch-1.jpg?fit=1500%2C750',
      createBy : 'strange',
      likeCount :0,
      CommentCount:0,
    },
    {
      id:102,
      imgSrc : 'http://cartoon.mthai.com/app/uploads/2014/05/815.jpg',
      createBy : 'Scarlet Witch',
      likeCount :0,
      CommentCount:0,
    },
    {
      id:103,
      imgSrc : 'https://cyj3blog.files.wordpress.com/2017/03/vision_forest.jpg',
      createBy : 'Vision',
      likeCount :0,
      CommentCount:0,
    },
    {
      id:104,
      imgSrc : 'https://www.giantfreakinrobot.com/wp-content/uploads/2021/05/tony-stark-robert-downey-jr.jpg',
      createBy : 'Tony',
      likeCount :0,
      commentCount:0,
    },
  ]
  
  return (
    <>
     {data.map((x)=>(
       <PictureCard  
          id={x.id}
          imgSrc={x.imgSrc}
          createBy={x.createBy}
          likeCount={x.likeCount}
          commentCount={x.commentCount}
        />
     ))}
    </>

    
  );
}

export default App;
