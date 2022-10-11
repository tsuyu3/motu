FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

RUN apt-get -y update && apt install -y build-essential

ARG HOME='/root'
ARG project_dir=/projects/
RUN apt-get install -y git
RUN pip install --upgrade pip && pip install autopep8
ADD requirements.txt .
RUN pip install -r requirements.txt
RUN python -m spacy download en_core_web_sm
#RUN pip install https://s3-us-west-2.amazonaws.com/ai2-s2-scispacy/releases/v0.4.0/en_core_sci_scibert-0.4.0.tar.gz
COPY . $project_dir
WORKDIR $project_dir
CMD ["uvicorn", "app.main:app", "--reload","--host", "0.0.0.0", "--port", "8000", "--log-level", "trace"]