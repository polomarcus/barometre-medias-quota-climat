import logging

import numpy as np
import pandas as pd
import os 
from quotaclimat.data_ingestion.scrap_sitemap import (find_sections, query_one_sitemap_and_transform, get_sections_from_url, normalize_section)
from quotaclimat.data_ingestion.config_sitemap import (SITEMAP_CONFIG)

from quotaclimat.data_ingestion.scrap_html.scrap_description_article import get_meta_description

def test_get_meta_description():
    assert get_meta_description("http://nginxtest:80/mediapart_website.html") == "description could be parsed with success"
