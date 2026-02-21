import eel


eel.init('web')

@eel.expose
def hello_from_python(name):
    print(f"Python: Helló, {name}!")
    return f"Szia {name}, üdv Pythonból!"


eel.start('index.html', size=(800, 600))#, cmdline_args=[ '--start-fullscreen' ]
