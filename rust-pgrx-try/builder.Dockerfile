FROM postgres:17.4-bookworm

RUN apt update
RUN apt install -y \
    git \
    make \
    gcc \
    libssl-dev \
    pkg-config \
    curl \
    libreadline-dev \
    build-essential \
    zlib1g-dev \
    bison \
    flex

# postgres:17.4-bookworm イメージが内部でリポジトリを追加しているので apt install できる
RUN apt install -y postgresql-server-dev-17

# rust
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y
ENV PATH="/root/.cargo/bin:$PATH"

# pgrx
RUN cargo install --locked cargo-pgrx

# setup pgrx
RUN cargo pgrx init --no-run

WORKDIR /workdir

ENTRYPOINT sleep infinity
