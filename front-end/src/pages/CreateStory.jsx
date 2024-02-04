import { Autocomplete, TextField, Button, Box, Typography, FormGroup } from '@mui/material'
import React, { useState } from 'react'

function CreateStory() {
    // const tags = []
    const [formValues, setFormValues] = useState({});
    const handleTextFieldChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
<<<<<<< Updated upstream
    const handleSubmit = () => {
      const xhr = new XMLHttpRequest();
      const apiUrl = "http://127.0.0.1:8001/api/stories";
      xhr.open("POST", apiUrl, true);
      xhr.setRequestHeader("Content-Type", "application/json");
  
      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                  console.log(JSON.parse(xhr.responseText));
              } else {
                  console.error('Error:', xhr.statusText);
              }
          }
      };
  
      xhr.onerror = function () {
          console.error('Request failed');
      };
  
      xhr.send(JSON.stringify(formValues));
      console.log(formValues);
  };
  
=======
    const handleSubmit = async (e) => {
        // fetch('/api/stories', {
        //     method: 'POST',
        //     body: JSON.stringify(formValues),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // })
        e.preventDefault();
        const apiUrl = "http://127.0.0.1:8000/api/stories"
        const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
        };
        // fetch(apiUrl, requestOptions).then(response => {
        //     if (!response.ok){
        //         throw new Error('nework response not ok');
        //     }
        //     return response.json();
        // })
        // .then(data => {
        //     console.log(JSON.stringify(data, null, 2))
        // })
        // .catch(error => {
        //     console.error

        // ('Error:', error);
        // });
        const response = await fetch(apiUrl, requestOptions);
        const myJson = await response.json;
        console.log(myJson)

        // fetch('/time').then(res => res.json()).then(data => {
        //     console.log(data.time)
        // });
        console.log(formValues);
    }
>>>>>>> Stashed changes
    return (
        // <div>
        //     <h1>This is the Create Story page</h1>
        //     <Box alignItems={"center"} justifyContent={"center"} display={"flex"}>  
        //         <TextField id="title" label="Title" variant="filled" required/>
        //         <TextField id="author" label="Author" variant="filled"/>
        //         <Autocomplete
        //             disablePortal
        //             id="language"
        //             options={languages}
        //             sx={{width: 300}}
        //             renderInput={(params) => <TextField {...params} label="Language" />}
        //             />
        //         <Box alignItems={"center"} display={"flex"}>
        //             <TextField id="title" label="Tags" variant="filled" required/>
        //             <Button variant="contained" size="large"
        //             onClick={(e) => {
        //                 tags.push(e.target.value)
        //             }}
        //             >Add</Button>
        //             {tags.map((tag, index) => {
        //                 return <Typography variant="h5" key={index}>
        //                     {tag}
        //                 </Typography>
        //             })}
        //         </Box>
        //     </Box>
            
        // </div>
        <form>
            <FormGroup sx={{padding: 2, borderRadius: 2, border: '1px solid'}}>
                <TextField name="title" sx={{paddingBottom: 2}}  variant="outlined" placeholder='Story title' onChange={handleTextFieldChange} />
                <TextField name="author" variant="outlined" placeholder='Author' onChange={handleTextFieldChange} />
                <Autocomplete
                    disablePortal
                    onChange={(e, value) => setFormValues({...formValues, language: value})}
                    id="language"
                    options={languages}
                    sx={{width: 300}}
                    renderInput={(params) => <TextField {...params} label="Language" />}
                    />
                    <TextField name="tags" variant="outlined" placeholder='1819, ethiopia, swahili' onChange={handleTextFieldChange} />
                    <Button variant="outlined" onClick={handleSubmit}>Start recording</Button>
  
            </FormGroup>
        </form>
    )
}

export default CreateStory

