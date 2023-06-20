import icalendar
import requests

def get_ics_from_url(url):
    response = requests.get(url)
    ical = icalendar.Calendar.from_ical(response.text)
    return ical

# Lê a URL do arquivo config.txt
with open('config.txt', 'r') as file:
    url = file.read().strip()

ical = get_ics_from_url(url)

events = []

for component in ical.walk():
    if component.name == 'VEVENT':
        event_summary = component.get('summary')
        event_categories = component.get('categories')
        event_start = component.get('dtstart').dt
        event_end = component.get('dtend').dt

        # Converte o objeto vCategory para string
        categories_string = event_categories.to_ical().decode('utf-8')

        event = {
            'summary': event_summary,
            'categories': categories_string,
            'start': event_start,
            'end': event_end
        }

        events.append(event)

# Escrever as informações dos eventos no arquivo events.txt
with open('events.txt', 'w', encoding='utf-8') as file:
    for event in events:
        file.write("Evento:\n")
        file.write(f"Título: {event['summary']}\n")
        file.write(f"Categorias: {event['categories']}\n")
        file.write(f"Início: {event['start']}\n")
        file.write(f"Término: {event['end']}\n")
        file.write("------------------\n")
