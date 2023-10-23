
import http.server
import socketserver
import os
import logging
import asyncio

class HealthCheckHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b'healthy')

async def run_health_check_server():
    PORT = int(os.environ.get("HEALTHCHECK_PORT", 5000))
    SERVER_ADDRESS = os.environ.get("HEALTHCHECK_SERVER", "")
    with socketserver.TCPServer((SERVER_ADDRESS, PORT), HealthCheckHandler) as httpd:
        logging.info("Serving at %s : port %s" % (SERVER_ADDRESS, PORT))
        try:
            await asyncio.to_thread(httpd.serve_forever)
        except asyncio.CancelledError:
            logging.debug("health check cancel")
            httpd.shutdown() # to terminal infinite loop "serve_forever"
            return
            