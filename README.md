
# TikaPro Marketing Site

Static marketing website for TikaPro — a financial operations platform.

## Prerequisites

- Python 3.x installed on your machine

## Running Locally

From the project directory, start a local HTTP server:

```bash
cd /path/to/tikapro
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

To use a different port:

```bash
python3 -m http.server 3000
```

To bind to a specific address (e.g. make it accessible on your local network):

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```
