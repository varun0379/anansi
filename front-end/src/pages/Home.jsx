import '../App.css';
import Navbar from '../components/Navbar';
import StoryCard from '../components/StoryCard';


const testStory = {
  id: 0,
  title: 'test', 
  author: 'Varun', 
  time_published: '1/27/2023',
  tags: 'english, swahili, east africa',
  story_body: 'vul scelerisque in dictum non llunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque',
}

function Home() {
    const stories = [testStory, testStory, testStory,testStory]

    const storyList = []

    stories.forEach((story, idx) => {
        storyList.push(<StoryCard data={story} key={idx}/>);
    });
    return (
        <div className="App">
            <Navbar />
            <div>
                {storyList}
            </div>
        </div>
    )
}

export default Home;