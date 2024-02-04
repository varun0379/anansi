import json

x = '{"title": "test","author": "name","language": {"label": "Armenian (Armenia)","code": "hy-AM"},"tags": "korean, 1997"}'
y = json.loads(x)

print(y["language"]["code"])