
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
    
    with socketserver.TCPServer(("", PORT), HealthCheckHandler) as httpd:
        logging.info("Serving at port %s", PORT)
        try:
            await asyncio.to_thread(httpd.serve_forever)
        except asyncio.CancelledError:
            logging.info("health check cancel")
            httpd.shutdown() # to terminal infinite loop "serve_forever"
            return
            