const languages = [
    {
      label: "Afrikaans (South Africa)",
      code: "af-ZA"
    },
    {
      label: "Amharic (Ethiopia)",
      code: "am-ET"
    },
    {
      label: "Armenian (Armenia)",
      code: "hy-AM"
    },
    {
      label: "Azerbaijani (Azerbaijan)",
      code: "az-AZ"
    },
    {
      label: "Indonesian (Indonesia)",
      code: "id-ID"
    },
    {
      label: "Malay (Malaysia)",
      code: "ms-MY"
    },
    {
      label: "Bengali (Bangladesh)",
      code: "bn-BD"
    },
    {
      label: "Bengali (India)",
      code: "bn-IN"
    },
    {
      label: "Catalan (Spain)",
      code: "ca-ES"
    },
    {
      label: "Czech (Czech Republic)",
      code: "cs-CZ"
    },
    {
      label: "Danish (Denmark)",
      code: "da-DK"
    },
    {
      label: "German (Germany)",
      code: "de-DE"
    },
    {
      label: "English (Australia)",
      code: "en-AU"
    },
    {
      label: "English (Canada)",
      code: "en-CA"
    },
    {
      label: "English (Ghana)",
      code: "en-GH"
    },
    {
      label: "English (United Kingdom)",
      code: "en-GB"
    },
    {
      label: "English (India)",
      code: "en-IN"
    },
    {
      label: "English (Ireland)",
      code: "en-IE"
    },
    {
      label: "English (Kenya)",
      code: "en-KE"
    },
    {
      label: "English (New Zealand)",
      code: "en-NZ"
    },
    {
      label: "English (Nigeria)",
      code: "en-NG"
    },
    {
      label: "English (Philippines)",
      code: "en-PH"
    },
    {
      label: "English (Singapore)",
      code: "en-SG"
    },
    {
      label: "English (South Africa)",
      code: "en-ZA"
    },
    {
      label: "English (Tanzania)",
      code: "en-TZ"
    },
    {
      label: "English (United States)",
      code: "en-US"
    },
    {
      label: "Spanish (Argentina)",
      code: "es-AR"
    },
    {
      label: "Spanish (Bolivia)",
      code: "es-BO"
    },
    {
      label: "Spanish (Chile)",
      code: "es-CL"
    },
    {
      label: "Spanish (Colombia)",
      code: "es-CO"
    },
    {
      label: "Spanish (Costa Rica)",
      code: "es-CR"
    },
    {
      label: "Spanish (Ecuador)",
      code: "es-EC"
    },
    {
      label: "Spanish (El Salvador)",
      code: "es-SV"
    },
    {
      label: "Spanish (Spain)",
      code: "es-ES"
    },
    {
      label: "Spanish (United States)",
      code: "es-US"
    },
    {
      label: "Spanish (Guatemala)",
      code: "es-GT"
    },
    {
      label: "Spanish (Honduras)",
      code: "es-HN"
    },
    {
      label: "Spanish (Mexico)",
      code: "es-MX"
    },
    {
      label: "Spanish (Nicaragua)",
      code: "es-NI"
    },
    {
      label: "Spanish (Panama)",
      code: "es-PA"
    },
    {
      label: "Spanish (Paraguay)",
      code: "es-PY"
    },
    {
      label: "Spanish (Peru)",
      code: "es-PE"
    },
    {
      label: "Spanish (Puerto Rico)",
      code: "es-PR"
    },
    {
      label: "Spanish (Dominican Republic)",
      code: "es-DO"
    },
    {
      label: "Spanish (Uruguay)",
      code: "es-UY"
    },
    {
      label: "Spanish (Venezuela)",
      code: "es-VE"
    },
    {
      label: "Basque (Spain)",
      code: "eu-ES"
    },
    {
      label: "Filipino (Philippines)",
      code: "fil-PH"
    },
    {
      label: "French (Canada)",
      code: "fr-CA"
    },
    {
      label: "French (France)",
      code: "fr-FR"
    },
    {
      label: "Galician (Spain)",
      code: "gl-ES"
    },
    {
      label: "Georgian (Georgia)",
      code: "ka-GE"
    },
    {
      label: "Gujarati (India)",
      code: "gu-IN"
    },
    {
      label: "Croatian (Croatia)",
      code: "hr-HR"
    },
    {
      label: "Zulu (South Africa)",
      code: "zu-ZA"
    },
    {
      label: "Icelandic (Iceland)",
      code: "is-IS"
    },
    {
      label: "Italian (Italy)",
      code: "it-IT"
    },
    {
      label: "Javanese (Indonesia)",
      code: "jv-ID"
    },
    {
      label: "Kannada (India)",
      code: "kn-IN"
    },
    {
      label: "Khmer (Cambodia)",
      code: "km-KH"
    },
    {
      label: "Lao (Laos)",
      code: "lo-LA"
    },
    {
      label: "Latvian (Latvia)",
      code: "lv-LV"
    },
    {
      label: "Lithuanian (Lithuania)",
      code: "lt-LT"
    },
    {
      label: "Hungarian (Hungary)",
      code: "hu-HU"
    },
    {
      label: "Malayalam (India)",
      code: "ml-IN"
    },
    {
      label: "Marathi (India)",
      code: "mr-IN"
    },
    {
      label: "Dutch (Netherlands)",
      code: "nl-NL"
    },
    {
      label: "Nepali (Nepal)",
      code: "ne-NP"
    },
    {
      label: "Norwegian Bokmål (Norway)",
      code: "nb-NO"
    },
    {
      label: "Polish (Poland)",
      code: "pl-PL"
    },
    {
      label: "Portuguese (Brazil)",
      code: "pt-BR"
    },
    {
      label: "Portuguese (Portugal)",
      code: "pt-PT"
    },
    {
      label: "Romanian (Romania)",
      code: "ro-RO"
    },
    {
      label: "Sinhala (Sri Lanka)",
      code: "si-LK"
    },
    {
      label: "Slovak (Slovakia)",
      code: "sk-SK"
    },
    {
      label: "Slovenian (Slovenia)",
      code: "sl-SI"
    },
    {
      label: "Sundanese (Indonesia)",
      code: "su-ID"
    },
    {
      label: "Swahili (Tanzania)",
      code: "sw-TZ"
    },
    {
      label: "Swahili (Kenya)",
      code: "sw-KE"
    },
    {
      label: "Finnish (Finland)",
      code: "fi-FI"
    },
    {
      label: "Swedish (Sweden)",
      code: "sv-SE"
    },
    {
      label: "Tamil (India)",
      code: "ta-IN"
    },
    {
      label: "Tamil (Singapore)",
      code: "ta-SG"
    },
    {
      label: "Tamil (Sri Lanka)",
      code: "ta-LK"
    },
    {
      label: "Tamil (Malaysia)",
      code: "ta-MY"
    },
    {
      label: "Telugu (India)",
      code: "te-IN"
    },
    {
      label: "Vietnamese (Vietnam)",
      code: "vi-VN"
    },
    {
      label: "Turkish (Turkey)",
      code: "tr-TR"
    },
    {
      label: "Urdu (Pakistan)",
      code: "ur-PK"
    },
    {
      label: "Urdu (India)",
      code: "ur-IN"
    },
    {
      label: "Greek (Greece)",
      code: "el-GR"
    },
    {
      label: "Bulgarian (Bulgaria)",
      code: "bg-BG"
    },
    {
      label: "Russian (Russia)",
      code: "ru-RU"
    },
    {
      label: "Serbian (Serbia)",
      code: "sr-RS"
    },
    {
      label: "Ukrainian (Ukraine)",
      code: "uk-UA"
    },
    {
      label: "Hebrew (Israel)",
      code: "he-IL"
    },
    {
      label: "Arabic (Israel)",
      code: "ar-IL"
    },
    {
      label: "Arabic (Jordan)",
      code: "ar-JO"
    },
    {
      label: "Arabic (United Arab Emirates)",
      code: "ar-AE"
    },
    {
      label: "Arabic (Bahrain)",
      code: "ar-BH"
    },
    {
      label: "Arabic (Algeria)",
      code: "ar-DZ"
    },
    {
      label: "Arabic (Saudi Arabia)",
      code: "ar-SA"
    },
    {
      label: "Arabic (Iraq)",
      code: "ar-IQ"
    },
    {
      label: "Arabic (Kuwait)",
      code: "ar-KW"
    },
    {
      label: "Arabic (Morocco)",
      code: "ar-MA"
    },
    {
      label: "Arabic (Tunisia)",
      code: "ar-TN"
    },
    {
      label: "Arabic (Oman)",
      code: "ar-OM"
    },
    {
      label: "Arabic (State of Palestine)",
      code: "ar-PS"
    },
    {
      label: "Arabic (Qatar)",
      code: "ar-QA"
    },
    {
      label: "Arabic (Lebanon)",
      code: "ar-LB"
    },
    {
      label: "Arabic (Egypt)",
      code: "ar-EG"
    },
    {
      label: "Persian (Iran)",
      code: "fa-IR"
    },
    {
      label: "Hindi (India)",
      code: "hi-IN"
    },
    {
      label: "Thai (Thailand)",
      code: "th-TH"
    },
    {
      label: "Korean (South Korea)",
      code: "ko-KR"
    },
    {
      label: "Chinese, Mandarin (Traditional, Taiwan)",
      code: "zh-TW"
    },
    {
      label: "Chinese, Cantonese (Traditional, Hong Kong)",
      code: "yue-Hant-HK"
    },
    {
      label: "Japanese (Japan)",
      code: "ja-JP"
    },
    {
      label: "Chinese, Mandarin (Simplified, Hong Kong)",
      code: "zh-HK"
    },
    {
      label: "Chinese, Mandarin (Simplified, China)",
      code: "zh"
    }
  ];
