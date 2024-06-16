FROM python:3.12
ENV PYTHONUNBUFFERED=1

WORKDIR /src

RUN pip install poetry

COPY pyproject.toml* poetry.lock* ./

RUN poetry config virtualenvs.in-project true
RUN if [ -f pyproject.toml ]; then poetry install --no-root; fi
