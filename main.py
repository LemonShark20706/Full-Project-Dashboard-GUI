import eel


eel.init('web')

@eel.expose
def hello_from_python(name):
    print(f"Python: Helló, {name}!")
    return f"Szia {name}, üdv Pythonból!"

def notifywith_tickets_js(value):
    eel.updateTicketsFromPython(value)

def notifywith_labors_js(value):
    eel.updateLaborsFromPython(value)

notifywith_tickets_js(["2026-01-10", "2027-01-10", "2028-01-10"])
notifywith_labors_js(["Labor 1", "Labor 2", "Labor 3"])

eel.start('index.html', size=(800, 600))#, cmdline_args=[ '--start-fullscreen' ]