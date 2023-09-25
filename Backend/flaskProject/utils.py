
class Utils:
    def __init__(self):
        pass

    def convertListAndTupleToDict(self, rows, columns, list=False):
        if list:
            return [dict(zip(columns, row)) for row in rows]
        else:
            return dict(zip(columns, rows))