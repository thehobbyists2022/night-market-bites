import os
import subprocess

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def main():
    subprocess.run(["node", os.path.join(BASE, "scripts", "make_icon.cjs")], check=True)

if __name__ == "__main__":
    main()

