import logging

import requests
from bs4 import BeautifulSoup



def get_url_content(url_article: str):
    soup = BeautifulSoup(
        requests.get(
            url_article, headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36"}
        ).content,
        "html.parser",
    )

    return soup

# get https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
def get_meta_description(url_article) -> str:
    soup = get_url_content(str(url_article))
    description = soup.find(name="meta", attrs={'name': 'description'}).get("content")
    logging.debug(f"description for {url_article} is \n {description}")
    return description
