from NeupicaV2 import runApp, Compiler
from NeupicaV2 import ( NeuMainWindow )
from NeupicaV2 import ( NeuButton )

class Stora (NeuMainWindow):
    def __init__(self):
        super()
        self.button = NeuButton()

runApp('Stora', Stora())

Compiler.compile()