import json

# INPUT: data.json file from https://www.qbreader.org/db
# OUTPUT: output.json
# USAGE: data/questions_and_answers.json

_file = open("data.json", "r")

data = json.loads(_file.read())
final_data = ""
for i in range(200):
    final_data += '{ "question": "' + data["tossups"][i]["question"].replace("for 10 points,", "").replace('"', "'") + '", "answer": "' + data["tossups"][i]["answer"].split(' [')[0] + '"},'

_file = open("output.json", "w")
_file.write(final_data[:-1])
_file.close()
