import logging
import pytest

from quotaclimat.data_ingestion.scrap_html.scrap_description_article import get_meta_description

@pytest.mark.asyncio
async def test_get_meta_description():
    ouput = await get_meta_description("http://nginxtest:80/mediapart_website.html", "media")
    assert ouput == "description could be parsed with success"