import os
import sys


def create_file(file_name, extension):
    open(f"{file_name}.{extension}", 'w')


def main():
    """
    For generate component: py new_file.py -c 'component file name'
    For generate styles: py new_file.py -s 'styles file name'
    For both : py new_file.py -sc 'file name'
    """
    if sys.argv[1] == '-s':
        try:
            create_file(sys.argv[2], "styles.scss")
        except IndexError:
            raise IndexError("You must have provide two args.")
    elif sys.argv[1] == '-c':
        try:
            create_file(sys.argv[2], "component.jsx")
        except IndexError:
            raise IndexError("You must have provide two args.")
    elif sys.argv[1] == '-sc':
        try:
            create_file(sys.argv[2], "component.jsx")
            create_file(sys.argv[2], "styles.scss")
        except IndexError:
            raise IndexError("You must have provide two args.")
    else:
        raise ValueError("You don't provide enough information.")


if __name__ == '__main__':
    main()
