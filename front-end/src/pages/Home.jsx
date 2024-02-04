import '../App.css';
import Navbar from '../components/Navbar';
import StoryCard from '../components/StoryCard';


const testStory = {
  id: 0,
  title: 'test', 
  author: 'Varun', 
  time_published: '1/27/2023',
  tags: 'english, swahili, east africa',
  story_body_en: 'vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat'
}

function Home() {
    const stories = [testStory, testStory, testStory,testStory]

    const storyList = []

    stories.forEach((story) => {
        storyList.push(<StoryCard data={story}/>);
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