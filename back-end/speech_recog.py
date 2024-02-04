# Importing necessary libraries
import speech_recognition as sr
from openai import OpenAI

# Initializing the OpenAI client
client = OpenAI()

# Setting up the speech recognizer
r = sr.Recognizer()
r.pause_threshold = 1.5  # Sets the length of pause in speech before considering the speech as ended

# Define a function to recognize and process spoken stories
def rec_story(lang_param):
    with sr.Microphone() as source:
        print("Say something...")
        # Listen to the user's speech
        audio = r.listen(source=source, timeout=10)
        print("finished listening")

    try:
        # Recognize speech using Google's speech recognition
        text = r.recognize_google(audio, language="{lang}".format(lang=lang_param))
    
        # Generate a completion using OpenAI's model to retell the story
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant who scribes oral stories in various languages. The text input being given to you is transcribed from speech. YOU SHOULD NOT CREATE A NEW STORY, SIMPLY RETELL THE INPUT CONCISELY IN THE LANGUAGE GIVEN."},
                {"role": "user", "content": "Here is the story: {lel}".format(lel=text)}
            ]
        )

        # Extract the retold story from the response
        response1 = response.choices[0].message.content

        # Check if the story needs to be translated to English
        if lang_param != "en-US":
            # Translate the retold story to English
            response_translated = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a helpful translator who translates stories to English."},
                    {"role": "user", "content": "Translate this story: {joe}".format(joe=response1)}
                ])
            response2 = response_translated.choices[0].message.content
            # Return both the original retold story and its English translation
            return response1 + "\n" + response2
        else:
            # If the original language is English, just return the retold story
            return response1

    except sr.UnknownValueError:
        # Handle the case where speech was not recognized
        print("Sorry, I could not understand your speech.")
    except sr.RequestError as e:
        # Handle other errors such as network issues
        print("Sorry, an error occurred. {0}".format(e))
