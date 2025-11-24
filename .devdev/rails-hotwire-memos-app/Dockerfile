FROM ruby:3.4

RUN apt update
RUN apt install -y build-essential libpq-dev

WORKDIR /app

ADD Gemfile .
ADD Gemfile.lock .
RUN bundle install
ADD . .

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
