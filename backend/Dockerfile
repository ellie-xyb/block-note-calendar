FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update
RUN apt install -y python3 python3-pip
RUN python3 -m pip install django

WORKDIR /backend
COPY ./ ./

EXPOSE 8000
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
