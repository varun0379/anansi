import '../App.css';
import Navbar from '../components/Navbar';
import StoryCard from '../components/StoryCard';


const testStory = {
  id: 0,
  title: 'test', 
  author: 'Varun', 
  time_published: '1/27/2023',
  tags: 'english, swahili, east africa',
<<<<<<< Updated upstream
  story_body: 'vul scelerisque in dictum non llunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque',
=======
  story_body_en: 'vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et'
>>>>>>> Stashed changes
}

async function Home() {
    const stories = [testStory, testStory, testStory,testStory]

    const apiUrl = "http://127.0.0.1:8000/api/stories"
    // const requestOptions = {
    // method: 'GET',
    // headers: {
    //     'Content-Type': 'application/json',
    // },
    // body: JSON.stringify(),
    // };
    const response = await fetch(apiUrl);
    console.log(response)
    const storyList = []

    // stories.forEach((story, idx) => {
    //     story.push(<StoryCard data={story} key={idx}/>);
    // });
    
    return (
        <div className="App">
            <Navbar />
            <div>
                {stories.map((story, idx) => {
                    return (
                        <>
                            <StoryCard data={story} key={idx}/>
                        </>
                    )})
                }
            </div>
        </div>
    )
}

export default Home;