import speech_recognition as sr
from openai import OpenAI

client = OpenAI()
client2 = OpenAI()
r = sr.Recognizer()
r.pause_threshold = 2.5


def rec_story(lang_param):
    with sr.Microphone() as source:
        print("Say something...")
        audio = r.listen(source=source,timeout=10)
        print("finished listening")
    try:
        text = r.recognize_google(audio, language = "{lang}".format(lang = lang_param))    
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are an assistant helping a user transcribe a story. Be concise and clear in your responses. Do not embellish the story, your main purpose is to add capitalization and punctuation."},
                {"role": "user", f"content": "The user has provided the following text: {lel}".format(lel = text)}
            ]
        )

        response1 = (response.choices[0].message.content)
    
        # Check if the story needs to be translated to English
        if lang_param != "en-US":
            # Translate the retold story to English
            response_translated = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a helpful translator who translates stories to English."},
                    {"role": "user", f"content": "You are a helpful translator who translates stories to English. Translate this story: {joe}".format(joe=response1)}
                ])
            response2 = response_translated.choices[0].message.content
            # Return both the original retold story and its English translation
            return (response1 + "\n" + response2)
        else:
            # If the original language is English, just return the retold story
            return response1
    
        
    except sr.UnknownValueError:
        print("Sorry, I could not understand your speech.")
    except sr.RequestError as e:
        print("Sorry, an error occurred. {0}".format(e))