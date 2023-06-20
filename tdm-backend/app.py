from flask import Flask, render_template, request
from icalendar import Calendar, Event
from datetime import datetime, timedelta
import calendar as cal

app = Flask(__name__)

def save_config(value):
    with open('config.txt', 'w') as file:
        file.write(value)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/config_page.html', methods=['GET', 'POST'])
def config():
    if request.method == 'POST':
        value = request.form['value']
        save_config(value)  # Salva o valor no arquivo config.txt

    return render_template('config_page.html')

@app.route('/calendar_page.html')
def calendar():
    current_date = datetime.now()
    current_month = current_date.month
    current_year = current_date.year
    events = parse_events_file('events.txt', current_month, current_year)
    return render_template('calendar_page.html', events=events, current_month=current_month, current_year=current_year, datetime=datetime, timedelta = timedelta)

def parse_events_file(file_path, month, year):
    events = []
    with open(file_path, 'r', encoding='utf-8') as file:
        event_lines = file.read().split('------------------\n')
        num_days = cal.monthrange(year, month)[1]
        first_weekday = cal.weekday(year, month, 1)
        for event_str in event_lines:
            if event_str.strip():
                event = parse_event_string(event_str.strip())
                events.append(event)
    return events

def parse_event_string(event_str):
    event = {}
    lines = event_str.split('\n')
    for line in lines:
        if line.startswith('Título:'):
            event['title'] = line.split('Título:')[1].strip()
        elif line.startswith('Início:'):
            start = line.split('Início:')[1].strip()
            event['start'] = datetime.fromisoformat(start)
            event['start_day'] = event['start'].day
        elif line.startswith('Término:'):
            end = line.split('Término:')[1].strip()
            event['end'] = datetime.fromisoformat(end)
            event['end_day'] = event['end'].day
    return event

if __name__ == '__main__':
    app.run()
