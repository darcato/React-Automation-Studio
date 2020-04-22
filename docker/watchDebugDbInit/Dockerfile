FROM python:3.7.5


ADD ./watchDebugDbInit watchDebugDbInit
WORKDIR /watchDebugDbInit

RUN pip install -r requirements.txt



ENTRYPOINT ["python"]

CMD ["-u","initDB.py"]

EXPOSE 27017
